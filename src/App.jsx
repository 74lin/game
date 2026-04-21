import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixelButton from './components/PixelButton';
import PixelHealthBar from './components/PixelHealthBar';
import PixelCard from './components/PixelCard';
import AvatarCard from './components/AvatarCard';
import ErrorPopup from './components/ErrorPopup';
import {
  personalities,
  getSixCards,
  getRandomRumor,
  getCardTypeModifeir
} from './data/gameData';
import {
  playClickSound,
  playVictorySound,
  playDefeatSound,
  playDamageSound,
  playHealSound
} from './utils/audio';
import './App.css';

const MAX_HEALTH = 100;
const WIN_HEALTH = 0;
const LOSE_HEALTH = 100;

function App() {
  const [gameState, setGameState] = useState('start');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(MAX_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState(MAX_HEALTH);
  const [currentRumor, setCurrentRumor] = useState(null);
  const [handCards, setHandCards] = useState([]);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState('');
  const [gameResult, setGameResult] = useState(null);
  const [usedRumors, setUsedRumors] = useState([]);  // 本局已用谣言

  // 错误弹窗状态
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupData, setErrorPopupData] = useState(null);

  const startGame = () => {
    playClickSound();
    setGameState('select');
  };

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
    setGameState('playing');
    setUsedRumors([]);  // 重置已用谣言
    const rumor = getRandomRumor(null, []);
    setCurrentRumor(rumor);
    setHandCards(getSixCards(rumor));
    setMessage('第 1 回合 - 选择你的卡牌！');
  };

  // 执行回合结束逻辑（抽取出来复用）
  const applyRoundEnd = (newEnemyHP, newPlayerHP) => {
    setEnemyHealth(newEnemyHP);
    setPlayerHealth(newPlayerHP);

    setTimeout(() => {
      if (newEnemyHP <= 0) {
        setGameResult('win');
        setGameState('result');
        playVictorySound();
        setMessage('胜利！你成功击破了谣言！');
        return;
      }
      if (newPlayerHP <= 0) {
        setGameResult('lose');
        setGameState('result');
        playDefeatSound();
        setMessage('失败！谣言占据了你的心灵...');
        return;
      }
      // 没有结束 → 发新牌、进入下一回合
      const newRound = round + 1;
      const newRumor = getRandomRumor(null, usedRumors);
      setCurrentRumor(newRumor);
      setHandCards(getSixCards(newRumor));
      setUsedRumors([...usedRumors, currentRumor.content]);
      setRound(newRound);
      setMessage(`第 ${newRound} 回合 - 选择你的卡牌！`);
      playDamageSound();
    }, 600);
  };

  const playCard = (card) => {
    if (!selectedCharacter) return;

    const baseDamage = card.damage || 10;
    const baseHeal = card.heal || 0;
    const modifier = selectedCharacter.resistance[card.type] || 1.0;

    let damage = Math.floor(baseDamage * modifier);
    let heal = Math.floor(baseHeal * modifier);

    if (card.isCorrect === false) {
      // 选错：伤害降低70%，无治疗，额外扣10HP
      damage = Math.floor(damage * 0.3);
      heal = 0;

      // 显示错误解释弹窗
      setErrorPopupData({
        selectedAnswer: card.displayText,
        correctAnswer: currentRumor.correct,
        explanation: card.explanation || currentRumor.explanation || '这个辟谣是错误的。'
      });
      setShowErrorPopup(true);
      setMessage('辟谣错误！长辈更生气了！');

      // 先return，等弹窗关闭后再执行惩罚
      return;
    } else {
      // 选对：获得治疗
      damage = Math.floor(damage * modifier);
      heal = Math.floor(baseHeal * modifier);
      setMessage('辟谣成功！谣言被削弱了！');
      playHealSound();
    }

    // 计算新数值并执行
    const newEnemyHP = Math.max(0, enemyHealth - damage);
    const newPlayerHP = Math.max(0, Math.min(MAX_HEALTH, playerHealth + heal));
    applyRoundEnd(newEnemyHP, newPlayerHP);
  };

  // 弹窗关闭时的回调 - 执行选错惩罚
  const handleErrorPopupClose = () => {
    setShowErrorPopup(false);

    // 执行惩罚：扣10HP，谣言减少（但已减少过了，所以只扣HP）
    const damage = 0; // 谣言伤害已在playCard中处理
    const hpChange = -10;

    const newEnemyHP = Math.max(0, enemyHealth); // 谣言已扣血，不再重复扣
    const newPlayerHP = Math.max(0, Math.min(MAX_HEALTH, playerHealth + hpChange));

    playDamageSound();
    setPlayerHealth(newPlayerHP);

    setTimeout(() => {
      if (newPlayerHP <= 0) {
        setGameResult('lose');
        setGameState('result');
        playDefeatSound();
        setMessage('失败！谣言占据了你的心灵...');
        return;
      }
      // 进入下一回合
      const newRound = round + 1;
      const newRumor = getRandomRumor(null, usedRumors);
      setCurrentRumor(newRumor);
      setHandCards(getSixCards(newRumor));
      setUsedRumors([...usedRumors, currentRumor.content]);
      setRound(newRound);
      setMessage(`第 ${newRound} 回合 - 选择你的卡牌！`);
      playDamageSound();
    }, 600);
  };

  const restartGame = () => {
    playClickSound();
    setSelectedCharacter(null);
    setPlayerHealth(MAX_HEALTH);
    setEnemyHealth(MAX_HEALTH);
    setCurrentRumor(null);
    setHandCards([]);
    setRound(1);
    setMessage('');
    setGameResult(null);
    setShowErrorPopup(false);
    setErrorPopupData(null);
    setGameState('start');
  };

  const renderStartScreen = () => (
    <motion.div
      className="screen-container start-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className="start-brand">VERITAS | 止谣于视</div>

      <h1 className="pixel-title-main start-title">
        谣言<span className="start-title-highlight">粉碎</span>机
      </h1>
      <p className="pixel-title-sub">RUMOR CRUSHER</p>

      <div className="start-divider"></div>

      <div className="start-description">
        <p>在这个信息爆炸的时代</p>
        <p>各种谣言铺天盖地</p>
        <p>选择你的人格类型</p>
        <p>用卡牌的力量击碎谣言！</p>
      </div>

      <div className="start-btn-wrapper">
        <PixelButton onClick={startGame}>
          开始游戏
        </PixelButton>
      </div>

      <div className="start-stats">
        <div className="start-stat-item">
          <span className="start-stat-number">68</span>
          <span className="start-stat-label">条谣言</span>
        </div>
        <div className="start-stat-divider"></div>
        <div className="start-stat-item">
          <span className="start-stat-number">6</span>
          <span className="start-stat-label">种人格</span>
        </div>
        <div className="start-stat-divider"></div>
        <div className="start-stat-item">
          <span className="start-stat-number">3</span>
          <span className="start-stat-label">类卡牌</span>
        </div>
      </div>

      <div className="start-slogan">
        打败谣言不仅需要科学数据<br />更需要沟通的温度与技巧
      </div>

      <div className="start-footer">毕业设计作品 · 2026</div>
    </motion.div>
  );

  const renderSelectScreen = () => (
    <motion.div
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="pixel-title-main" style={{ fontSize: '20px' }}>
        选择你的人格
      </h2>
      <p className="pixel-title-sub">SELECT YOUR PERSONALITY</p>

      <div className="avatar-grid">
        {personalities.map((person) => (
          <AvatarCard
            key={person.id}
            character={person}
            onClick={selectCharacter}
          />
        ))}
      </div>
    </motion.div>
  );

  const renderPlayingScreen = () => (
    <motion.div
      className="screen-container playing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="game-header">
        <div className="character-info">
          <span className="character-avatar">{selectedCharacter?.avatar}</span>
          <span className="character-name">{selectedCharacter?.name}</span>
          <span className="character-mbti">{selectedCharacter?.mbti}</span>
        </div>
        <div className="round-info">回合 {round}</div>
      </div>

      <div className="health-section">
        <PixelHealthBar
          current={enemyHealth}
          max={MAX_HEALTH}
          label="谣言强度"
          color="red"
        />
        <PixelHealthBar
          current={playerHealth}
          max={MAX_HEALTH}
          label="你的生命"
          color="green"
        />
      </div>

      {currentRumor && (
        <div className="rumor-section">
          <div className="rumor-label">当前谣言</div>
          <div className="rumor-content">
            <span className="rumor-type">[{currentRumor.type}]</span>
            {currentRumor.content}
          </div>
        </div>
      )}

      <div className="message-box">
        <p>{message}</p>
      </div>

      <div className="cards-section">
        <div className="cards-label">你的手牌</div>
        <div className="cards-grid">
          <AnimatePresence>
            {handCards.map((card, index) => (
              <PixelCard
                key={index}
                cardData={card}
                currentRumor={currentRumor}
                onClick={playCard}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 错误弹窗 */}
      <ErrorPopup
        show={showErrorPopup}
        data={errorPopupData}
        onClose={handleErrorPopupClose}
      />
    </motion.div>
  );

  const renderResultScreen = () => (
    <motion.div
      className="screen-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className={`result-display ${gameResult}`}>
        <div className="result-icon">
          {gameResult === 'win' ? '🏆' : '💀'}
        </div>
        <h2 className="pixel-title-main">
          {gameResult === 'win' ? '胜利!' : '失败'}
        </h2>
        <p className="pixel-title-sub">
          {gameResult === 'win' ? 'VICTORY' : 'DEFEAT'}
        </p>
        <p className="result-message">{message}</p>
        <p className="result-stats">
          坚持了 {round} 回合
        </p>
      </div>

      <div className="result-character">
        <span className="character-avatar-large">{selectedCharacter?.avatar}</span>
        <span className="character-name">{selectedCharacter?.name}</span>
        <span className="character-mbti">{selectedCharacter?.mbti}</span>
      </div>

      <PixelButton onClick={restartGame} variant="primary">
        再来一局
      </PixelButton>
    </motion.div>
  );

  return (
    <div className="game-container">
      <AnimatePresence mode="wait">
        {gameState === 'start' && renderStartScreen()}
        {gameState === 'select' && renderSelectScreen()}
        {gameState === 'playing' && renderPlayingScreen()}
        {gameState === 'result' && renderResultScreen()}
      </AnimatePresence>
    </div>
  );
}

export default App;

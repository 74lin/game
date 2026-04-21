import { motion } from 'framer-motion';
import '../styles/pixel.css';
import { playCardSound } from '../utils/audio';
import { cardTypes } from '../data/gameData';

export default function PixelCard({
  cardData,
  onClick,
  selected = false,
  disabled = false
}) {
  const { name, type, power, description, effect, displayText, isCorrect } = cardData;

  const handleClick = () => {
    if (!disabled && onClick) {
      playCardSound();
      onClick(cardData);
    }
  };

  const getTypeBarClass = () => {
    switch (type) {
      case 'rational': return 'pixel-card-bar-rational';
      case 'emotion': return 'pixel-card-bar-emotion';
      case 'special': return 'pixel-card-bar-special';
      default: return '';
    }
  };

  return (
    <motion.div
      className={`pixel-card ${selected ? 'pixel-card-selected' : ''}`}
      onClick={handleClick}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={disabled ? {} : { scale: 1.02, y: -3 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
    >
      {/* 顶部类型色条 + 文字标签 */}
      <div className={`pixel-card-bar ${getTypeBarClass()}`}>
        {cardTypes[type]?.name || type}
      </div>

      {/* 辟谣描述 — 卡片唯一主体内容 */}
      <div className="pixel-card-body">
        {displayText}
      </div>
    </motion.div>
  );
}

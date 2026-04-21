import { motion } from 'framer-motion';
import '../styles/pixel.css';
import { playSelectSound } from '../utils/audio';

export default function AvatarCard({
  character,
  onClick,
  selected = false,
  disabled = false
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      playSelectSound();
      onClick(character);
    }
  };

  return (
    <motion.div
      className={`pixel-avatar-card ${selected ? 'selected' : ''}`}
      onClick={handleClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={disabled ? {} : { scale: 1.05, y: -4 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
    >
      <div
        className="pixel-avatar-img"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}
      >
        {character.avatar}
      </div>
      <div className="pixel-avatar-name">{character.name}</div>
      <span className="pixel-avatar-mbti">{character.mbti}</span>
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '10px',
        color: '#8888AA',
        marginTop: '8px',
        fontStyle: 'italic'
      }}>
        "{character.quote}"
      </div>
    </motion.div>
  );
}

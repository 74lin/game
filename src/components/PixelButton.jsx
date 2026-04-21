import { motion } from 'framer-motion';
import '../styles/pixel.css';
import { playClickSound } from '../utils/audio';

export default function PixelButton({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
  className = ''
}) {
  const handleClick = (e) => {
    if (!disabled && onClick) {
      playClickSound();
      onClick(e);
    }
  };

  const variantClass = `pixel-btn pixel-btn-${variant}`;

  return (
    <motion.button
      className={`${variantClass} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

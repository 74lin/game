import { motion, AnimatePresence } from 'framer-motion';
import PixelButton from './PixelButton';

export default function ErrorPopup({ show, data, onClose }) {
  if (!show || !data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            backgroundColor: '#1A1A2E',
            border: '4px solid #FF6B6B',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '360px',
            width: '100%',
            boxShadow: '0 0 30px rgba(255, 107, 107, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '16px',
            color: '#FF6B6B',
            textAlign: 'center',
            marginBottom: '16px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 0 rgba(0,0,0,0.5)'
          }}>
            辟谣失败！
          </h2>

          <div style={{ marginBottom: '12px' }}>
            <div style={{
              fontSize: '10px',
              color: '#8888AA',
              marginBottom: '4px',
              fontFamily: "'Courier New', monospace"
            }}>
              你的选择（错误）
            </div>
            <div style={{
              backgroundColor: '#2A1A1A',
              border: '2px solid #FF6B6B',
              borderRadius: '4px',
              padding: '8px',
              fontSize: '12px',
              color: '#FF6B6B',
              fontFamily: "'Courier New', monospace",
              lineHeight: '1.4'
            }}>
              {data.selectedAnswer}
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{
              fontSize: '10px',
              color: '#8888AA',
              marginBottom: '4px',
              fontFamily: "'Courier New', monospace"
            }}>
              正确辟谣
            </div>
            <div style={{
              backgroundColor: '#1A2A1A',
              border: '2px solid #6BCB77',
              borderRadius: '4px',
              padding: '8px',
              fontSize: '12px',
              color: '#6BCB77',
              fontFamily: "'Courier New', monospace",
              lineHeight: '1.4'
            }}>
              {data.correctAnswer}
            </div>
          </div>

          <div style={{
            backgroundColor: '#16213E',
            border: '2px solid #4A4A6A',
            borderRadius: '4px',
            padding: '10px',
            marginBottom: '16px'
          }}>
            <div style={{
              fontSize: '10px',
              color: '#FFD93D',
              marginBottom: '6px',
              fontFamily: "'Courier New', monospace",
              textTransform: 'uppercase'
            }}>
              为什么错了？
            </div>
            <div style={{
              fontSize: '11px',
              color: '#E8E8E8',
              fontFamily: "'Courier New', monospace",
              lineHeight: '1.5'
            }}>
              {data.explanation}
            </div>
          </div>

          <PixelButton onClick={onClose} style={{ width: '100%' }}>
            我知道了
          </PixelButton>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

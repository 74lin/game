import '../styles/pixel.css';

export default function PixelHealthBar({
  current,
  max,
  label,
  color = 'cyan'
}) {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  const fillColorClass = `pixel-health-bar-fill pixel-health-bar-fill-${color}`;

  const blocks = [];
  const blockCount = 10;
  const filledBlocks = Math.round((percentage / 100) * blockCount);

  for (let i = 0; i < blockCount; i++) {
    blocks.push(
      <div
        key={i}
        style={{
          width: '10%',
          height: '100%',
          background: i < filledBlocks ? undefined : 'rgba(0,0,0,0.3)',
          boxShadow: i < filledBlocks ? 'inset 0 -2px 0 rgba(0,0,0,0.3)' : 'none'
        }}
      />
    );
  }

  return (
    <div className="pixel-health-bar">
      {label && <div className="pixel-health-bar-label">{label}</div>}
      <div className="pixel-health-bar-container">
        <div
          className={fillColorClass}
          style={{
            width: `${percentage}%`,
            display: 'flex'
          }}
        >
          {blocks.slice(0, filledBlocks)}
        </div>
      </div>
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '10px',
        color: '#8888AA',
        textAlign: 'right'
      }}>
        {current} / {max}
      </div>
    </div>
  );
}

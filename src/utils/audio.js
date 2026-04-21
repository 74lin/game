let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function createOscillator(frequency, type = 'square', duration = 0.1, volume = 0.3) {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
}

export function playClickSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(800, 'square', 0.08, 0.25);
    setTimeout(() => createOscillator(1000, 'square', 0.05, 0.2), 30);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playSelectSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(400, 'square', 0.1, 0.2);
    setTimeout(() => createOscillator(600, 'square', 0.1, 0.2), 80);
    setTimeout(() => createOscillator(800, 'square', 0.15, 0.25), 160);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playCardSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(523, 'square', 0.08, 0.25);
    setTimeout(() => createOscillator(659, 'square', 0.08, 0.25), 60);
    setTimeout(() => createOscillator(784, 'square', 0.15, 0.3), 120);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playDamageSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(150, 'sawtooth', 0.15, 0.4);
    setTimeout(() => createOscillator(100, 'square', 0.2, 0.35), 50);
    setTimeout(() => createOscillator(80, 'square', 0.25, 0.3), 150);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playHealSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(600, 'sine', 0.15, 0.2);
    setTimeout(() => createOscillator(800, 'sine', 0.15, 0.2), 100);
    setTimeout(() => createOscillator(1000, 'sine', 0.2, 0.25), 200);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playVictorySound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const notes = [523, 659, 784, 1047];
    notes.forEach((note, i) => {
      setTimeout(() => createOscillator(note, 'square', 0.2, 0.25), i * 150);
    });
    setTimeout(() => {
      createOscillator(1047, 'square', 0.3, 0.3);
      createOscillator(784, 'square', 0.3, 0.2);
      createOscillator(523, 'square', 0.4, 0.25);
    }, 600);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

export function playDefeatSound() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    createOscillator(400, 'square', 0.3, 0.25);
    setTimeout(() => createOscillator(350, 'square', 0.3, 0.25), 200);
    setTimeout(() => createOscillator(300, 'square', 0.3, 0.25), 400);
    setTimeout(() => createOscillator(250, 'square', 0.5, 0.2), 600);
  } catch (_e) {
    // Audio not available, silent fail
  }
}

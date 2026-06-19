// Flowing "sound wave" animations for the hero and origin canvases.
// The founder's mockup shipped no animation code, so this is an interpretive,
// brand-appropriate motion: stacked sine waves drifting in the teal palette.
//
// Respects `prefers-reduced-motion`: renders a single static frame and stops.

interface WaveConfig {
  color: string;
  amplitude: number; // peak height as a fraction of canvas height
  wavelength: number; // px per cycle
  speed: number; // horizontal drift (px/frame at 60fps)
  yOffset: number; // vertical center as a fraction of canvas height
  lineWidth: number;
}

const TEAL_WAVES: WaveConfig[] = [
  { color: 'rgba(94, 200, 180, 0.45)', amplitude: 0.10, wavelength: 320, speed: 0.6, yOffset: 0.5, lineWidth: 1.5 },
  { color: 'rgba(29, 158, 117, 0.35)', amplitude: 0.16, wavelength: 460, speed: 0.4, yOffset: 0.55, lineWidth: 1.25 },
  { color: 'rgba(15, 110, 86, 0.30)', amplitude: 0.22, wavelength: 620, speed: 0.25, yOffset: 0.6, lineWidth: 1 },
];

function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  let phase = 0;

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || canvas.clientWidth || 1;
    const h = rect.height || canvas.clientHeight || 1;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = () => {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.clearRect(0, 0, w, h);

    for (const wave of TEAL_WAVES) {
      ctx.beginPath();
      ctx.lineWidth = wave.lineWidth;
      ctx.strokeStyle = wave.color;
      const amp = wave.amplitude * h;
      const baseY = wave.yOffset * h;
      for (let x = 0; x <= w; x += 4) {
        const y = baseY + Math.sin((x / wave.wavelength) * Math.PI * 2 + phase * wave.speed) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  };

  const tick = () => {
    phase += 0.03;
    draw();
    raf = requestAnimationFrame(tick);
  };

  resize();
  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) draw();
  });

  if (reduceMotion) {
    draw(); // single static frame
  } else {
    tick();
  }

  return () => cancelAnimationFrame(raf);
}

function init() {
  ['hero-c', 'origin-c'].forEach((id) => {
    const el = document.getElementById(id);
    if (el instanceof HTMLCanvasElement) setupCanvas(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

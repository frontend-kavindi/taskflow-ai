import { useEffect } from "react";
import confetti from "canvas-confetti";

export function fireConfetti() {
  const defaults = {
    spread: 60,
    ticks: 50,
    gravity: 1.2,
    decay: 0.94,
    startVelocity: 20,
    colors: ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"],
  };

  confetti({
    ...defaults,
    particleCount: 30,
    origin: { x: 0.5, y: 0.7 },
    scalar: 0.8,
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 20,
      origin: { x: 0.4, y: 0.65 },
      scalar: 0.6,
    });
  }, 150);
}

export function ConfettiOnMount() {
  useEffect(() => {
    fireConfetti();
  }, []);
  return null;
}

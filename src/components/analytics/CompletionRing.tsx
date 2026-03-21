import { useTaskStore } from "@/store/taskStore";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function CompletionRing() {
  const tasks = useTaskStore((s) => s.tasks);

  const { completed, total, pct } = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    return { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 };
  }, [tasks]);

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="7" />
          <motion.circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            transform="rotate(-90 55 55)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            key={pct}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-xl font-bold text-card-foreground"
          >
            {pct}%
          </motion.span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-card-foreground">Completion</p>
        <p className="text-xs text-muted-foreground">
          {completed}/{total} tasks done
        </p>
      </div>
    </div>
  );
}

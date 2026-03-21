import { motion } from "framer-motion";

type CharacterMood = "waving" | "celebrating" | "thinking" | "cheering" | "idle";

const moodConfig: Record<CharacterMood, { bodyColor: string; expression: string; label: string }> = {
  waving: { bodyColor: "hsl(var(--primary))", expression: "😊", label: "Friendly waving character" },
  celebrating: { bodyColor: "hsl(var(--success))", expression: "🎉", label: "Celebrating character" },
  thinking: { bodyColor: "hsl(var(--warning))", expression: "🤔", label: "Thinking character" },
  cheering: { bodyColor: "hsl(var(--primary))", expression: "🥳", label: "Cheering character" },
  idle: { bodyColor: "hsl(var(--muted-foreground))", expression: "😌", label: "Idle character" },
};

export function AnimatedCharacter({
  mood = "idle",
  size = 120,
  message,
}: {
  mood?: CharacterMood;
  size?: number;
  message?: string;
}) {
  const config = moodConfig[mood];

  return (
    <div className="flex flex-col items-center gap-3" role="img" aria-label={config.label}>
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        animate={
          mood === "waving"
            ? { rotate: [0, -5, 5, -5, 0] }
            : mood === "celebrating"
            ? { scale: [1, 1.1, 1], y: [0, -8, 0] }
            : mood === "thinking"
            ? { rotate: [0, -3, 3, 0] }
            : mood === "cheering"
            ? { y: [0, -12, 0] }
            : {}
        }
        transition={{
          duration: mood === "celebrating" ? 0.6 : 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        {/* Body */}
        <svg viewBox="0 0 120 120" width={size} height={size} className="drop-shadow-lg">
          {/* Shadow */}
          <ellipse cx="60" cy="112" rx="28" ry="6" fill="hsl(var(--border))" opacity="0.5" />
          
          {/* Body */}
          <motion.ellipse
            cx="60"
            cy="78"
            rx="26"
            ry="28"
            fill={config.bodyColor}
            animate={mood === "celebrating" ? { ry: [28, 26, 28] } : {}}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
          
          {/* Head */}
          <motion.circle
            cx="60"
            cy="40"
            r="24"
            fill={config.bodyColor}
            animate={
              mood === "thinking"
                ? { cx: [60, 62, 58, 60] }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Eyes */}
          <motion.circle
            cx="52"
            cy="36"
            r="3"
            fill="white"
            animate={mood === "celebrating" ? { ry: [3, 1, 3] } : {}}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.circle
            cx="68"
            cy="36"
            r="3"
            fill="white"
            animate={mood === "celebrating" ? { ry: [3, 1, 3] } : {}}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          {/* Pupils */}
          <motion.circle
            cx="53"
            cy="36"
            r="1.5"
            fill="hsl(var(--foreground))"
            animate={mood === "thinking" ? { cx: [53, 55, 51, 53] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="69"
            cy="36"
            r="1.5"
            fill="hsl(var(--foreground))"
            animate={mood === "thinking" ? { cx: [69, 71, 67, 69] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Mouth */}
          {mood === "celebrating" || mood === "cheering" ? (
            <ellipse cx="60" cy="48" rx="6" ry="4" fill="white" opacity="0.9" />
          ) : mood === "thinking" ? (
            <line x1="55" y1="48" x2="65" y2="48" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          ) : (
            <path d="M54 46 Q60 52 66 46" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          )}
          
          {/* Arms */}
          {mood === "waving" && (
            <>
              <motion.line
                x1="35" y1="70" x2="18" y2="50"
                stroke={config.bodyColor}
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ x2: [18, 14, 22, 18], y2: [50, 45, 45, 50] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <line x1="85" y1="70" x2="95" y2="85" stroke={config.bodyColor} strokeWidth="6" strokeLinecap="round" />
            </>
          )}
          {mood === "celebrating" && (
            <>
              <motion.line
                x1="35" y1="70" x2="20" y2="45"
                stroke={config.bodyColor}
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ y2: [45, 38, 45] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              <motion.line
                x1="85" y1="70" x2="100" y2="45"
                stroke={config.bodyColor}
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ y2: [45, 38, 45] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
              />
            </>
          )}
          {(mood === "thinking" || mood === "idle") && (
            <>
              <line x1="35" y1="70" x2="25" y2="85" stroke={config.bodyColor} strokeWidth="6" strokeLinecap="round" />
              <line x1="85" y1="70" x2="95" y2="85" stroke={config.bodyColor} strokeWidth="6" strokeLinecap="round" />
            </>
          )}
          {mood === "cheering" && (
            <>
              <motion.line
                x1="35" y1="70" x2="15" y2="55"
                stroke={config.bodyColor}
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <motion.line
                x1="85" y1="70" x2="105" y2="55"
                stroke={config.bodyColor}
                strokeWidth="6"
                strokeLinecap="round"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </>
          )}
          
          {/* Legs */}
          <line x1="50" y1="102" x2="48" y2="112" stroke={config.bodyColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="70" y1="102" x2="72" y2="112" stroke={config.bodyColor} strokeWidth="5" strokeLinecap="round" />
        </svg>
        
        {/* Floating emoji */}
        {(mood === "celebrating" || mood === "cheering") && (
          <motion.span
            className="absolute -top-2 -right-2 text-lg"
            animate={{ y: [0, -6, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {config.expression}
          </motion.span>
        )}
      </motion.div>
      
      {message && (
        <motion.p
          className="text-sm text-muted-foreground text-center max-w-[200px]"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}

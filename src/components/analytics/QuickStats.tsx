import { useTaskStore } from "@/store/taskStore";
import { CheckCircle2, Clock, AlertTriangle, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { parseISO, isPast, isToday } from "date-fns";

export function QuickStats() {
  const tasks = useTaskStore((s) => s.tasks);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    const overdue = tasks.filter((t) => {
      const d = parseISO(t.deadline);
      return isPast(d) && !t.completed && !isToday(d);
    }).length;
    return { total, completed, inProgress, overdue };
  }, [tasks]);

  const cards = [
    { label: "Total Tasks", value: stats.total, icon: ListTodo, colorClass: "text-primary bg-primary/10" },
    { label: "Completed", value: stats.completed, icon: CheckCircle2, colorClass: "text-success bg-success/10" },
    { label: "In Progress", value: stats.inProgress, icon: Clock, colorClass: "text-warning bg-warning/10" },
    { label: "Overdue", value: stats.overdue, icon: AlertTriangle, colorClass: "text-destructive bg-destructive/10" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ y: -2, scale: 1.02 }}
          className="rounded-xl border bg-card p-4 card-elevated transition-shadow hover:task-card-shadow-hover"
        >
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.colorClass}`}>
              <card.icon className="h-5 w-5" />
            </div>
            <div>
              <motion.p
                key={card.value}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-card-foreground"
              >
                {card.value}
              </motion.p>
              <p className="text-xs text-muted-foreground">{card.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

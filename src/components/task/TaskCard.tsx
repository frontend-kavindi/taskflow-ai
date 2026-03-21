import { Task, useTaskStore } from "@/store/taskStore";
import { PriorityBadge } from "./PriorityBadge";
import { CategoryBadge } from "./CategoryBadge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { format, parseISO, isPast, isToday } from "date-fns";
import { fireConfetti } from "@/components/animations/ConfettiEffect";
import { useCallback } from "react";

export function TaskCard({ task, index }: { task: Task; index: number }) {
  const { toggleComplete, deleteTask } = useTaskStore();
  const deadlineDate = parseISO(task.deadline);
  const overdue = isPast(deadlineDate) && !task.completed && !isToday(deadlineDate);

  const handleToggle = useCallback(() => {
    if (!task.completed) {
      fireConfetti();
    }
    toggleComplete(task.id);
  }, [task.completed, task.id, toggleComplete]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -40, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05, type: "spring", stiffness: 300, damping: 30 }}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative rounded-xl border bg-card p-5 task-card-shadow transition-all duration-200 hover:task-card-shadow-hover",
        task.completed && "opacity-50",
        overdue && "border-destructive/30 bg-destructive/5"
      )}
    >
      {/* Priority indicator bar */}
      <div
        className={cn(
          "absolute left-0 top-3 bottom-3 w-1 rounded-full",
          task.priority === "high" && "bg-priority-high",
          task.priority === "medium" && "bg-priority-medium",
          task.priority === "low" && "bg-priority-low"
        )}
      />

      <div className="flex items-start gap-4 pl-3">
        <motion.div whileTap={{ scale: 0.85 }}>
          <Checkbox
            checked={task.completed}
            onCheckedChange={handleToggle}
            className="mt-1 h-5 w-5 rounded-full border-2 transition-colors data-[state=checked]:bg-success data-[state=checked]:border-success"
            aria-label={`Mark "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
          />
        </motion.div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <PriorityBadge priority={task.priority} />
            <CategoryBadge category={task.category} />
            {overdue && (
              <motion.span
                className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold text-destructive uppercase tracking-wider"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Overdue
              </motion.span>
            )}
          </div>

          <h3
            className={cn(
              "font-semibold text-card-foreground leading-tight transition-all",
              task.completed && "line-through text-muted-foreground"
            )}
          >
            {task.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{task.description}</p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
            <span className={cn("flex items-center gap-1.5", overdue && "text-destructive font-medium")}>
              <Calendar className="h-3.5 w-3.5" />
              {format(deadlineDate, "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              Effort: {task.effort}/5
            </span>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => deleteTask(task.id)}
            aria-label={`Delete "${task.title}"`}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

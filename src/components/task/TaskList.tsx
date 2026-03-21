import { useTaskStore } from "@/store/taskStore";
import { TaskCard } from "./TaskCard";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { AnimatedCharacter } from "@/components/animations/AnimatedCharacter";

export function TaskList() {
  const { tasks, filter, searchQuery } = useTaskStore();

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      if (filter.priority && t.priority !== filter.priority) return false;
      if (filter.category && t.category !== filter.category) return false;
      if (filter.status && t.status !== filter.status) return false;
      if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase()) && !t.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [tasks, filter, searchQuery]);

  const sorted = useMemo(() => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return [...filtered].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }, [filtered]);

  const completedCount = tasks.filter((t) => t.completed).length;
  const allDone = tasks.length > 0 && completedCount === tasks.length;

  if (sorted.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <AnimatedCharacter
          mood={tasks.length === 0 ? "waving" : "thinking"}
          size={140}
          message={
            tasks.length === 0
              ? "Hey there! Add your first task to get started 🚀"
              : "No tasks match your filters. Try adjusting them!"
          }
        />
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      {allDone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center py-4"
        >
          <AnimatedCharacter mood="celebrating" size={100} message="All tasks done! You're amazing! 🎉" />
        </motion.div>
      )}
      <AnimatePresence mode="popLayout">
        {sorted.map((task, i) => (
          <TaskCard key={task.id} task={task} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
}

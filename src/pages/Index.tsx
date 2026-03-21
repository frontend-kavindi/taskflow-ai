import { AppLayout } from "@/components/layout/AppLayout";
import { QuickStats } from "@/components/analytics/QuickStats";
import { TaskFilters } from "@/components/task/TaskFilters";
import { TaskList } from "@/components/task/TaskList";
import { AddTaskDialog } from "@/components/task/AddTaskDialog";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6 relative">
        <FloatingParticles />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground">My Tasks</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage and prioritize your work</p>
          </div>
          <AddTaskDialog />
        </motion.div>
        <QuickStats />
        <TaskFilters />
        <TaskList />
      </div>
    </AppLayout>
  );
};

export default Index;

import { create } from "zustand";

export type Priority = "low" | "medium" | "high";
export type Category = "work" | "personal" | "health" | "learning" | "finance";
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: Category;
  status: TaskStatus;
  effort: number; // 1-5
  deadline: string; // ISO date
  completed: boolean;
  createdAt: string;
}

interface TaskStore {
  tasks: Task[];
  filter: { priority?: Priority; category?: Category; status?: TaskStatus };
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  setFilter: (f: Partial<TaskStore["filter"]>) => void;
  addTask: (task: Omit<Task, "id" | "createdAt" | "completed">) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const sampleTasks: Task[] = [
  {
    id: "1", title: "Design system audit", description: "Review and update all design tokens and component variants for consistency",
    priority: "high", category: "work", status: "in-progress", effort: 4, deadline: "2026-03-25", completed: false, createdAt: "2026-03-18",
  },
  {
    id: "2", title: "Weekly meal prep", description: "Plan and prepare healthy meals for the upcoming week",
    priority: "medium", category: "health", status: "todo", effort: 2, deadline: "2026-03-23", completed: false, createdAt: "2026-03-19",
  },
  {
    id: "3", title: "Read chapter 5 of DDIA", description: "Designing Data-Intensive Applications - Replication chapter",
    priority: "low", category: "learning", status: "todo", effort: 3, deadline: "2026-03-28", completed: false, createdAt: "2026-03-20",
  },
  {
    id: "4", title: "Ship API v2 endpoints", description: "Finalize and deploy the new REST API version with breaking changes",
    priority: "high", category: "work", status: "todo", effort: 5, deadline: "2026-03-24", completed: false, createdAt: "2026-03-17",
  },
  {
    id: "5", title: "Budget review Q1", description: "Analyze spending and adjust budget for next quarter",
    priority: "medium", category: "finance", status: "done", effort: 2, deadline: "2026-03-20", completed: true, createdAt: "2026-03-15",
  },
  {
    id: "6", title: "Morning run routine", description: "Establish consistent 5K morning run schedule",
    priority: "low", category: "health", status: "in-progress", effort: 1, deadline: "2026-03-30", completed: false, createdAt: "2026-03-19",
  },
];

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: sampleTasks,
  filter: {},
  searchQuery: "",
  setSearchQuery: (q) => set({ searchQuery: q }),
  setFilter: (f) => set((s) => ({ filter: { ...s.filter, ...f } })),
  addTask: (task) =>
    set((s) => ({
      tasks: [
        ...s.tasks,
        { ...task, id: crypto.randomUUID(), createdAt: new Date().toISOString(), completed: false },
      ],
    })),
  updateTask: (id, updates) =>
    set((s) => ({ tasks: s.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)) })),
  deleteTask: (id) => set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),
  toggleComplete: (id) =>
    set((s) => ({
      tasks: s.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, status: !t.completed ? "done" : "todo" } : t
      ),
    })),
}));

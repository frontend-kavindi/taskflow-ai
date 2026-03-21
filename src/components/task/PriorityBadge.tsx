import { Priority } from "@/store/taskStore";
import { cn } from "@/lib/utils";

const config: Record<Priority, { label: string; classes: string }> = {
  low: { label: "Low", classes: "bg-success/10 text-success border-success/20" },
  medium: { label: "Medium", classes: "bg-warning/10 text-warning border-warning/20" },
  high: { label: "High", classes: "bg-destructive/10 text-destructive border-destructive/20" },
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  const c = config[priority];
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", c.classes)}>
      {c.label}
    </span>
  );
}

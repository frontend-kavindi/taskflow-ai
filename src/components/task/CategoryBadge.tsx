import { Category } from "@/store/taskStore";
import { Briefcase, User, Heart, BookOpen, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const config: Record<Category, { icon: typeof Briefcase; classes: string }> = {
  work: { icon: Briefcase, classes: "text-primary bg-primary/10" },
  personal: { icon: User, classes: "text-accent-foreground bg-accent" },
  health: { icon: Heart, classes: "text-success bg-success/10" },
  learning: { icon: BookOpen, classes: "text-warning bg-warning/10" },
  finance: { icon: DollarSign, classes: "text-muted-foreground bg-muted" },
};

export function CategoryBadge({ category }: { category: Category }) {
  const c = config[category];
  const Icon = c.icon;
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium capitalize", c.classes)}>
      <Icon className="h-3 w-3" />
      {category}
    </span>
  );
}

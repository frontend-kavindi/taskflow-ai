import { useTaskStore } from "@/store/taskStore";
import { useMemo } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const PRIORITY_COLORS = ["hsl(160,60%,45%)", "hsl(38,92%,50%)", "hsl(0,72%,51%)"];
const CATEGORY_COLORS = ["hsl(245,58%,51%)", "hsl(160,60%,45%)", "hsl(38,92%,50%)", "hsl(0,72%,51%)", "hsl(220,10%,46%)"];

export function AnalyticsCharts() {
  const tasks = useTaskStore((s) => s.tasks);

  const priorityData = useMemo(() => {
    const counts = { low: 0, medium: 0, high: 0 };
    tasks.forEach((t) => counts[t.priority]++);
    return [
      { name: "Low", value: counts.low },
      { name: "Medium", value: counts.medium },
      { name: "High", value: counts.high },
    ];
  }, [tasks]);

  const categoryData = useMemo(() => {
    const counts: Record<string, number> = {};
    tasks.forEach((t) => { counts[t.category] = (counts[t.category] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name: name.charAt(0).toUpperCase() + name.slice(1), value }));
  }, [tasks]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-lg border bg-card p-4 card-elevated">
        <h3 className="text-sm font-semibold text-card-foreground mb-4">By Priority</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={priorityData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
              {priorityData.map((_, i) => <Cell key={i} fill={PRIORITY_COLORS[i]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-4 mt-2">
          {priorityData.map((d, i) => (
            <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: PRIORITY_COLORS[i] }} />
              {d.name}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border bg-card p-4 card-elevated">
        <h3 className="text-sm font-semibold text-card-foreground mb-4">By Category</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={categoryData}>
            <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(220,10%,46%)" />
            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} stroke="hsl(220,10%,46%)" />
            <Tooltip />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {categoryData.map((_, i) => <Cell key={i} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

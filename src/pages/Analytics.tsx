import { AppLayout } from "@/components/layout/AppLayout";
import { QuickStats } from "@/components/analytics/QuickStats";
import { AnalyticsCharts } from "@/components/analytics/AnalyticsCharts";
import { CompletionRing } from "@/components/analytics/CompletionRing";

const Analytics = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
          <p className="text-sm text-muted-foreground mt-1">Insights into your productivity</p>
        </div>
        <QuickStats />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <AnalyticsCharts />
          </div>
          <div className="rounded-lg border bg-card p-6 card-elevated flex items-center justify-center">
            <CompletionRing />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Analytics;

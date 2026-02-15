import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import { MetricCard } from "./components/MetricCard.tsx";
import { CheckCircle2, CircleDashed, Clock, Inbox } from "lucide-react";
import { MostFeedbackPagesCard } from "./components/MostFeedbackPagesCard.tsx";
import { BrowserStats } from "./components/BrowserStatsCard.tsx";
import { RecentFeedbacks } from "./components/RecentFeedbacks.tsx";
import useGetFeedbackService from "@/services/getFeedbackService/useGetFeedbackService.ts";

export default function Dashboard() {
  const { services } = useGetFeedbackService({ domainId: "123" });
  return (
    <MainPagesLayout>
      <div className=" px-8 pt-2 space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Feedback overview for{" "}
            <span className="font-semibold">app.example.com</span>
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Total Feedback" value={3} icon={Inbox} />

          <MetricCard
            title="Pending"
            value={2}
            icon={Clock}
            iconClassName="text-amber-600 bg-amber-50"
          />

          <MetricCard
            title="In Progress"
            value={0}
            icon={CircleDashed}
            iconClassName="text-blue-600 bg-blue-50"
          />

          <MetricCard
            title="Resolved"
            value={1}
            icon={CheckCircle2}
            iconClassName="text-emerald-600 bg-emerald-50"
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <MostFeedbackPagesCard />
          <BrowserStats />
        </div>
        <RecentFeedbacks />
      </div>
    </MainPagesLayout>
  );
}

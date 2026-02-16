import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import { MetricCard } from "./components/MetricCard.tsx";
import { CheckCircle2, CircleDashed, Clock, Inbox } from "lucide-react";
import { MostFeedbackPagesCard } from "./components/MostFeedbackPagesCard.tsx";
import { BrowserStats } from "./components/BrowserStatsCard.tsx";
import { RecentFeedbacks } from "./components/RecentFeedbacks.tsx";
import useGetFeedbacks from "@/hooks/useGetFeedbacks.ts";
import { useNavigate, useParams } from "react-router";
import useGetDomainService from "@/services/getDomainService/useGetDomainService.ts";
import { useEffect } from "react";
import PageLoader from "@/components/Loaders/PageLoader.tsx";
import {
  TopbarContainer,
  TopbarGroup,
} from "@/components/Layouts/TopbarLayout.tsx";
import { Button } from "@repo/ui";

export default function Dashboard() {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const {
    services: { getDomainService },
  } = useGetDomainService();

  const {
    services: { getFeedbackService },
    data: { feedbackMetricData },
  } = useGetFeedbacks();

  useEffect(() => {
    if (!domainId || getDomainService.isLoading) return;
    if (
      !getDomainService?.data?.data?.some((domain) => domain?.id === domainId)
    ) {
      const newDomainId = getDomainService?.data?.data?.[0]?.id?.toString();
      if (newDomainId) {
        navigate(`/dashboard/${newDomainId}`);
      }
    }
  }, [domainId, getDomainService?.isLoading]);

  if (getDomainService?.isLoading || getFeedbackService?.isLoading)
    return <PageLoader />;

  return (
    <MainPagesLayout>
      <TopbarContainer title="Feedbacks">
        <TopbarGroup>
          <Button>Add domain</Button>
          <Button>Add domain</Button>
        </TopbarGroup>
      </TopbarContainer>

      <div className="space-y-8">
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
          <MetricCard
            title="Total Feedback"
            value={feedbackMetricData?.TOTAL}
            icon={Inbox}
          />

          <MetricCard
            title="Pending"
            value={feedbackMetricData?.PENDING}
            icon={Clock}
            iconClassName="text-amber-600 bg-amber-50"
          />

          <MetricCard
            title="Invalid"
            value={feedbackMetricData?.INVALID}
            icon={CircleDashed}
            iconClassName="text-blue-600 bg-blue-50"
          />

          <MetricCard
            title="Resolved"
            value={feedbackMetricData?.RESOLVED}
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

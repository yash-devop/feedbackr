import PageLoader from "@/components/Loaders/PageLoader.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import useGetDomainService from "@/services/getDomainService/useGetDomainService.ts";
import { columns } from "./components/Columns.tsx";
import { DataTable } from "./components/DataTable.tsx";
import { Plus } from "lucide-react";
import { SectionLayout } from "@/components/Layouts/SectionLayout.tsx";
import {
  TopbarContainer,
  TopbarGroup,
} from "@/components/Layouts/TopbarLayout.tsx";
import { Button } from "@repo/ui";

const Domains = () => {
  const {
    services: { getDomainService },
  } = useGetDomainService();

  const domainsData = getDomainService?.data?.data || [];

  if (getDomainService?.isLoading) return <PageLoader />;

  return (
    <MainPagesLayout>
      <TopbarContainer title="Domains">
        <TopbarGroup>
          <Button variant="default" size="sm">
            <Plus className="size-4" /> Add Domain
          </Button>
        </TopbarGroup>
      </TopbarContainer>
      <SectionLayout>
        <div className="space-y-8">
          <div className="border border-border rounded-md">
            <DataTable columns={columns} data={domainsData} />
          </div>
        </div>
      </SectionLayout>
    </MainPagesLayout>
  );
};

export default Domains;

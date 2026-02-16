import PageLoader from "@/components/Loaders/PageLoader.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import useGetDomainService from "@/services/getDomainService/useGetDomainService.ts";
import { columns } from "./components/Columns.tsx";
import { Button, Table } from "@repo/ui";
import { DataTable } from "./components/DataTable.tsx";
import { Plus } from "lucide-react";

const Domains = () => {
  const {
    services: { getDomainService },
  } = useGetDomainService();

  const domainsData = getDomainService?.data?.data || [];

  if (getDomainService?.isLoading) return <PageLoader />;

  return (
    <MainPagesLayout>
      <div className="space-y-8">
        <div className="space-y-1 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Registered Domains
            </h1>
            <p className="text-muted-foreground">
              Manage domains collecting feedback
            </p>
          </div>
          <Button variant="outline">
            <Plus className="size-4" /> Add Domain
          </Button>
        </div>

        <div className="border border-border rounded-md">
          <DataTable columns={columns} data={domainsData} />
        </div>
      </div>
    </MainPagesLayout>
  );
};

export default Domains;

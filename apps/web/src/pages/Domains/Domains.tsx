import PageLoader from "@/components/Loaders/PageLoader.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import useGetDomainService from "@/services/getDomainService/useGetDomainService.ts";
import { columns } from "./components/Columns.tsx";
import { DataTable } from "./components/DataTable.tsx";

const Domains = () => {
  const {
    services: { getDomainService },
  } = useGetDomainService();

  const domainsData = getDomainService?.data?.data || [];

  if (getDomainService?.isLoading) return <PageLoader />;

  return (
    <MainPagesLayout>
      <div className="space-y-8">
        <div className="border border-border rounded-md">
          <DataTable columns={columns} data={domainsData} />
        </div>
      </div>
    </MainPagesLayout>
  );
};

export default Domains;

import { SectionLayout } from "@/components/Layouts/SectionLayout.tsx";
import {
  TopbarContainer,
  TopbarGroup,
} from "@/components/Layouts/TopbarLayout.tsx";
import PageLoader from "@/components/Loaders/PageLoader.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import useGetFeedbackService from "@/services/getFeedbackService/useGetFeedbackService.ts";
import {
  DataTable,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@repo/ui";
import { SearchIcon } from "lucide-react";
import { useParams } from "react-router";
import { columns } from "./components/Columns.tsx";

export const FeedbacksPage = () => {
  // const filterOptions = ["pending", "resolved", "done"] as const;

  const params = useParams<{ domainId: string }>();
  const {
    services: { getFeedbackService },
  } = useGetFeedbackService({
    domainId: params.domainId ?? "",
  });

  const feedbackData = getFeedbackService?.data?.data || [];

  if (getFeedbackService?.isLoading) return <PageLoader />;

  const dummyData = [
    {
      id: "1",
      email: "yashkamble.dev@gmail.com",
      message:
        "Sir, This window is throwing unexpected error message everytime i visit it. How can you guys never ever checked this page ? This is soo frustrating man !",
      clientContext: { os: "windows", browser: "chrome" },
      createdAt: "2026-02-05T09:23:41.321Z",
      updatedAt: "2026-02-14T17:52:10.874Z",
      debugContext: { logs: [] },
      images: [
        "https://unsplash.com/photos/athletes-resting-on-a-track-after-training-D43JYb0yTKU",
      ],
      status: "PENDING",
      domainId: "",
      url: "https://unsplash.com/",
      domain: { name: "", status: "" },
    },
  ];
  return (
    <>
      <MainPagesLayout>
        <TopbarContainer title="Feedbacks">
          <TopbarGroup>
            <InputGroup className="h-8">
              <InputGroupInput
                placeholder="Search Feedback"
                className="placeholder:text-neutral-500 text-foreground"
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="cursor-pointer text-neutral-500 hover:text-neutral-600"
                >
                  <Funnel />
                  Filters
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="border-border">
                {filterOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    asChild
                    className={cn(
                      `focus:bg-neutral-200 text-neutral-700! hover:bg-muted! hover:text-neutral-700! font-medium group`,
                    )}
                  >
                    <div className="flex justify-between w-full cursor-pointer">
                      <div className="flex items-center gap-x-1">
                        <p className="text-xs capitalize">{option}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
          </TopbarGroup>
        </TopbarContainer>
        <SectionLayout>
          <div className="space-y-8">
            <div className="border border-border rounded-md">
              <DataTable
                columns={columns}
                data={feedbackData}
                // data={feedbackData}
              />
            </div>
          </div>
        </SectionLayout>
      </MainPagesLayout>
    </>
  );
};

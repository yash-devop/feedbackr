import { SectionLayout } from "@/components/Layouts/SectionLayout.tsx";
import {
  TopbarContainer,
  TopbarGroup,
} from "@/components/Layouts/TopbarLayout.tsx";
import MainPagesLayout from "@/components/MainPagesLayout.tsx";
import { cn } from "@/lib/utils.ts";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@repo/ui";
import { Funnel, SearchIcon } from "lucide-react";

export const FeedbacksPage = () => {
  const filterOptions = ["pending", "resolved", "done"] as const;
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
            <DropdownMenu>
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
            </DropdownMenu>
          </TopbarGroup>
        </TopbarContainer>
        <SectionLayout>NEWWWW</SectionLayout>
      </MainPagesLayout>
    </>
  );
};

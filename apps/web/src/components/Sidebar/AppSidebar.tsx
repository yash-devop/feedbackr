import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@repo/ui";

export function AppSidebar() {
  return (
    <Sidebar className="w-[250px]">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>hello</SidebarGroup>
        <SidebarGroup>giiii</SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

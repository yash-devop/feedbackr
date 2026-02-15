import { useAuth } from "@/features/auth/hooks.ts";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui";

export function AppSidebar() {
  const { signOut, userSession } = useAuth();
  const user = userSession.data?.user;
  return (
    <Sidebar className="w-[250px] bg-muted">
      <SidebarHeader className="bg-muted" />
      <SidebarContent className="bg-muted">
        <SidebarGroup>
          hello dsad sad sad sad sad sad sad sad sad sad sad sad sa das dsa dsad
          sad as d
        </SidebarGroup>
        <SidebarGroup>giiii</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Avatar>
          <AvatarImage src={user?.image as string} />
          <AvatarFallback>{user?.name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-xs">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <Button onClick={() => signOut()}>Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}

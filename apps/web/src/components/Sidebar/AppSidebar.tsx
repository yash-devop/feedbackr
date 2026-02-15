import { useAuth } from "@/features/auth/hooks.ts";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarGroupAction,
} from "@repo/ui";

export function AppSidebar() {
  const { signOut, userSession } = useAuth();
  const user = userSession.data?.user;
  return (
    <Sidebar className="bg-muted border-none_">
      <SidebarHeader className="bg-muted w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className="flex items-center justify-between gap-x-3 w-full hover:text-foreground/80 cursor-pointer"
            >
              <p>app.example.com</p>
              <p className="text-xs">X</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent className="bg-muted">
        <SidebarGroup className="text-xs uppercase">
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarGroupAction>dsauhdu</SidebarGroupAction>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="text-xs uppercase">
          <SidebarGroupLabel>SETTINGS</SidebarGroupLabel>
        </SidebarGroup>
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

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
  Label,
} from "@repo/ui";

interface AccountSectionProps {
  user:
    | {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    | undefined;
}

export const AccountSection = ({ user }: AccountSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-medium text-foreground">Account</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Your profile information
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label className="text-xs text-foreground">Name</Label>
          <Input
            value={user?.name || ""}
            readOnly
            className="h-9 text-sm bg-muted/30 text-muted-foreground cursor-not-allowed border-border/60"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-foreground">Email</Label>
          <Input
            value={user?.email || ""}
            readOnly
            className="h-9 text-sm bg-muted/30 text-muted-foreground cursor-not-allowed border-border/60"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-foreground">Avatar</Label>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border border-border">
              <AvatarImage src={user?.image as string} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs text-muted-foreground"
                disabled
              >
                Upload new
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

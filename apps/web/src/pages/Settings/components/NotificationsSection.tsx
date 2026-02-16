import { Label, Switch } from "@repo/ui";

export const NotificationsSection = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-medium text-foreground">Notifications</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Manage email preferences
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-1">
          <div>
            <Label className="text-xs text-foreground">New feedback</Label>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Receive emails when new feedback is submitted
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-1">
          <div>
            <Label className="text-xs text-foreground">Weekly summary</Label>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Get a weekly digest every Monday
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-1">
          <div>
            <Label className="text-xs text-foreground">Critical issues</Label>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Instant alerts for high-priority feedback
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </section>
  );
};

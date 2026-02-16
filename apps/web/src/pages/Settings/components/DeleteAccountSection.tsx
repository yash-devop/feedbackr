import { Button } from "@repo/ui";

interface DeleteAccountSectionProps {
  onDelete: () => void;
}

export const DeleteAccountSection = ({
  onDelete,
}: DeleteAccountSectionProps) => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-sm font-medium text-red-600">Delete Account</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Permanently delete your account and all data
        </p>
      </div>

      <div className="bg-red-50/50 border border-red-100 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-medium text-red-900">Delete Account</h3>
            <p className="text-[11px] text-red-700 mt-1">
              This action cannot be undone
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-100"
            onClick={onDelete}
          >
            Delete account
          </Button>
        </div>
      </div>
    </section>
  );
};

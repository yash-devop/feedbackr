import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui";
import { X } from "lucide-react";
import { useState } from "react";

type ConfirmDialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "destructive" | "default" | "ghost";
  onConfirm: () => void;
  trigger?: React.ReactNode;
};

export const ConfirmDialog = ({
  open,
  onOpenChange,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "destructive",
  onConfirm,
  trigger,
}: ConfirmDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const dialogOpen = isControlled ? open : internalOpen;
  const setDialogOpen = isControlled ? onOpenChange! : setInternalOpen;

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}

      <DialogOverlay className="bg-transparent backdrop-blur-[2px]" />

      <DialogContent
        forceMount
        className="sm:max-w-[500px] p-0 border-0 bg-transparent shadow-none [&>button]:hidden overflow-visible"
      >
        <div className="p-2 bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl">
          <div className="bg-white rounded-2xl p-6 w-full h-full border border-gray-100/50">
            <div className="flex items-center justify-between mb-2">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  {title}
                </DialogTitle>
              </DialogHeader>

              <DialogClose className="text-gray-400 hover:text-gray-900 transition-colors">
                <X className="w-5 h-5" />
              </DialogClose>
            </div>

            <div className="space-y-5">
              <p className="text-sm text-muted-foreground">{description}</p>

              <div className="flex items-center w-fit gap-2">
                <Button
                  type="button"
                  variant="default"
                  onClick={() => setDialogOpen(false)}
                >
                  {cancelLabel}
                </Button>

                <Button
                  type="button"
                  variant={variant}
                  className="hover:bg-red-400 hover:text-white"
                  onClick={() => {
                    onConfirm();
                    setDialogOpen(false);
                  }}
                >
                  {confirmLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

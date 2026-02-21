import { useDeleteFeedback } from "@/hooks/useDeleteFeedback.ts";
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
import { Trash, X } from "lucide-react";
import { useState } from "react";

export const FeedbackDeleteSection = () => {
  const [open, setOpen] = useState(false);
  const {
    mutations: { deleteFeedbackMutation },
  } = useDeleteFeedback();

  return (
    <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size={"sm"} className="cursor-pointer">
          <Trash />
          Delete Permanently
        </Button>
      </DialogTrigger>

      <DialogOverlay className="bg-transparent backdrop-blur-[2px]" />

      <DialogContent
        forceMount
        className="sm:max-w-[500px] p-0 border-0 bg-transparent shadow-none [&>button]:hidden overflow-visible"
      >
        <div className="p-2 bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-6 w-full h-full border border-gray-100/50"
          >
            <div className="flex items-center justify-between mb-2">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  Are you sure ?
                </DialogTitle>
              </DialogHeader>

              <DialogClose className="text-gray-400 hover:text-gray-900 transition-colors">
                <X className="w-5 h-5" />
              </DialogClose>
            </div>

            <div className="space-y-5">
              <p className="text-sm text-muted-foreground">
                Process is irreversible. This action will permanently delete the
                feedback.
              </p>
              <div className="flex items-center w-fit gap-2">
                <Button
                  type="button"
                  variant={"default"}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    deleteFeedbackMutation.mutate();
                  }}
                  variant={"ghost"}
                  className="hover:bg-red-400 hover:text-white"
                >
                  Delete Domain
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

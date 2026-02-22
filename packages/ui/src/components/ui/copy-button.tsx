import { cn } from "@repo/utils/client";
import { Button } from "./button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const CopyButton = ({
  value,
  text,
}: {
  value: string;
  text?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Copied to Clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant={text ? "outline" : "ghost"}
      size={text ? "default" : "icon-sm"}
      className={cn(
        "ml-1 text-muted-foreground hover:text-foreground cursor-pointer",
        text ? "h-10" : "h-6 w-6",
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="h-3 w-3 text-primary" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {text}
    </Button>
  );
};

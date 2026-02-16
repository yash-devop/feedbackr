import { Button } from "@repo/ui";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Copied to Clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-6 w-6 ml-1 text-muted-foreground hover:text-foreground "
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="h-3 w-3 text-primary" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  );
};

export default CopyButton;

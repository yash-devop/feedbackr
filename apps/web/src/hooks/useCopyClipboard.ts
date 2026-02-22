import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const copyToClipboard = async (text: string, label: string) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard`);
      setIsCopied(true);
    } catch (error) {
      toast.error("Clipboard access denied");
      setIsCopied(false);
    }
  };

  useEffect(() => {
    if (!isCopied) return;

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isCopied]);

  return {
    copyToClipboard,
    isCopied,
  };
};

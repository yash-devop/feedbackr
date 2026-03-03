import { handlePostMessage } from "@/utils/postMessage.utils.ts";
import { useState, useCallback } from "react";

export function useScreenshot() {
  const [isCapturing, setIsCapturing] = useState(false);

  const captureScreen = useCallback(async (): Promise<File | null> => {
    setIsCapturing(true);

    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        window.removeEventListener("message", handleMessage);
        setIsCapturing(false);
        console.error("Feedback Widget: Screenshot request timed out.");
        resolve(null);
      }, 10000);

      const handleMessage = async (event: MessageEvent) => {
        const { type, data } = event.data || {};

        if (type === "SCREENSHOT_SUCCESS") {
          clearTimeout(timeoutId);
          window.removeEventListener("message", handleMessage);

          try {
            const blob = await (await fetch(data)).blob();
            const file = new File([blob], "feedback-screenshot.png", {
              type: "image/png",
            });

            setIsCapturing(false);
            resolve(file);
          } catch (error) {
            console.error("Failed to parse screenshot data:", error);
            setIsCapturing(false);
            resolve(null);
          }
        } else if (type === "SCREENSHOT_ERROR") {
          clearTimeout(timeoutId);
          window.removeEventListener("message", handleMessage);
          console.error(
            "Feedback Widget: Parent SDK failed to take screenshot.",
          );
          setIsCapturing(false);
          resolve(null);
        }
      };

      window.addEventListener("message", handleMessage);

      handlePostMessage("TAKE_SCREENSHOT");
    });
  }, []);

  return { captureScreen, isCapturing };
}

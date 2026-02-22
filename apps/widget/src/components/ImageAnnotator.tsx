import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@repo/ui";
export const ImageAnnotator = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [eraseMode, setEraseMode] = useState(false);

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute right-full h-full bottom-[190px] mr-3 border border-border rounded-lg z-50"
    >
      <section className="border-b border-border p-3 bg-neutral-100 rounded-b-md">
        Add Annotation
      </section>
      <div className="w-[840px] h-[600px] flex items-center justify-center rounded-lg p-2">
        <ReactSketchCanvas
          className="w-[840px] h-[600px] rounded-xl"
          ref={canvasRef}
          backgroundImage="https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          exportWithBackgroundImage
          strokeColor="#ffeeed"
        />
      </div>
      <section className="border border-border p-3 bg-neutral-100 rounded-b-md">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant={"outline"}
            disabled={!eraseMode}
            onClick={handlePenClick}
          >
            Pen
          </Button>
          <Button
            type="button"
            variant={"outline"}
            disabled={eraseMode}
            onClick={handleEraserClick}
          >
            Eraser
          </Button>
          <Button type="button" variant={"outline"} onClick={handleUndoClick}>
            Undo
          </Button>
          <Button type="button" variant={"outline"} onClick={handleRedoClick}>
            Redo
          </Button>
          <Button type="button" variant={"outline"} onClick={handleClearClick}>
            Clear
          </Button>
          <Button type="button" variant={"outline"} onClick={handleResetClick}>
            Reset
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

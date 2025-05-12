import { cn } from "@/lib/utils";

interface BackgroundBubblesProps {
  className?: string;
  position?: "left" | "right" | "both";
  opacity?: number;
}

const BackgroundBubbles = ({ className, position = "both", opacity = 0.05 }: BackgroundBubblesProps) => {
  return (
    <>
      {(position === "left" || position === "both") && (
        <div className={cn("absolute top-1/2 left-0 w-20 h-[80%] bg-accent -z-10 rounded-r-full", className)} style={{ opacity }} />
      )}
      {(position === "right" || position === "both") && (
        <div className={cn("absolute top-1/2 right-0 w-20 h-[80%] bg-accent -z-10 rounded-l-full", className)} style={{ opacity }} />
      )}
    </>
  );
};

export default BackgroundBubbles; 
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent } from "react";

interface HoverCardProps {
  title: string;
  desc: string;
}

const HoverCard = ({ title, desc }: HoverCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className="group relative max-w-full rounded-md bg-secondary px-8 py-4 text-foreground"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="flex flex-col space-y-4">
        <h3 className="text-base font-semibold text-primary">Convert to</h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-4xl font-bold tracking-tight">{title}</span>
        </div>
        <p className="mt-6 text-sm font-medium leading-6">{desc}</p>
      </div>
    </div>
  );
};

export default HoverCard;

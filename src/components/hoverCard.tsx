import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface HoverCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const HoverCard = ({ title, desc, icon: Icon }: HoverCardProps) => {
  return (
    <div className="group relative max-w-full rounded-md bg-secondary px-8 py-4 text-foreground transition-transform hover:scale-105">
      <div className="flex flex-col space-y-4">
        <h3 className="text-base font-semibold text-primary">Convert to</h3>
        <div className="mt-2 flex items-center gap-x-2">
          <Icon
            className={cn(
              "absolute right-10 top-10 h-10 w-10 text-muted-foreground opacity-70",
            )}
          />
          <span className="text-4xl font-bold tracking-tight">{title}</span>
        </div>
        <p className="mt-6 text-sm font-medium leading-6">{desc}</p>
      </div>

      <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400"></div>
    </div>
  );
};

export default HoverCard;

interface HoverCardProps {
  title: string;
  desc: string;
}

const HoverCard = ({ title, desc }: HoverCardProps) => {
  return (
    <div className="group relative h-[240px] max-w-full rounded-md bg-secondary px-8 py-4 text-foreground">
      <div className="flex flex-col space-y-4">
        <h3 className="text-base font-semibold text-primary">Convert to</h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-4xl font-bold tracking-tight">{title}</span>
        </div>
        <p className="mt-6 text-sm font-medium leading-6">{desc}</p>
      </div>

      <div className="absolute left-0 top-0 h-full w-[4px] bg-primary"></div>
    </div>
  );
};

export default HoverCard;

import { twMerge } from "tailwind-merge";

export const Card = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "bg-tertiary rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 opacity-5"></div>
      {children}
    </div>
  );
};

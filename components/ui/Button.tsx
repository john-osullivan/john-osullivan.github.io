import * as React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-3",
  lg: "text-lg px-5 py-3.5",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const v =
      variant === "secondary" ? "nb-btn--secondary" :
        variant === "ghost" ? "nb-btn--ghost" : "";
    return (
      <button ref={ref} className={clsx("nb-btn", v, sizeMap[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";

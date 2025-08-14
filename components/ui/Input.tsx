import * as React from "react";
import clsx from "clsx";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => (
        <input ref={ref} className={clsx("w-full nb-border nb-shadow rounded-[10px] px-3 py-2 bg-[var(--nb-surface)]", className)} {...props} />
    )
);
Input.displayName = "Input";

import * as React from "react";
import clsx from "clsx";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => (
        <textarea ref={ref} className={clsx("w-full min-h-24 nb-border nb-shadow rounded-[10px] px-3 py-2 bg-[var(--nb-surface)]", className)} {...props} />
    )
);
Textarea.displayName = "Textarea";

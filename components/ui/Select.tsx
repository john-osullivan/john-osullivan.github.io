import * as React from "react";
import clsx from "clsx";

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            className={clsx(
                "w-full nb-border nb-shadow rounded-[10px] px-3 py-2 bg-[var(--nb-surface)] appearance-none",
                "bg-gradient-to-b from-transparent from-60% to-[var(--nb-muted)]",
                className
            )}
            {...props}
        >
            {children}
        </select>
    );
}

import * as React from "react";
import clsx from "clsx";

type Tone = "default" | "ok" | "warn" | "err";

export function Badge({
    tone = "default",
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
    const toneCls =
        tone === "ok" ? "bg-[var(--nb-ok)] text-[#001b0b]" :
            tone === "warn" ? "bg-[var(--nb-warn)]" :
                tone === "err" ? "bg-[var(--nb-err)] text-white" :
                    "bg-[var(--nb-muted)]";
    return <span className={clsx("nb-badge", toneCls, className)} {...props} />;
}

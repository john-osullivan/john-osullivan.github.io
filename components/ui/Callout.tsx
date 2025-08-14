import * as React from "react";
import clsx from "clsx";

type Kind = "info" | "success" | "warn" | "error";
const kindMap: Record<Kind, string> = {
  info: "border-l-[calc(var(--nb-bw)*2)] border-l-[var(--nb-info)]",
  success: "border-l-[calc(var(--nb-bw)*2)] border-l-[var(--nb-ok)]",
  warn: "border-l-[calc(var(--nb-bw)*2)] border-l-[var(--nb-warn)]",
  error: "border-l-[calc(var(--nb-bw)*2)] border-l-[var(--nb-err)]",
};

export function Callout({
  kind = "info",
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { kind?: Kind }) {
  return (
    <div
      className={clsx(
        "nb-card",
        kindMap[kind],
        className
      )}
      {...props}
    />
  );
}

import * as React from "react";
import clsx from "clsx";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx("nb-card", className)} {...props} />;
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx("mb-3 font-display font-bold text-lg", props.className)} {...props} />;
}
export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={clsx("mt-3", props.className)} {...props} />;
}

import * as React from "react";
import clsx from "clsx";

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input type="checkbox" className={clsx("size-4 nb-border nb-shadow rounded-[4px] accent-[var(--nb-accent1)]", props.className)} {...props} />;
}

export function Radio(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input type="radio" className={clsx("size-4 nb-border nb-shadow rounded-full accent-[var(--nb-accent1)]", props.className)} {...props} />;
}

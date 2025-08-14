import * as React from "react";
import clsx from "clsx";

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
    return <table className={clsx("nb-table-zebra", className)} {...props} />;
}

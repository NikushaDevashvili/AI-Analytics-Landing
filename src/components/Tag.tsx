import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-orange-950 gap-2 black px-3 py-1 rounded-full uppercase items-center",
                className
            )}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}

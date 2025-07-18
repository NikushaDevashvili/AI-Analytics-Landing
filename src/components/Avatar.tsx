import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-20 rounded-full overflow-hidden border-4 border-blue-500 bg-neutral-100",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}

import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 px-6 rounded-full font-medium", {
    variants: {
        variant: {
            primary: "bg-black text-white",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant: variant,
                size,
                className: className,
            })}
            {...otherProps}
        />
    );
}

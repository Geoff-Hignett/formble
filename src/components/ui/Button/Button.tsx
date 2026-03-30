import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Variant system
const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary: "bg-primary text-text-on-primary hover:bg-primary-hover",
                secondary: "bg-gray-200 text-text-primary hover:bg-gray-300",
            },
            size: {
                sm: "px-2 py-1 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg",
            },
            focusRing: {
                default: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                none: "focus-visible:outline-none focus-visible:ring-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            focusRing: "default",
        },
    },
);

// Props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

// Component
export function Button({ variant, size, focusRing, className, children, ...props }: ButtonProps) {
    return (
        <button className={clsx(buttonVariants({ variant, size, focusRing }), className)} {...props}>
            {children}
        </button>
    );
}

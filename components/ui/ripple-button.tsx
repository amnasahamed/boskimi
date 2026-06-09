"use client";

import React from "react";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    rippleColor?: string;
}

export function RippleButton({
    children,
    className,
    rippleColor,
    ...props
}: RippleButtonProps) {
    return (
        <button
            className={cn(
                "relative overflow-hidden transition-all active:scale-95",
                className
            )}
            {...props}
        >
            {children}
            <RippleEffect color={rippleColor} />
        </button>
    );
}

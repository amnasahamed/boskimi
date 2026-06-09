"use client";

import React, { useState, useLayoutEffect } from "react";

interface Ripple {
    x: number;
    y: number;
    size: number;
}

export function RippleEffect({
    color = "rgba(255, 255, 255, 0.3)",
}: {
    color?: string;
}) {
    const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

    useLayoutEffect(() => {
        let bounce: NodeJS.Timeout | null = null;
        if (rippleArray.length > 0) {
            window.clearTimeout(bounce!);

            bounce = setTimeout(() => {
                setRippleArray([]);
                window.clearTimeout(bounce!);
            }, 1000);
        }

        return () => window.clearTimeout(bounce!);
    }, [rippleArray.length]);

    const addRipple = (event: React.MouseEvent) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.clientX - rippleContainer.left - size / 2;
        const y = event.clientY - rippleContainer.top - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div
            className="absolute inset-0 overflow-hidden rounded-[inherit]"
            onMouseDown={addRipple}
        >
            {rippleArray.map((ripple, index) => {
                return (
                    <span
                        key={"span" + index}
                        style={{
                            top: ripple.y,
                            left: ripple.x,
                            width: ripple.size,
                            height: ripple.size,
                            backgroundColor: color,
                        }}
                        className="absolute rounded-full animate-ripple pointer-events-none transform scale-0"
                    />
                );
            })}
        </div>
    );
}

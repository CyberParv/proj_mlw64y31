"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-md px-8 py-4 font-bold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none text-base",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
Button.displayName = "Button";

export { Button };

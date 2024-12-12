// src/components/ui/themed/index.tsx
import React from "react";
import { cn } from "@/lib/utils";

// Define valid HTML elements that can have the gradient text effect
type GradientTextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface GradientTextProps {
  as?: GradientTextElement;
  className?: string;
  children: React.ReactNode;
}

export const GradientText = ({
  as: Component = "span",
  className,
  children,
  ...props
}: GradientTextProps) => (
  <Component
    className={cn(
      "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientBackground = ({
  children,
  className,
  animate = false,
}: GradientBackgroundProps) => (
  <div className={cn("relative overflow-hidden", className)}>
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20",
        animate && "animate-pulse"
      )}
    />
    {children}
  </div>
);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => (
  <div
    className={cn(
      "backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10",
      "border border-secondary/20 rounded-xl p-6",
      className
    )}
  >
    {children}
  </div>
);

interface ThemedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: "solid" | "outline";
  className?: string;
}

export const ThemedButton = ({
  className,
  variant = "solid",
  ...props
}: ThemedButtonProps) => (
  <button
    className={cn(
      "px-4 py-2 rounded-lg transition-all duration-300",
      variant === "solid" &&
        "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90",
      variant === "outline" &&
        "border border-secondary/20 hover:bg-secondary/10",
      className
    )}
    {...props}
  />
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          {
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80":
              variant === "default",
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80":
              variant === "destructive",
            "text-foreground": variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "black" | "gray" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  variant = "black",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "rounded focus:outline-none transition ease-in-out duration-150";
  const variantClasses = clsx({
    "bg-black text-white": variant === "black",
    "bg-gray-dark text-white": variant === "gray",
    "bg-white text-black border": variant === "white",
  });
  const sizeClasses = clsx({
    "px-4 py-1 text-sm": size === "sm",
    "px-6 py-2 text-md": size === "md",
    "px-8 py-3 text-lg": size === "lg",
  });

  return (
    <button
      className={clsx(baseClasses, variantClasses, sizeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

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
    "focus:outline-none transition-all ease-in-out delay-100 duration-300";
  const variantClasses = clsx({
    "bg-black text-white hover:bg-primary": variant === "black",
    "bg-gray-dark text-white": variant === "gray",
    "bg-white text-black border hover:bg-primary hover:text-white":
      variant === "white",
  });
  const sizeClasses = clsx({
    "px-8 py-2 text-md rounded": size === "sm",
    "px-10 py-3 text-lg rounded-md": size === "md",
    "px-14 py-4 md:px-16 md:py-5 text-xl rounded-xl": size === "lg",
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

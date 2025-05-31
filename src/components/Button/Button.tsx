// components/ui/Button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` text-white px-5 py-2 cursor-pointer  animate-pulse pulse-slow font-poppins hover:bg-[#543CDA]/60 transition ${className}`}
    >
      {children}
    </button>
  );
}

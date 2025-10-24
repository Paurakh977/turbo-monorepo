"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  appName?: string;
}

export const Button = ({ children, className, onClick, appName }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${className || ''}`}
      onClick={onClick || (() => appName && alert(`Hello from your ${appName} app!`))}
    >
      {children}
    </button>
  );
};

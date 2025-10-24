import React from "react";

export const Card = ({ title, children, href, className }: {
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={`group block p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {children}
      </p>
    </a>
  );
}

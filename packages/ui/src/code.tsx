import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code className={`px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-lg font-mono border border-purple-200 ${className || ''}`}>
      {children}
    </code>
  );
}

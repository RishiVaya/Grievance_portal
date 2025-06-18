
import React from "react";

export function Select({ value, onValueChange, children }) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full rounded-md border border-purple-300 p-2 bg-purple-50"
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, className }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  return null;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

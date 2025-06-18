import React, { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${props.className}`}
    />
  );
}

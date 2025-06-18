import React, { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full p-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 ${props.className}`}
    />
  );
}

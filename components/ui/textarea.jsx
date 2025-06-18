
export function Textarea({ className, ...props }) {
  return (
    <textarea {...props} className={"w-full rounded-md border border-purple-300 p-3 resize-y " + (className || "")} />
  );
}


export function Button({ children, className, ...props }) {
  return (
    <button {...props} className={"px-6 py-3 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 " + (className || "")}>
      {children}
    </button>
  );
}

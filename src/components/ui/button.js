export function Button({ className = "", variant, children }) {
  const base =
    "px-4 py-2 font-medium transition rounded-2xl";

  const styles =
    variant === "outline"
      ? "border border-gray-300 hover:bg-gray-100"
      : "bg-black text-white hover:bg-gray-800";

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

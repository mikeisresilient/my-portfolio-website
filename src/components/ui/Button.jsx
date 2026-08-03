import { FaArrowRight } from "react-icons/fa6";

export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-white/10 hover:bg-white/10",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 px-7 py-4 rounded-xl transition ${styles[variant]}`}
    >
      {children}

      {variant === "primary" && (
        <FaArrowRight />
      )}
    </a>
  );
}
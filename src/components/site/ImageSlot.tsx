interface ImageSlotProps {
  label?: string;
  className?: string;
  ratio?: string; // e.g. "aspect-[4/5]"
  variant?: "dark" | "light";
}

/**
 * Visual placeholder for a real image. Uses CSS-generated stone texture
 * so the layout feels finished without any AI imagery.
 * Replace each instance with <img src="..." alt="..." /> when ready.
 */
export function ImageSlot({
  label = "Photo",
  className = "",
  ratio = "aspect-[4/5]",
  variant = "dark",
}: ImageSlotProps) {
  return (
    <div
      className={`${ratio} w-full ${variant === "dark" ? "stone-tex" : "stone-tex-light"} relative grid place-items-center overflow-hidden ${className}`}
    >
      <span
        className={`text-[10px] uppercase tracking-[0.25em] ${variant === "dark" ? "text-white/40" : "text-black/40"}`}
      >
        {label}
      </span>
    </div>
  );
}

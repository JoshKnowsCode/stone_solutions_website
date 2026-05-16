import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Stone Solutions — Home" className={`block ${className}`}>
      <img
        src="/images/logo.png"
        alt="Stone Solutions"
        width={338}
        height={153}
        className="h-[60px] w-auto md:h-[72px]"
      />
    </Link>
  );
}

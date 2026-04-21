import Link from "next/link";
import { ReactNode } from "react";

type AppButtonProps = {
  children: ReactNode;
  href?: string;
  textColor?: string;
  className?: string;
  center?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};

function AppButton({
  children,
  href,
  textColor = "text-white",
  className = "",
  center = true,
  type = "button",
  onClick,
  target,
  rel,
}: AppButtonProps) {
  const baseClassName = [
    "inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-700",
    textColor,
    className,
  ]
    .join(" ")
    .trim();

  const wrapperClassName = center ? "flex justify-center" : "";

  return (
    <div className={wrapperClassName}>
      {href ? (
        <Link href={href} className={baseClassName} target={target} rel={rel}>
          {children}
        </Link>
      ) : (
        <button type={type} className={baseClassName} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}

export default AppButton;

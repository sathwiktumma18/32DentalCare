import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  light?: boolean;
}

export function ArrowLink({ href, children, light = false }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`arrow-link${light ? " arrow-link--light" : ""}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} />
    </a>
  );
}
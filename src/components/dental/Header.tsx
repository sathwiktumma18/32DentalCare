import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./BrandMark";
import { navItems } from "@/data/clinic-data";
import { mobileNav } from "@/lib/animation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close menu on navigation
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span>Thoughtful dental care. A more confident smile.</span>
        <a href="tel:+919736323232" className="announcement-phone">
          Mogalrajapuram, Vijayawada <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>
      <header className={cn("site-header", scrolled && "site-header--scrolled", className)}>
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="header-cta cta-button">
            <a href="#appointment">Book an appointment <ArrowUpRight size={15} aria-hidden="true" /></a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            variants={mobileNav}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {navItems.map((item, index) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <Button asChild className="mobile-cta cta-button">
              <a href="#appointment" onClick={closeMenu}>Book an appointment <ArrowUpRight size={16} /></a>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
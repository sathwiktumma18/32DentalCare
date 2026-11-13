/**
 * Shared Framer Motion variants for the 32 Dental Care website.
 *
 * All variants use GPU-friendly transforms (opacity + y) and respect
 * `prefers-reduced-motion` via the `reduceMotion` flag passed from the root.
 */

import { cubicBezier, type Variants } from "framer-motion";

/** Premium ease: slightly softer than the default "easeInOut" curve. */
export const premiumEase = cubicBezier(0.22, 1, 0.36, 1);

/** Standard 0.65s rise used by most scroll-triggered reveals. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: premiumEase } },
};

/** Slightly faster variant for smaller elements. */
export const revealFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: premiumEase } },
};

/** Stagger wrapper used by grouped children. */
export const staggerChildren = (delayChildren = 0.12, stagger = 0.12) => ({
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Hero visual entrance — slight scale + lift. */
export const heroVisual = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: premiumEase } },
};

/** Treatment detail accordion open/close. */
export const accordion = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { duration: 0.28, ease: premiumEase } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: premiumEase } },
};

/** Mobile nav slide-down. */
export const mobileNav = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: premiumEase } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18, ease: premiumEase } },
};

/** Scroll progress bar. */
export const scrollProgress = {
  scaleX: [0, 1],
  transition: { duration: 0, ease: "linear" },
};
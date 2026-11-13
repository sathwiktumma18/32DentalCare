/**
 * 32 Dental Care — Premium Dental Clinic Website Concept
 *
 * Root component that assembles all sections of the single-page site.
 * Section components live in their own files for separation of concerns.
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Introduction } from "./Introduction";
import { Treatments } from "./Treatments";
import { Approach } from "./Approach";
import { Journey } from "./Journey";
import { Gallery } from "./Gallery";
import { Appointment } from "./Appointment";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function ClinicSite() {
  const reduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="clinic-site">
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Treatments />
        <Approach />
        <Journey />
        <Gallery />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
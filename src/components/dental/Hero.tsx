import { useReducedMotion, motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic-data";
import { premiumEase, reveal, staggerChildren } from "@/lib/animation";
import heroPhoto from "@/assets/dental-hero.jpg";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <div className="hero-inner page-wrap">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={staggerChildren()}
        >
          <motion.div variants={reveal}>
            <p className="section-label">
              <span aria-hidden="true" />
              {clinic.name} · {clinic.city}
            </p>
          </motion.div>
          <motion.h1 variants={reveal}>
            Beyond the smile.<br />
            <i>Into confidence.</i>
          </motion.h1>
          <motion.p className="hero-description" variants={reveal}>
            Thoughtful dental care begins with understanding your needs. Explore a more comfortable approach to caring for your smile.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <Button asChild className="cta-button hero-cta">
              <a href="#appointment">
                Book an appointment <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Button>
            <a className="hero-text-link" href="#treatments">
              Explore treatments <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div className="hero-location" variants={reveal}>
            <span className="location-rule" />
            <span>
              Mogalrajapuram
              <br />
              Vijayawada, Andhra Pradesh
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: premiumEase }}
        >
          <img
            src={heroPhoto}
            alt="A woman smiling naturally in soft daylight; illustrative image"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <span className="hero-image-note">
            <span>01</span> A considered approach to every smile
          </span>
          <div className="hero-stamp" aria-label="Your smile, your confidence">
            <span className="stamp-top">YOUR SMILE · YOUR SMILE ·</span>
            <span className="stamp-center">32</span>
            <span className="stamp-bottom">YOUR CONFIDENCE</span>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to introduction">
        <span>Scroll to discover</span>
        <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  );
}
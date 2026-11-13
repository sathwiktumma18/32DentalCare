import { motion } from "framer-motion";
import { MessageCircle, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { clinic, principles } from "@/data/clinic-data";
import { premiumEase, reveal, revealFast } from "@/lib/animation";

const iconMap = {
  MessageCircle,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
} as const;

export function Approach() {
  return (
    <section className="approach-section section-pad" id="approach">
      <div className="approach-layout page-wrap">
        <motion.div
          className="approach-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealFast}
        >
          <p className="section-label section-label--light">A care philosophy</p>
          <h2>Comfort is part<br />of <i>good care.</i></h2>
          <p>
            Every conversation is a chance to make care feel clearer, more considered and more personal.
          </p>
          <span className="approach-signature">{clinic.name.split(" ")[0]} <i>{clinic.name.split(" ")[1]}</i></span>
        </motion.div>
        <div className="principles-list">
          {principles.map(({ number, title, copy, icon }, index) => {
            const Icon = iconMap[icon];
            return (
              <motion.article
                className="principle-row"
                key={number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: premiumEase, delay: index * 0.05 },
                  },
                }}
              >
                <span className="principle-number">{number}</span>
                <div className="principle-copy">
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span className="principle-icon">
                  <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                </span>
              </motion.article>
            );
          })}
        </div>
        <p className="approach-disclaimer">
          These are proposed website messaging themes, not independently verified clinic capabilities.
        </p>
      </div>
    </section>
  );
}
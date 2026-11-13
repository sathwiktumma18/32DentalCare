import { motion } from "framer-motion";
import { journey } from "@/data/clinic-data";
import { premiumEase } from "@/lib/animation";

export function Journey() {
  return (
    <section className="journey-section section-pad">
      <div className="page-wrap">
        <div className="journey-heading">
          <div>
            <p className="section-label">Your next steps</p>
            <h2>Your visit, <i>made simple.</i></h2>
          </div>
          <p>
            A clear path from your first question to a conversation about your care.
          </p>
        </div>
        <div className="journey-steps">
          {journey.map((step, index) => (
            <motion.article
              className="journey-step"
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: premiumEase, delay: index * 0.09 },
                },
              }}
            >
              <span className="journey-step-number">{step.number}</span>
              <span className="journey-marker" aria-hidden="true">
                <span />
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
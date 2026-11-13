import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles, ArrowUpRight } from "lucide-react";
import { treatments } from "@/data/clinic-data";
import { reveal } from "@/lib/animation";

export function Treatments() {
  const [activeTreatment, setActiveTreatment] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveTreatment(activeTreatment === id ? null : id);
  };

  return (
    <section className="treatment-section section-pad" id="treatments">
      <div className="page-wrap">
        <div className="treatment-heading">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
            <p className="section-label">
              <span aria-hidden="true" />
              Areas of care
            </p>
            <h2>
              Thoughtful care.
              <br />
              <i>Modern dentistry.</i>
            </h2>
          </motion.div>
          <motion.p
            className="treatment-intro"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={reveal}
          >
            Explore a selection of treatment categories. A dentist can help discuss what may be appropriate for your individual needs.
          </motion.p>
        </div>
        <div className="treatment-list" aria-label="Treatment categories">
          {treatments.map((treatment) => {
            const isActive = activeTreatment === treatment.id;
            return (
              <motion.article
                className={`treatment-row${isActive ? " treatment-row--active" : ""}`}
                key={treatment.id}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
              >
                <span className="treatment-number">{treatment.id}</span>
                <button
                  className="treatment-toggle"
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`treatment-${treatment.id}`}
                  onClick={() => handleToggle(treatment.id)}
                >
                  <span>{treatment.title}</span>
                  <ChevronDown
                    className="treatment-chevron"
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={`treatment-${treatment.id}`}
                      className="treatment-detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{treatment.copy}</p>
                      <a href={`#appointment?interest=${encodeURIComponent(treatment.title)}`}>
                        Ask about this treatment <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="treatment-index-mark" aria-hidden="true">
                  <Sparkles size={17} strokeWidth={1.2} />
                </span>
              </motion.article>
            );
          })}
        </div>
        <p className="treatment-disclaimer">
          Treatment descriptions are general information, not medical advice. Treatment suitability depends on professional assessment.
        </p>
      </div>
    </section>
  );
}
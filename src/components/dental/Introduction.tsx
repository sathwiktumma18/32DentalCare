import { motion } from "framer-motion";
import { clinic } from "@/data/clinic-data";
import { reveal } from "@/lib/animation";
import { ArrowLink } from "@/components/ui/arrow-link";
import consultationPhoto from "@/assets/dental-consultation.jpg";

export function Introduction() {
  return (
    <section className="intro-section section-pad" id="about">
      <div className="intro-grid page-wrap">
        <motion.div
          className="intro-photo-wrap"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={reveal}
        >
          <img
            src={consultationPhoto}
            alt="A dentist explaining a tooth model during a consultation; illustrative image"
            width={1312}
            height={1008}
            loading="lazy"
          />
          <span className="photo-caption">A visit that begins with a conversation</span>
          <span className="intro-number">01 <i>—</i> 04</span>
        </motion.div>
        <motion.div
          className="intro-copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={reveal}>
            <p className="section-label">
              <span aria-hidden="true" />
              A more personal perspective
            </p>
          </motion.div>
          <motion.h2 variants={reveal}>
            Care that puts <i>you first.</i>
          </motion.h2>
          <motion.p className="intro-lead" variants={reveal}>
            At {clinic.name}, every dental visit should begin with understanding.
          </motion.p>
          <motion.p className="body-copy" variants={reveal}>
            This concept is centred on listening to your concerns, explaining available treatment options and helping you make informed decisions about your oral health.
          </motion.p>
          <motion.div variants={reveal}>
            <ArrowLink href="#approach">Discover our approach</ArrowLink>
          </motion.div>
          <motion.p className="concept-note" variants={reveal}>
            Website concept copy for demonstration; clinic practices have not been independently verified.
          </motion.p>
        </motion.div>
      </div>
      <div className="intro-bottom-line page-wrap">
        <span>UNDERSTANDING BEFORE ANYTHING ELSE</span>
        <span>32° 31' 12.2" N &nbsp; 80° 38' 05.8" E</span>
      </div>
    </section>
  );
}
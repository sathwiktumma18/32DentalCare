import { motion } from "framer-motion";
import { clinic } from "@/data/clinic-data";
import { reveal, revealFast } from "@/lib/animation";
import interiorPhoto from "@/assets/clinic-interior.jpg";
import detailPhoto from "@/assets/dental-detail.jpg";
import consultationPhoto from "@/assets/dental-consultation.jpg";

export function Gallery() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-head page-wrap">
        <div>
          <p className="section-label">
            <span aria-hidden="true" />
            A considered setting
          </p>
          <h2 id="gallery-title">An atmosphere of <i>ease.</i></h2>
        </div>
        <span>ILLUSTRATIVE IMAGERY · NOT CLINIC PHOTOGRAPHY</span>
      </div>
      <div className="gallery-grid page-wrap">
        <figure className="gallery-image gallery-image--large">
          <img
            src={interiorPhoto}
            alt={`Bright contemporary dental treatment room with natural daylight; illustrative image, not a photograph of ${clinic.name}`}
            width={1600}
            height={1104}
            loading="lazy"
          />
          <figcaption>
            <span>01 / SPACE</span>
            <span>A sense of calm</span>
          </figcaption>
        </figure>
        <figure className="gallery-image gallery-image--detail">
          <img
            src={detailPhoto}
            alt={`Dental examination instruments arranged in a modern treatment room; illustrative image, not a photograph of ${clinic.name}`}
            width={1200}
            height={1504}
            loading="lazy"
          />
          <figcaption>
            <span>02 / DETAIL</span>
            <span>Considered precision</span>
          </figcaption>
        </figure>
        <figure className="gallery-image gallery-image--consultation">
          <img
            src={consultationPhoto}
            alt={`Consultation about a tooth model in a contemporary clinic; illustrative image, not a photograph of ${clinic.name}`}
            width={1312}
            height={1008}
            loading="lazy"
          />
          <figcaption>
            <span>03 / LISTENING</span>
            <span>Understanding, together</span>
          </figcaption>
        </figure>
        <div className="gallery-quote">
          <span className="quote-mark">"</span>
          <p>A more thoughtful way to care for your smile.</p>
          <span>{clinic.name} · WEBSITE CONCEPT</span>
        </div>
      </div>
    </section>
  );
}
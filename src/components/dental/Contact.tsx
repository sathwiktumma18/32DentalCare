import { ArrowUpRight } from "lucide-react";
import { clinic } from "@/data/clinic-data";
import { reveal } from "@/lib/animation";

export function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-layout page-wrap">
        <div className="contact-heading">
          <p className="section-label">
            <span aria-hidden="true" />
            Find us in Vijayawada
          </p>
          <h2>A good place<br />to <i>begin.</i></h2>
        </div>
        <div className="contact-details">
          <div className="contact-block">
            <span className="contact-overline">VISIT</span>
            <address>{clinic.address}</address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
              className="arrow-link"
            >
              Get directions
            </a>
          </div>
          <div className="contact-block">
            <span className="contact-overline">CALL</span>
            <a href={clinic.phoneHref} className="contact-phone">
              {clinic.phone} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <span className="contact-subtext">Call the clinic to discuss your visit.</span>
          </div>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
          className="contact-map"
          target="_blank"
          rel="noreferrer"
          aria-label="Open directions to 32 Dental Care in Google Maps"
        >
          <div className="map-surface" aria-hidden="true">
            <span className="map-road map-road--one" />
            <span className="map-road map-road--two" />
            <span className="map-block map-block--one" />
            <span className="map-block map-block--two" />
            <span className="map-block map-block--three" />
            <span className="map-park" />
            <span className="map-marker">
              <span>32</span>
            </span>
          </div>
          <span className="map-link-label">OPEN MAP <ArrowUpRight size={14} aria-hidden="true" /></span>
          <span className="map-caption">MOGALRAJAPURAM · VIJAYAWADA</span>
        </a>
      </div>
    </section>
  );
}
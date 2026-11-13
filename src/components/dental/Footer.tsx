import { clinic } from "@/data/clinic-data";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-wrap">
        <div className="footer-brand">
          <BrandMark />
          <p>Beyond the smile.<br />Into confidence.</p>
        </div>
        <div className="footer-nav-group">
          <span className="footer-label">EXPLORE</span>
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#approach">Our approach</a>
          <a href="#appointment">Appointment enquiry</a>
        </div>
        <div className="footer-nav-group">
          <span className="footer-label">GET IN TOUCH</span>
          <a href={clinic.phoneHref}>{clinic.phone}</a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            {clinic.city}
          </a>
          <a href="#privacy-notice">Privacy notice</a>
        </div>
      </div>
      <div className="footer-bottom page-wrap" id="privacy-notice">
        <span>© 2026 {clinic.name} · Website concept</span>
        <span className="footer-disclaimer">
          Independent website concept by Sun Website Solutions for demonstration. Not an official clinic website; not endorsed by {clinic.name}.
        </span>
      </div>
    </footer>
  );
}
import { clinic } from "@/data/clinic-data";

export function BrandMark() {
  return (
    <a href="#home" className="brand-mark" aria-label={`${clinic.name} — home`}>
      <span className="brand-icon" aria-hidden="true">
        32
      </span>
      <span className="brand-name">
        Dental <em>Care</em>
      </span>
    </a>
  );
}
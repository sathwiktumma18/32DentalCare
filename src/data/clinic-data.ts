/**
 * Centralized clinic content and configuration.
 * All public-facing text lives here so sections stay consistent and easy to update.
 */

export const clinic = {
  name: "32 Dental Care",
  tagline: "Beyond the Smile. Into Confidence.",
  address:
    "AB Towers, beside HP Petroleum, Siddhartha College Road, Jammu Chettu Centre, Mogalrajapuram, Vijayawada, Andhra Pradesh 520010, India",
  phone: "+91 97363 23232",
  phoneHref: "tel:+919736323232",
  city: "Mogalrajapuram, Vijayawada",
  mapsQuery:
    "AB Towers, beside HP Petroleum, Siddhartha College Road, Jammu Chettu Centre, Mogalrajapuram, Vijayawada, Andhra Pradesh 520010, India",
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#approach", label: "Our approach" },
  { href: "#contact", label: "Contact" },
] as const;

export const treatments = [
  {
    id: "01",
    title: "Root Canal Treatment",
    copy: "Dental treatment intended to address problems involving the inner pulp of a tooth.",
  },
  {
    id: "02",
    title: "Laser Dentistry",
    copy: "Laser-assisted techniques used in selected dental procedures.",
  },
  {
    id: "03",
    title: "Crowns and Bridges",
    copy: "Restorative options for damaged or missing teeth.",
  },
  {
    id: "04",
    title: "Maxillofacial Prosthetics",
    copy: "Specialized prosthetic rehabilitation for certain oral and facial conditions.",
  },
  {
    id: "05",
    title: "Laser Gingivoplasty",
    copy: "A procedure involving reshaping of gum tissue using laser techniques.",
  },
  {
    id: "06",
    title: "Periodontal Care",
    copy: "Assessment and treatment of gum-related conditions.",
  },
  {
    id: "07",
    title: "Tooth Extraction",
    copy: "Removal of teeth when clinically indicated, including impacted teeth.",
  },
  {
    id: "08",
    title: "Preventive Dentistry",
    copy: "Routine oral health assessment and preventive care.",
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Clear communication",
    copy: "Understand your concerns and discuss appropriate treatment options.",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Thoughtful guidance",
    copy: "Make informed decisions about your dental care.",
    icon: "HeartHandshake",
  },
  {
    number: "03",
    title: "Modern dental techniques",
    copy: "Explore relevant treatment options with your dentist.",
    icon: "Sparkles",
  },
  {
    number: "04",
    title: "Patient-focused approach",
    copy: "A welcoming experience throughout your visit.",
    icon: "ShieldCheck",
  },
] as const;

export const journey = [
  { number: "01", title: "Get in touch", copy: "Contact the clinic to discuss your requirements." },
  { number: "02", title: "Schedule a visit", copy: "Choose a suitable time by contacting the clinic." },
  { number: "03", title: "Consultation", copy: "Discuss your dental concerns with the treating dentist." },
  { number: "04", title: "Treatment guidance", copy: "Understand the recommended options and next steps." },
] as const;

export const appointmentTimes = [
  { value: "", label: "Choose a time" },
  { value: "Morning", label: "Morning" },
  { value: "Afternoon", label: "Afternoon" },
  { value: "Evening", label: "Evening" },
] as const;

export const seo = {
  title: "32 Dental Care | Dental Clinic Website Concept — Vijayawada",
  description:
    "Explore a premium dental clinic website concept for 32 Dental Care in Mogalrajapuram, Vijayawada. Discover dental treatment information and contact details.",
  ogTitle: "32 Dental Care | Dental Clinic in Vijayawada",
  ogDescription:
    "Explore the 32 Dental Care website concept in Mogalrajapuram, Vijayawada. Discover dental treatment information and contact details.",
};
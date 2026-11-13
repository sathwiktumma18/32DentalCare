import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, ArrowUpRight } from "lucide-react";
import { clinic, treatments, appointmentTimes } from "@/data/clinic-data";
import { validateAppointment, type AppointmentValues, type AppointmentErrors } from "@/lib/appointment-validation";
import { FieldError } from "@/components/ui/field-error";

export function Appointment() {
  const [values, setValues] = useState<AppointmentValues>({ name: "", phone: "", date: "", time: "", treatment: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const minDate = new Date().toISOString().split('T')[0] ?? "";

  const updateValue = (field: keyof AppointmentValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateAppointment(values, minDate);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="appointment-section section-pad" id="appointment">
      <div className="appointment-layout page-wrap">
        <div className="appointment-copy">
          <p className="section-label">
            <span aria-hidden="true" />
            Start a conversation
          </p>
          <h2>Your smile deserves <i>attention.</i></h2>
          <p>Take the first step towards understanding your dental care options.</p>
          <div className="appointment-callout">
            <span className="callout-icon">
              <Phone size={17} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <span>Prefer to speak directly?</span>
              <a href={clinic.phoneHref} className="contact-phone">
                {clinic.phone} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <p className="privacy-note">This demonstration form does not send or store your information.</p>
        </div>
        <div className="appointment-form-wrap">
          <div className="form-heading">
            <span>ENQUIRY FORM</span>
            <span>01 <i>/</i> 06</span>
          </div>
          {submitted ? (
            <div className="form-success" role="status" aria-live="polite">
              <span className="success-mark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3>Thank you, {values.name.trim()}.</h3>
              <p>
                This is a website concept, so your enquiry has not been sent and no appointment is confirmed. Please call the clinic directly to discuss a visit.
              </p>
              <Button asChild className="cta-button">
                <a href={clinic.phoneHref}>
                  <Phone size={15} /> Call the clinic
                </a>
              </Button>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="form-field form-field--wide">
                  <label htmlFor="appointment-name">Full name <span>*</span></label>
                  <Input
                    id="appointment-name"
                    className="form-control"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => updateValue("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <FieldError id="name-error" message={errors.name} />
                </div>
                <div className="form-field form-field--wide">
                  <label htmlFor="appointment-phone">Phone number <span>*</span></label>
                  <Input
                    id="appointment-phone"
                    className="form-control"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 00000 00000"
                    value={values.phone}
                    onChange={(event) => updateValue("phone", event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  <FieldError id="phone-error" message={errors.phone} />
                </div>
                <div className="form-field">
                  <label htmlFor="appointment-date">Preferred date <span>*</span></label>
                  <Input
                    id="appointment-date"
                    className="form-control"
                    type="date"
                    min={minDate}
                    value={values.date}
                    onChange={(event) => updateValue("date", event.target.value)}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? "date-error" : undefined}
                  />
                  <FieldError id="date-error" message={errors.date} />
                </div>
                <div className="form-field">
                  <label htmlFor="appointment-time">Preferred time <span>*</span></label>
                  <select
                    id="appointment-time"
                    className="form-control form-select"
                    value={values.time}
                    onChange={(event) => updateValue("time", event.target.value)}
                    aria-invalid={Boolean(errors.time)}
                    aria-describedby={errors.time ? "time-error" : undefined}
                  >
                    {appointmentTimes.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <FieldError id="time-error" message={errors.time} />
                </div>
                <div className="form-field form-field--wide">
                  <label htmlFor="appointment-treatment">Treatment of interest <span>*</span></label>
                  <select
                    id="appointment-treatment"
                    className="form-control form-select"
                    value={values.treatment}
                    onChange={(event) => updateValue("treatment", event.target.value)}
                    aria-invalid={Boolean(errors.treatment)}
                    aria-describedby={errors.treatment ? "treatment-error" : undefined}
                  >
                    <option value="">Choose a treatment</option>
                    {treatments.map((item) => (
                      <option value={item.title} key={item.id}>
                        {item.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  <FieldError id="treatment-error" message={errors.treatment} />
                </div>
                <div className="form-field form-field--wide">
                  <label htmlFor="appointment-message">A little more (optional)</label>
                  <Textarea
                    id="appointment-message"
                    className="form-control form-message"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                      setSubmitted(false);
                    }}
                    rows={3}
                  />
                </div>
              </div>
              <p className="form-demo-copy">DEMO ONLY · Your information stays in this browser and is not submitted.</p>
              <Button type="submit" className="cta-button form-submit">
                Send enquiry <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
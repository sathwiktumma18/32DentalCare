export type AppointmentValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
};

export type AppointmentErrors = Partial<Record<keyof AppointmentValues, string>>;

export function validateAppointment(
  values: AppointmentValues,
  today: string,
): AppointmentErrors {
  const errors: AppointmentErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  const phone = values.phone.replace(/[\s()-]/g, "");
  if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.date) {
    errors.date = "Choose a preferred date.";
  } else if (values.date < today) {
    errors.date = "Choose today or a future date.";
  }

  if (!values.time) errors.time = "Choose a preferred time.";
  if (!values.treatment) errors.treatment = "Choose a treatment of interest.";

  return errors;
}
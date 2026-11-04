type EnquiryDetails = {
  service: string;
  size: string;
  location: string;
  timeline: string;
  name: string;
  email: string;
  details: string;
};

export const ENQUIRY_SUBJECT = "Container enquiry";

/** Plain-text summary shown for review and used as the email body. */
export function buildEnquirySummary(enquiry: EnquiryDetails): string {
  return [
    ENQUIRY_SUBJECT,
    `Service: ${enquiry.service}`,
    `Size: ${enquiry.size}`,
    `Location: ${enquiry.location}`,
    `Timeline: ${enquiry.timeline}`,
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Details: ${enquiry.details}`,
  ].join("\n");
}

/** `mailto:` link that opens a pre-filled draft in the visitor’s email app. Nothing is sent. */
export function buildMailtoHref(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Reads a text field from FormData (missing fields become an empty string). */
export function formText(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value : "";
}

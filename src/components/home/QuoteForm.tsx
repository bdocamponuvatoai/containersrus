"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { enquiryOptions, timelineOptions, type EnquiryOption } from "@/content/services";
import { containerSizes, type ContainerSize } from "@/content/sizes";
import { buildEnquirySummary, buildMailtoHref, ENQUIRY_SUBJECT, formText } from "@/lib/enquiry";
import { useQuote } from "./QuoteProvider";

/**
 * Quote form. Native validation runs on submit; a valid form shows a summary for review and a
 * `mailto:` link that opens an email draft. Nothing is sent or stored by the site.
 */
export function QuoteForm() {
  const { need, setNeed, size, setSize } = useQuote();
  const [summary, setSummary] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSummary(
      buildEnquirySummary({
        service: need,
        size,
        location: formText(data, "location"),
        timeline: formText(data, "timeline"),
        name: formText(data, "name"),
        email: formText(data, "email"),
        details: formText(data, "details"),
      }),
    );
  }

  return (
    // Any edit invalidates the summary, so the email draft always matches the form.
    <form onSubmit={handleSubmit} onChange={() => setSummary("")}>
      <div className="fields">
        <label>
          I’m interested in
          <select value={need} onChange={(e) => setNeed(e.target.value as EnquiryOption)}>
            {enquiryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Container length
          <select value={size} onChange={(e) => setSize(e.target.value as ContainerSize)}>
            {containerSizes.map(({ value }) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Delivery city / province
          <input name="location" required placeholder="e.g. Hamilton, Ontario" />
        </label>
        <label>
          When do you need it?
          <select name="timeline">
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email address
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        Tell us about your plans
        <textarea
          name="details"
          rows={3}
          placeholder="What will you use it for? Any access or modification needs?"
        />
      </label>
      <button className="button" type="submit">
        Review my enquiry ↗
      </button>
      {summary && (
        <div className="review" aria-live="polite">
          <h3>Your enquiry is ready.</h3>
          <pre>{summary}</pre>
          <a className="button" href={buildMailtoHref(site.email, ENQUIRY_SUBJECT, summary)}>
            Open email draft ↗
          </a>
          <small>Review and send from your email app.</small>
        </div>
      )}
    </form>
  );
}

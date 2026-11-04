import { faq } from "@/content/faq";

export function Faq() {
  return (
    <section className="section faq">
      <div>
        <p className="eyebrow">THE PRACTICAL DETAILS</p>
        <h2>Worth knowing.</h2>
      </div>
      <div>
        {faq.map(({ question, answer }) => (
          <details key={question}>
            <summary>
              {question}
              <span>+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

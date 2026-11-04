import { SolutionExplorer } from "./SolutionExplorer";

export function Solutions() {
  return (
    <section id="solutions" className="section">
      <div className="section-title">
        <p className="eyebrow">FIND YOUR CONTAINER</p>
        <h2>
          Your space.
          <br />
          Your terms.
        </h2>
        <p>
          Choose a starting point. We’ll help with the container, the configuration, and the
          logistics.
        </p>
      </div>
      <SolutionExplorer />
    </section>
  );
}

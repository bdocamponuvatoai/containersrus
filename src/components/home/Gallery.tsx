import { SceneExplorer } from "./SceneExplorer";

export function Gallery() {
  return (
    <section className="possibilities section">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow">PICTURE YOUR NEXT SPACE</p>
          <h2>What could yours become?</h2>
        </div>
        <p>
          Start with a use. Explore a direction.
          <br />
          Then let’s talk through the details.
        </p>
      </div>
      <SceneExplorer />
    </section>
  );
}

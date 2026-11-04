import Image from "next/image";
import officeImage from "@/assets/images/container-office.webp";

const steps = [
  { title: "Tell us what you’re planning.", text: "Share your use, location, and timing." },
  {
    title: "Explore a practical solution.",
    text: "Review container options, access, and modifications.",
  },
  { title: "Get the details in place.", text: "Confirm your quote and delivery arrangements." },
] as const;

export function Story() {
  return (
    <section className="story" id="approach">
      <figure className="office-photo">
        <Image src={officeImage} alt="Illustrative concept of a converted container workspace" />
        <figcaption>WORKSPACE CONCEPT / EXPLORE WHAT’S POSSIBLE</figcaption>
      </figure>
      <div>
        <p className="eyebrow">CUSTOM CONTAINERS</p>
        <h2>
          Steel on the outside.
          <br />
          Your idea within.
        </h2>
        <p>
          Based in the Hamilton area, Containers R Us brings together storage, moving, and container
          modification experience. From practical workspaces to a new way of living, the
          conversation starts with your idea.
        </p>
        <ol>
          {steps.map(({ title, text }) => (
            <li key={title}>
              <b>{title}</b>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

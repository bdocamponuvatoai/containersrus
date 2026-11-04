// “30 years” is the company’s own statement of combined industry insight (see README).
const proofPoints = [
  { title: "30 years", text: "Combined industry insight" },
  { title: "Buy. Rent. Customize.", text: "Options that work around you" },
  { title: "Across Canada", text: "Storage and moving solutions" },
] as const;

export function ProofBar() {
  return (
    <div className="proof">
      {proofPoints.map(({ title, text }) => (
        <p key={title}>
          <strong>{title}</strong>
          <span>{text}</span>
        </p>
      ))}
    </div>
  );
}

export default function CountdownSection() {
  return (
    <section className="flex items-center justify-between gap-8 py-16">
      <CountdownCard value={8} unit={"days"} />
      <CountdownCard value={23} unit={"hours"} />
      <CountdownCard value={55} unit={"minutes"} />
      <CountdownCard value={41} unit={"seconds"} />
    </section>
  );
}

function CountdownCard({ value, unit }) {
  return (
    <div className="flex-1 flex flex-col gap-8 text-center">
      <div className="card grid place-content-center h-40 rounded-xl">
        <p className="text-8xl text-[var(--color-secondary)]">{value}</p>
      </div>
      <p className="text-xl tracking-[0.2em] text-[var(--color-primary)] uppercase">
        {unit}
      </p>
    </div>
  );
}

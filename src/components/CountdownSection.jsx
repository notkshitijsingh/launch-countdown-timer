import { useEffect, useMemo, useState } from "react";
import { calculateTime } from "../utils/calculateTime";

export default function CountdownSection() {
  const theDate = "2024-10-10";
  const launchDate = useMemo(() => new Date(theDate), []);
  const [time, setTime] = useState(() => calculateTime(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="flex items-center justify-between gap-8 py-16">
      <CountdownCard value={time.days} unit="days" />
      <CountdownCard value={time.hours} unit="hours" />
      <CountdownCard value={time.minutes} unit="minutes" />
      <CountdownCard value={time.seconds} unit="seconds" />
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

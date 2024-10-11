import { useEffect, useMemo, useState } from "react";
import { calculateTime } from "../utils/calculateTime";

export default function CountdownSection() {
  const theDate = "2024-10-20";
  const launchDate = useMemo(() => new Date(theDate), []);
  const [time, setTime] = useState(() => calculateTime(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="grid grid-cols-4 gap-5 md:gap-8 md:py-16">
      <CountdownCard value={time.days} unit="days" />
      <CountdownCard value={time.hours} unit="hours" />
      <CountdownCard value={time.minutes} unit="minutes" />
      <CountdownCard value={time.seconds} unit="seconds" />
    </section>
  );
}
function CountdownCard({ value, unit }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 text-center">
      <div className="card grid place-content-center rounded md:rounded-lg pb-3">
        {/* <div className="front-card">{value}</div> */}
        <div className="card-top rounded md:rounded-lg">
          <div className="absolute inset-0 top-auto translate-y-1/2">
            {value}
          </div>
        </div>
        <div className="separation"></div>
        <div className="card-bottom rounded md:rounded-lg">
          <div className="absolute inset-0 bottom-auto -translate-y-1/2 leading-none">
            {value}
          </div>
        </div>
      </div>
      <p className="text-xs md:text-xl tracking-[0.2em] text-[var(--color-primary)] uppercase">
        {unit}
      </p>
    </div>
  );
}

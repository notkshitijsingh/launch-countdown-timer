import { useEffect, useMemo, useState } from "react";
import { calculateTime } from "../utils/calculateTime";

export default function CountdownSection() {
  const theDate = "2025-01-01";
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
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000 - 50);
  }, [value]);

  const checkValue = (value) => {
    switch (unit) {
      case "seconds":
      case "minutes":
        return value === 59 ? 0 : value + 1;
      case "hours":
        return value === 23 ? 0 : value + 1;
      default:
        return value + 1;
    }
  };

  return (
    <div className="flex flex-col gap-4 md:gap-8 text-center">
      <div className="card rounded md:rounded-lg pb-3">
        <div className="ctn-card-top rounded md:rounded-lg">
          <div className="card-top rounded md:rounded-lg">
            <div className="card-top-content">{value}</div>
          </div>
          {isAnimating && (
            <div
              className={`card-top md:-mt-[72px] -mt-[32px] rounded md:rounded-lg ${
                isAnimating ? "animate-card-top" : ""
              }`}
            >
              <div className="card-top-content">{checkValue(value)}</div>
            </div>
          )}
        </div>

        <div className="ctn-card-bottom rounded md:rounded-lg">
          <div className="card-bottom rounded md:rounded-lg">
            <div className="card-bottom-content">
              {isAnimating ? checkValue(value) : value}
            </div>
          </div>
          {isAnimating && (
            <div
              className={`card-bottom md:-mt-[72px] -mt-[32px] rounded md:rounded-lg ${
                isAnimating ? "animate-card-bottom" : ""
              }`}
            >
              <div className="card-bottom-content">{value}</div>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs md:text-xl tracking-[0.2em] text-[var(--color-primary)] uppercase">
        {unit}
      </p>
    </div>
  );
}

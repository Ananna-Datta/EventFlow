import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-07-20T10:00:00"); // Set your event date & time
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" flex py-20 flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        🎉 Event Will Start In 🎉
      </h1>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="bg-neutral text-neutral-content rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center min-w-[80px]">
    <span className="text-5xl font-mono">{String(value).padStart(2, "0")}</span>
    <span className="text-sm mt-2 uppercase tracking-wider">{label}</span>
  </div>
);

export default Countdown;

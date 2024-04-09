import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={100} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
}

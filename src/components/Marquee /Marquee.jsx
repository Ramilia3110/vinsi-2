import React from "react";
import s from "./Marquee.module.scss";

const Marquee = () => {
  const messages = [
    "New season, New skills! 😀",
    "All Courses at $9.99",
    "New season, New skills! 😀",
    "All Courses at $9.99",
    "New season, New skills! 😀",
    "All Courses at $9.99",
  ];

  return (
    <div className={s["marquee-wrapper"]}>
      {messages.map((text, index) => (
        <h1 key={index} className={s.marquee}>
          <strong>{text}</strong>
        </h1>
      ))}
    </div>
  );
};

export default Marquee;

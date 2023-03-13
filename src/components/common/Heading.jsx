import React from "react";

export const Heading = ({ title, param }) => {
  return (
    <h1 className="heading mb-5 pb-3">
      <span className="title">{title}</span>
      (<span className="param t-code">{param}</span>)
    </h1>
  );
};

import React from "react";
import data from "../data.json";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="Faq">
      <h2>FAQ's</h2>
      {data.quiz.map((value, index) => (
        <Accordion key={index} value={value} />
      ))}
    </div>
  );
};

export default Faq;

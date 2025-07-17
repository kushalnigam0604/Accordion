import React, { useState } from "react";
import "../styles.css";

const Accordion = ({ value }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="Accordion">
      <p className="AccordionQuestion">
        {value.question}
        <span className="sign" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </span>
      </p>
      {show ? <p className="AccordionAnswer">{value.answer}</p> : null}
    </div>
  );
};

export default Accordion;

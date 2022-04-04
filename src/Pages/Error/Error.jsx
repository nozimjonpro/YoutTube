import React from "react";
import "./error.scss";

function Error({isOpen, setIsOpen}) {
  return (
    <section className="error">
      <div className="wrapper">
        <div className="box">
          <h1>500</h1>
          <p>Sorry, it's me, not you.</p>
          <p>&#58;&#40;</p>
          <p>
            <a href="/">Let me try again!</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Error;

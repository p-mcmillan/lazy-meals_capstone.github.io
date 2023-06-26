import React from "react";
import "../../styles/NotFoundPage.scss";

function NotFoundPage() {
  function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function generateRandomDelay() {
    const decimalDigits = 1; // Number of decimal digits in the delay
    const minDelay = -5; // Minimum delay in seconds
    const maxDelay = 0; // Maximum delay in seconds

    const randomDelay = generateRandomNumber(minDelay, maxDelay);
    return `${randomDelay.toFixed(decimalDigits)}s`;
  }

  function generateRandomStyles() {
    const minTop = 0;
    const maxTop = 90;
    const minLeft = 10;
    const maxLeft = 90;

    return {
      top: `${generateRandomNumber(minTop, maxTop)}%`,
      left: `${generateRandomNumber(minLeft, maxLeft)}%`,
      animationDelay: generateRandomDelay(),
    };
  }

  const shapes = Array.from({ length: 20 }).map((_, index) => (
    <>
      <h1 className="notfound">PAGE NOT FOUND</h1>
      <span
        key={index}
        className="floating circle"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating square"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating triangle"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating cross"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating a"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating b"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating c"
        style={generateRandomStyles()}
      ></span>

      <span
        key={index}
        className="floating d"
        style={generateRandomStyles()}
      ></span>

      <span
        key={index}
        className="floating e"
        style={generateRandomStyles()}
      ></span>
      <span
        key={index}
        className="floating f"
        style={generateRandomStyles()}
      ></span>
      <h1 className="notfound">NON TROUVÉ</h1>
    </>
  ));

  return (
    <div className="background">
      <div className="background-container">{shapes}</div>
    </div>
  );
}

export default NotFoundPage;

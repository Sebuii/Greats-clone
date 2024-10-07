import React from 'react';
import './ScrollingText.css';

const messages = [
  "OUTLET IS NOW UP TO 75% OFF →",
  "DISCOVER SNEAKER PERFECTION: SHOP BEST SELLERS",
  "FREE STANDARD SHIPPING ON ORDERS $100+"
];

function ScrollingText() {
  const repeatCount = 3; 

  const repeatedMessages = Array(repeatCount).fill(messages).flat();

  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        {repeatedMessages.map((message, index) => (
          <span key={index}>{message}</span>
        ))}
      </div>
    </div>
  );
}

export default ScrollingText;

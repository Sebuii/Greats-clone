import React, { useState } from "react";
import "./ReturnsPage.css";

import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

function ReturnsPage() {
  const [acdivi, setAcdivi] = useState(false);

  const acbagla = (index) => {
    setAcdivi(acdivi === index ? null : index);
  };

  const faqData = [
    {
      question: "How much will shipping cost?",
      answer:
        "We gladly accept returns of UNWORN merchandise within 30 days  of delivery except outlet items, which are final sale and may not be returned or exchanged. RETURN VIA MAIL: You can print a shipping label and drop off your return at any USPS post office. You will receive an email when your return is received and your refund has been processed. Shipping charges are not refundable and there is a $6.95 per order return fee that covers restocking and postage back to the warehouse. Refunds are always issued to the original method of payment. To prevent a delay in refund, returns must be shipped back within 7 days since the return label was issued. Start by visiting our RETURNS CENTER.",
    },
    {
      question: "How long does it take for me to receive my refund?",
      answer: "You can expect to receive your refund within 10 business days after your return has been shipped.",
    },
    {
      question: "How do I qualify for a return?",
      answer:
        "Returns in New Condition: Shoes must be returned in new condition with original packaged contents (shoes, insoles, shoebox, laces, hangtags, collateral, etc). Try On Indoors: Shoes should be tried on indoors on a clean surface. Shoes received in a condition with excess wear or damage may not qualify for a return or exchange.",
    },
  ];

  return (
    <div>
      <div className="returns-container">
        <h3 className="returns-heading">Returns</h3>

        <p className="returns-paragrap1">Big Style, No Risk.</p>

        <span className="returnslow-paragrap1 returns-margn">We want you to love your GREATS as much as we do.</span>

        <span className="returnslow-paragrap1">
          We believe all of our products are great, but if something is just not right with <br /> them, we'll accept returns.
        </span>

        <div className="overlay-butons">
          <button className="btn">start a return</button>
        </div>

        <div className="ship-boxes">
          {faqData.map((item, index) => (
            <div className={`ship-box ${acdivi === index ? "open" : ""}`} key={index}>
              <div onClick={() => acbagla(index)} className="acdivi">
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {acdivi === index ? <AiOutlineMinus className="tukos" /> : <GoPlus className="tukos" />}
                </span>
              </div>
              <span className="sonrakispan">{item.answer}</span>
            </div>
          ))}

          <div className="ship-box marg-upper">
            <span className="sip-marg">
              If the shoe doesn’t fit...drop us a line! Questions? Concerns? Compliments? Our team will be happy to help.
            </span>
            <span>Email us at support@greatsbrand.com and we will get back to you as soon as possible.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnsPage;

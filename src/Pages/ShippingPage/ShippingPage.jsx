import React, { useState } from "react";
import "./ShippingPage.css";

import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

function ShippingPage() {
  const [acdivi, setAcdivi] = useState(false);

  const acbagla = (index) => {
    setAcdivi(acdivi === index ? null : index);
  };

  const faqData = [
    {
      question: "When will my order ship?",
      answer:
        "All orders will ship on the following business day after the order has been placed. Please add one business day to any shipping estimates.",
    },
    {
      question: "How long will it take for my order to ship and deliver?",
      answer:
        "All orders will ship with the free ground shipping for orders $100 or more, your order will arrive in 3-6 business days.",
    },
    {
      question: "What shipping speeds do you offer?",
      answer:
        "All orders will ship with Free Fedex Ground Shipping for orders $100 or more. Because all orders ship on the following business day, please add one additional business day to every shipping estimate.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can find your tracking information on your order confirmation email. If you’re having trouble finding your order confirmation email, feel free to reach out on live chat or email at info@greatsbrand.com",
    },
    {
      question:
        "My tracking says my order was delivered, but I haven’t received it—what do I do?",
      answer:
        "Oh no! Reach out to the GREATS Customer Experience Team with your tracking information and correct shipping address. We’ll get your issue sorted out as quickly as possible.",
    },
    {
      question: "Can I edit/cancel my order after it has been placed?",
      answer:
        "We cannot modify orders once they are placed. We will only ship to the address provided at checkout. Orders with incorrect billing information or requiring additional verification will be delayed and/or cancelled.",
    },
  ];

  return (
    <div>
      <div className="shipping-container">
        <p className="head-p">Shipping</p>

        <div className="ship-boxes">
          {faqData.map((item, index) => (

            <div
              className={`ship-box ${acdivi === index ? "open" : ""}`}
              key={index}
            >
              <div onClick={() => acbagla(index)} className="acdivi">
                <span>{item.question}</span>
                <span className="toggle-icon">
                  {acdivi === index ? (
                    <AiOutlineMinus className="tukos" />
                  ) : (
                    <GoPlus className="tukos" />
                  )}
                </span>
              </div>
              <span className="sonrakispan">{item.answer}</span>
            </div>


          ))}
        </div>

<div className="ship-box addbox">
    <span>If the shoe doesn’t fit...drop us a line! Questions? Concerns? Compliments? We are here for you via email, text, or chat. </span>
<span>Our support team hours are: <br /> Monday–Sunday 9am–10pm EST <br /></span>
<span>We will get back to you as soon as possible. <br /> <strong>PHONE:</strong> 855-755-0087 <br /> <strong>EMAIL:</strong> info@greatsbrand.com</span>



</div>

      </div>
    </div>
  );
}

export default ShippingPage;

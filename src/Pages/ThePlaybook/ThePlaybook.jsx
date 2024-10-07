import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ThePlaybook.css";

import { GoTriangleDown } from "react-icons/go";
import collection1 from "../../Assets/Images/collection1.png";
import collection2 from "../../Assets/Images/collection2.png";
import collection3 from "../../Assets/Images/collection3.png";
import collection4 from "../../Assets/Images/collection4.png";
import collection5 from "../../Assets/Images/collection5.png";

import community1 from "../../Assets/Images/community1.png";
import community2 from "../../Assets/Images/community2.png";
import community3 from "../../Assets/Images/community3.png";
import community4 from "../../Assets/Images/community4.png";
import community5 from "../../Assets/Images/community5.png";

import conversation1 from "../../Assets/Images/conversation1.png";
import conversation2 from "../../Assets/Images/conversation2.png";
import conversation3 from "../../Assets/Images/conversation3.png";

import culture1 from "../../Assets/Images/culture1.png";
import culture2 from "../../Assets/Images/culture2.png";
import culture3 from "../../Assets/Images/culture3.png";




import collection6 from "../../Assets/Images/bookimgbackground.png";


const data = [
  
  // Community kategorisi
  {
    id: 1,
    title: "A Day In Her Shoes: Jeanne Grey",
    description: "A guest feature from Jeanne Grey of @thegreylayers on the value of a great pair and what that really means to her.",
    image: community1, // Buraya resim yolunu ekleyebilirsin
    category: "Community",
  },
  {
    id: 2,
    title: "A Day In Her Shoes: Tammin Sursok",
    description: "Our shoes and our steps make up the stories we carry with us during our days...",
    image: community2, // Buraya resim yolunu ekleyebilirsin
    category: "Community",
  },
  {
    id: 3,
    title: "A Day In Their Shoes: @bklynmavens",
    description: "Follow along as Lauren & Merlyn of @bklynmavens show us their favorite spots in our hometown of Brooklyn.",
    image: community3, // Buraya resim yolunu ekleyebilirsin
    category: "Community",
  },
  {
    id: 4,
    title: "A Conversation With Nicholas Bailey",
    description: "How do we continue to bring awareness to the BLM movement?...",
    image: community4, // Buraya resim yolunu ekleyebilirsin
    category: "Community",
  },
  {
    id: 5,
    title: "A Q+A With Meena Harris",
    description: "Entrepreneur and Author Meena Harris discusses how we can come together and support each other during the COVID-19 pandemic.",
    image: community5, // Buraya resim yolunu ekleyebilirsin
    category: "Community",
  },

  // Conversations kategorisi
  {
    id: 6,
    title: "Greats Royale Conversations",
    description: "Classics Never Die. Town & Country wrote an article on the key pieces of footwear every man should own...",
    image: conversation1, // Buraya resim yolunu ekleyebilirsin
    category: "Conversations",
  },
  {
    id: 7,
    title: "Do The Right Thing",
    description: "Brands, like people, have an opportunity, or what I believe is actually a duty, to educate and influence...",
    image: conversation2, // Buraya resim yolunu ekleyebilirsin
    category: "Conversations",
  },
  {
    id: 8,
    title: "A Note From Our Founder",
    description: "This is the first blog post on our new site, and we are going to keep this blog alive forever...",
    image: conversation3, // Buraya resim yolunu ekleyebilirsin
    category: "Conversations",
  },

  // Culture kategorisi
  {
    id: 9,
    title: "Make Your Own Mask Filter",
    description: "The greatest people consider the collective, and our face masks help you do that in style...",
    image: culture1, // Buraya resim yolunu ekleyebilirsin
    category: "Culture",
  },
  {
    id: 10,
    title: "Digital Care Package",
    description: "Get your dose of socially distant entertainment with the GREATS digital care package.",
    image: culture2, // Buraya resim yolunu ekleyebilirsin
    category: "Culture",
  },
  {
    id: 11,
    title: "Now That’s What I Call GREATS | Volume 5",
    description: "Summer is a little different this year, and we're providing the soundtrack for it.",
    image: culture3, // Buraya resim yolunu ekleyebilirsin
    category: "Culture",
  },

  // Collection kategorisi
  {
    id: 12,
    title: "Styling 101: The Waverly",
    description: "Take your outfits to new heights...",
    image: collection1,
    category: "Collection",
  },
  {
    id: 13,
    title: "The Wooster: An Infographic",
    description: "Learn more about the inspiration...",
    image: collection2,
    category: "Collection",
  },
  {
    id: 14,
    title: "How to Clean Leather Sneakers At Home",
    description: "Here’s a step-by-step guide...",
    image: collection3,
    category: "Collection",
  },
  {
    id: 15,
    title: "The Anatomy of A Sneaker",
    description: "For an article of clothing...",
    image: collection4,
    category: "Collection",
  },
  {
    id: 16,
    title: "The History of the White Tennis Shoe",
    description: "In the realm of style...",
    image: collection5,
    category: "Collection",
  },

];

  

function ThePlaybook() {

    const [secilencataloq, setSecilencataloq] = useState("All")
  const [goster, setGoster] = useState();

  const tikladiv = () => {
    setGoster((goster) => !goster);
  };

  const filteredData = secilencataloq === "All" 
    ? data 
    : data.filter(item => item.category === secilencataloq);

const tiklaska =(category) => {

    setSecilencataloq(category)
    setGoster((goster) => !goster);

}

 

  return (
    <div>
      <div className="imgyazidivi">
        <img className="img-bookback" src={collection6} alt="" />
        <div className="imgyazisi">
          <p className="firstp">The Playbook</p>
          <p className="twicep">
            Meet the thinkers, makers, and low key geniuses who are making our universe a greater place right now.
          </p>
        </div>
      </div>

      <div className="playbook-container">
        <div onClick={() => tikladiv()} className="collection-div">
          <span>Collection</span>
            <GoTriangleDown />
          
        </div>

        <div className={`mini-navbar ${goster ? "divgoseter" : ""}`}>
          <span onClick={() => tiklaska("All")}    className={`samecls ${secilencataloq === "All" ? "tezeclas" : ""}`} >All Categories</span>
          <span onClick={() => tiklaska("Collection")} className={`samecls ${secilencataloq === "Collection" ? "tezeclas" : ""}`}>Collection</span>
          <span onClick={() => tiklaska("Community")} className={`samecls ${secilencataloq === "Community" ? "tezeclas" : ""}`}>Community</span>
          <span onClick={() => tiklaska("Conversations")} className={`samecls ${secilencataloq === "Conversations" ? "tezeclas" : ""}`}>Conversations</span>
          <span onClick={() => tiklaska("Culture")}className={`samecls ${secilencataloq === "Culture" ? "tezeclas" : ""}`}>Culture</span>
        </div>

        <div className="playbook-boxes">



        {filteredData.map((item, index) => (
  <Link key={index} to={`/theplaybook/${item.id}`}>


    <div className="playbook-box">
      <img src={item.image} alt={item.title} />
      <p className="box-title">{item.title}</p>
      <p className="box-desc">{item.description}</p>
    </div>
    
  </Link>
))}



        </div>
      </div>
    </div>
  );
}

export default ThePlaybook;

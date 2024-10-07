import React, { useState } from "react";
import "./RewievsPage.css";
import { IoStarSharp } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";

const reviews = [
  {
    name: "Sam E.",
    rating: 4.2,
    date: "09/14/24",
    title: "Good fit",
    review: "Good look",
  },
  {
    name: "Joshua B.",
    rating: 3.7,
    date: "09/12/24",
    title: "Good Shoes",
    review: "Stylish and good shoes, impressively comfortable",
  },
  {
    name: "Michael V.",
    rating: 5.0,
    date: "09/12/24",
    title: "The perfect loafer",
    review:
      "So comfortable. Broken in from day one. No blisters. I've got slightly wide feet and they're not too tight like most loafers.",
  },
  {
    name: "Sher N.",
    rating: 4.8,
    date: "09/05/24",
    title: "Royale 2.0",
    review:
      "Great shoe. My third pair. Started with the original Royale. Will be purchasing again. This is my go-to white sneaker.",
  },
  {
    name: "Jonathan R.",
    rating: 3.2,
    date: "09/04/24",
    title: "Very nice",
    review: "High quality",
  },
  {
    name: "Rabah M.",
    rating: 2.9,
    date: "09/04/24",
    title: "Great walking shoe",
    review: "It’s my first time buying this brand. I’ll tell you what, never disappointed. To many more in the future.",
  },
  {
    name: "Edmund R.",
    rating: 4.5,
    date: "09/04/24",
    title: "Great fit",
    review:
      "These sneakers are my go-to for my commute to work and I can also wear them in the office as they are so fashionable.",
  },
  {
    name: "Jay A.",
    rating: 3.8,
    date: "08/31/24",
    title: "My current favorite shoe",
    review:
      "I just absolutely love these shoes. I don’t know what it is about them specifically. They feel really well made and the leather is so unbelievably thin yet soft and string on the sides just feels quality to me. Perhaps I’m a rube and the leather is subpar and I got a bad pair but they've held up for almost two years of occasional use.",
  },
  {
    name: "Blake S.",
    rating: 4.7,
    date: "08/31/24",
    title: "Dope",
    review:
      "These feel really well made. Fit well. The bottom feels more like a dress shoe than sneaker. I popped some gel insoles in and all is well. Compliments be falling on the regs when I’m in these pups.",
  },
  {
    name: "Joshua S.",
    rating: 4.9,
    date: "08/30/24",
    title: "Great looking shoe!",
    review: "Great quality shoe which is half the price of its counterparts. Made in Italy a huge plus.",
  },
  {
    name: "Arnulfo R.",
    rating: 3.6,
    date: "08/29/24",
    title: "Nice shoes!",
    review: "Nice shoes!",
  },
  {
    name: "Barrett T.",
    rating: 4.4,
    date: "08/28/24",
    title: "New favorites",
    review:
      "I'm a longtime Greats shopper and have never found anything to rival my first generation Royales. These are every bit as good. The leather is exquisite, the colors are understated but fun, and the sizing is more accurate than those old-school Royales. I'm excited to wear them again tomorrow ... and the day after that ... and ...",
  },
];

const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0); 
  return (totalRating / reviews.length).toFixed(1); 
};

function RewievsPage() {
  const averageRating = calculateAverageRating(reviews);

  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 6;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview); 

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div>
      <div className="receviesimg1"></div>

      <div className="revcommon">
        <div className="revonemain">
          <p className="number">{averageRating}</p>
          <div className="stars">
            <IoStarSharp className="str" />
            <IoStarSharp className="str" />
            <IoStarSharp className="str" />
            <IoStarSharp className="str" />
            <IoMdStarHalf className="str" />
          </div>
        </div>
        <span className="wart">Write A Review</span>
      </div>

      <div className="reviewboxes">
        {/* Sadece currentReviews'deki yorumlar gösterilecek */}
        {currentReviews.map((review, index) => (
          <div key={index} className="reviewbox">
            <div className="rew-flex">
              <div>
                <span className="rewname">{review.name}</span>
                <span className="verbuyer">Verified Buyer</span>
              </div>
              <span className="verbuyer">{review.date}</span>
            </div>
            <div className="iconsa">
              {/* Rating'i dinamik olarak yıldızlara dönüştür */}
              {[...Array(5)].map((_, starIndex) => {
                if (starIndex + 1 <= Math.floor(review.rating)) {
                  return <IoStarSharp key={starIndex} className="newstr" />;
                } else if (starIndex + 1 === Math.ceil(review.rating)) {
                  return <IoMdStarHalf key={starIndex} className="newstr" />;
                } else {
                  return null;
                }
              })}
            </div>
            <p className="reviews-title">{review.title}</p>
            <p className="reviews-comment reviews-title">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Sayfa numaraları */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`page-btn ${currentPage === pageIndex + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(pageIndex + 1)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RewievsPage;
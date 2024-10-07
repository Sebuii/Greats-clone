import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccessoriesPage.css";
import shoesData from "../../Components/ShoesData/ShoesData";

function AccessoriesPage() {
  // İlk varyasyonu state olarak tanımlayın
  const initialVariations = shoesData.map((ayakkabi) => ayakkabi.variations[0]);
  const initialColors = shoesData.map((ayakkabi) => ayakkabi.variations[0].color);

  const [mevcutVaryasyon, setMevcutVaryasyon] = useState(initialVariations);
  const [selectedColor, setSelectedColor] = useState(initialColors);

  return (
    <div className="new-page accessories">
      <div className="newpage-container">


        <div className="new-page-filterdiv acces-div">
          {/* <div className="filter">
            <span>Show Filters</span>
            <img src={filterimg} alt="sekilfilter" />
          </div> */}
          <span className="nevars">Accessories</span>
        </div>


        
        <span className="acces-paragrf">No results found. Showing top popular products you might want to consider...</span>
        <div className="newpage-kartlar">
          {shoesData.map((ayakkabi, ayakkabiIndex) => {
            return (
              <div key={ayakkabiIndex} className="div-kart" style={{ marginBottom: "50px" }}>
                <Link to={`/product/${ayakkabi.id}`}>
                  <div
                    className="shoe-image"
                    style={{
                      backgroundImage: `url(${mevcutVaryasyon[ayakkabiIndex].image})`,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundImage = `url(${mevcutVaryasyon[ayakkabiIndex].hoverImage})`)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${mevcutVaryasyon[ayakkabiIndex].image})`)}
                  ></div>
                </Link>
                <div className="kart-main">
                  <div className="spn-disp">
                    <span>{ayakkabi.name}</span>
                    <span>{ayakkabi.price}</span>
                  </div>

                  <div className="selected-color">
                    <span>{selectedColor[ayakkabiIndex]}</span>
                  </div>

                  {ayakkabi.variations && (
                    <>
                      <div className="color-options">
                        {ayakkabi.variations.map((varyasyon, index) => (
                          <img
                            className="color-circle-spani"
                            key={index}
                            onClick={() => {
                              const newVariations = [...mevcutVaryasyon];
                              newVariations[ayakkabiIndex] = varyasyon;
                              setMevcutVaryasyon(newVariations);

                              const newSelectedColor = [...selectedColor];
                              newSelectedColor[ayakkabiIndex] = varyasyon.color;
                              setSelectedColor(newSelectedColor);
                            }}
                            src={varyasyon.circleBack}
                            alt="sekil"
                          />
                        ))}
                      </div>

                      <div className="quickadd">
                        <span>Quick Add</span>
                        <span>+</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccessoriesPage;

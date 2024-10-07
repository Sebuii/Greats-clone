import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./NewPage.css";
import filterimg from "../../Assets/Images/filterimg.png";
import { FaAngleDown } from "react-icons/fa6";
import { FilterContext } from "../../Context/FilterContext";

function NewPage() {
  const { filteredData, catalogtik, handleCategoryChange, handleMaterialChange, handleStyleChange } = useContext(FilterContext);
  const [filter, setFilter] = useState(false);
  const [subfilter, setSubfilter] = useState(false);
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (ayakkabiId, variationIndex) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [ayakkabiId]: variationIndex,
    }));
  };

  return (
    <div className="new-page">
      <div className="newpage-container">
        <div className="new-page-filterdiv">
          <div onClick={() => setFilter(!filter)} className="filter">
            <span>Show Filters</span>
            <img src={filterimg} alt="sekilfilter" />
          </div>
          <span className="nevars">New Arrivals</span>
        </div>

        <div style={{ display: "flex" }}>
          {filter && (
            <div className="acilanfilterdivi">
              <p onClick={() => setSubfilter((prev) => (prev === "Collection" ? null : "Collection"))}>
                <span>Collection</span>
                <span>
                  <FaAngleDown className="filterinocnu" />
                </span>
              </p>
              {subfilter === "Collection" && (
                <div className="baglaac">
                  <p onClick={() => handleCategoryChange("Women")}>Women</p>
                  <p onClick={() => handleCategoryChange("Men")}>Men</p>
                </div>
              )}

              <p onClick={() => setSubfilter((prev) => (prev === "Category" ? null : "Category"))}>
                <span>Category</span>
                <span>
                  <FaAngleDown className="filterinocnu" />
                </span>
              </p>
              {subfilter === "Category" && (
                <div className="baglaac">
                  <p onClick={() => catalogtik("High")}>High Tops</p>
                  <p onClick={() => catalogtik("Runners")}>Runners</p>
                  <p onClick={() => catalogtik("Lifestyle")}>Lifestyle</p>
                  <p onClick={() => catalogtik("Loafers")}>Loafers</p>
                  <p onClick={() => catalogtik("Tops")}>Low Tops</p>
                </div>
              )}

              <p onClick={() => setSubfilter((prev) => (prev === "Material" ? null : "Material"))}>
                <span>Material</span>
                <span>
                  <FaAngleDown className="filterinocnu" />
                </span>
              </p>
              {subfilter === "Material" && (
                <div className="baglaac">
                  <p onClick={() => handleMaterialChange("Leather")}>Leather</p>
                  <p onClick={() => handleMaterialChange("Suede")}>Suede</p>
                  <p onClick={() => handleMaterialChange("Nubuck")}>Nubuck</p>
                  <p onClick={() => handleMaterialChange("Knit")}>Knit</p>
                </div>
              )}

              <p onClick={() => setSubfilter((prev) => (prev === "Style" ? null : "Style"))}>
                <span>Style</span>
                <span>
                  <FaAngleDown className="filterinocnu" />
                </span>
              </p>
              {subfilter === "Style" && (
                <div className="baglaac">
                  <p onClick={() => handleStyleChange("JMZ High")}>JMZ High</p>
                  <p onClick={() => handleStyleChange("Royale 2.0")}>Royale 2.0</p>
                  <p onClick={() => handleStyleChange("Charlie Distressed")}>Charlie Distressed</p>
                  <p onClick={() => handleStyleChange("Charlie")}>Charlie</p>
                  <p onClick={() => handleStyleChange("Essex")}>Essex</p>
                </div>
              )}
            </div>
          )}

          <div className="newpage-kartlar">
            {filteredData.map((ayakkabi, ayakkabiIndex) => {
              const selectedVariationIndex = selectedColors[ayakkabi.id] || 0;
              const selectedVariation = ayakkabi.variations[selectedVariationIndex];

              return (
                <div key={ayakkabiIndex} className="div-kart" style={{ marginBottom: "50px" }}>
                  <Link to={`/product/${ayakkabi.id}`}>
                    <div
                      className="shoe-image"
                      style={{
                        backgroundImage: `url(${selectedVariation.image})`,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${selectedVariation.hoverImage})`)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${selectedVariation.image})`)}
                    ></div>
                  </Link>
                  <div className="kart-main">
                    <div className="spn-disp">
                      <span>{ayakkabi.name}</span>
                      <span>${ayakkabi.price}.00</span>
                    </div>
                    <div className="selected-color">
                      <span>{selectedVariation.color}</span>
                    </div>

                    <div className="color-options">
                      {ayakkabi.variations.map((varyasyon, index) => (
                        <img
                          className="color-circle-spani"
                          key={index}
                          onClick={() => handleColorSelect(ayakkabi.id, index)}
                          src={varyasyon.circleBack}
                          alt="sekil"
                        />
                      ))}
                    </div>

                    <div className="quickadd">
                      <span>Quick Add</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;

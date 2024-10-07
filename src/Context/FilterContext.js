import React, { createContext, useState } from "react";
import shoesData from "../Components/ShoesData/ShoesDataForNewPage";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(shoesData);
  const [category, setCategory] = useState("");
  const [selectedCatalog, setSelectedCatalog] = useState("");
  const [material, setMaterial] = useState("");
  const [style, setStyle] = useState("");

  const catalogtik = (catalloqs) => {
    setSelectedCatalog(catalloqs);
    const filtered = shoesData.filter((ayakkabi) => ayakkabi.cataloq === catalloqs);
    setFilteredData(filtered);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const filteredByCategory = shoesData.filter((ayakkabi) => {
      if (newCategory === "Women") return ayakkabi.name.includes("Women");
      if (newCategory === "Men") return ayakkabi.name.includes("Men");
      return true;
    });
    setFilteredData(filteredByCategory);
  };

  const handleMaterialChange = (newMaterial) => {
    setMaterial(newMaterial);
    const filteredByMaterial = shoesData.filter((ayakkabi) => ayakkabi.material === newMaterial);
    setFilteredData(filteredByMaterial);
  };

  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);
    const filteredByStyle = shoesData.filter((ayakkabi) => ayakkabi.style === newStyle);
    setFilteredData(filteredByStyle);
  };

  return (
    <FilterContext.Provider value={{
      filteredData,
      catalogtik,
      handleCategoryChange,
      handleMaterialChange,
      handleStyleChange,
      selectedCatalog,
      category,
      material,
      style,
    }}>
      {children}
    </FilterContext.Provider>
  );
};

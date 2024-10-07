import React, { createContext, useState, useEffect } from "react";

// CartContext oluştur
export const CartContext = createContext();

// CartProvider bileşeni
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartSpanClass, setCartSpanClass] = useState(() => {
    const savedColor = localStorage.getItem("cartSpanClass");
    return savedColor ? savedColor : null;
  });

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const addToCart = (item, selectedVariation, selectedSize) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.id === item.id && i.selectedVariation.color === selectedVariation.color && i.selectedSize === selectedSize
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.selectedVariation.color === selectedVariation.color && i.selectedSize === selectedSize
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, selectedVariation, selectedSize, quantity: 1 }];
    });

    setCartSpanClass("cantareqem");

    localStorage.setItem("cartSpanClass", "cantareqem");
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.min(Math.max(newQuantity, 1), 10) } : item));
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      if (updatedItems.length === 0) {
        setCartSpanClass(null);
        localStorage.removeItem("cartSpanClass");
      }
      return updatedItems;
    });
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartSpanClass,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        isCartModalOpen,
        closeCartModal,
        openCartModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

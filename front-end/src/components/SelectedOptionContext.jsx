import React, { createContext, useContext, useState } from "react";

// Create and export the main context as the default export
const SelectedOptionContext = createContext();
export default SelectedOptionContext;

// Create and export the provider component
export const SelectedOptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Set your day");

  return (
    <SelectedOptionContext.Provider
      value={{ selectedOption, setSelectedOption }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
};

// Create and export the custom hook
export const useSelectedOption = () => useContext(SelectedOptionContext);

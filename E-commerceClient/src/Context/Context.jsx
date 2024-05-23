import { createContext, useState } from "react";

export const createContextProvider = createContext(null);

const Context = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const info = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
  };
  console.log(searchResults);
  return (
    <div>
      <createContextProvider.Provider value={info}>
        {children}
      </createContextProvider.Provider>
    </div>
  );
};

export default Context;

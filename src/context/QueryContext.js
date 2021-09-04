import React, { createContext, useState } from "react";

export const QueryDataContext = createContext();

function QueryProvider(props) {
  const [query, setQuery] = useState({
    q: "reactjs",
    region: "US",
    safe: "none",
  });
  return (
    <QueryDataContext.Provider value={[query, setQuery]}>
      {props.children}
    </QueryDataContext.Provider>
  );
}
export default QueryProvider;

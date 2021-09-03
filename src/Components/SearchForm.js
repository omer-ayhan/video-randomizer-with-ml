import React, { useContext, useState } from "react";
import { QueryDataContext } from "../context/QueryContext";

function SearchForm() {
  const [query, setQuery] = useContext(QueryDataContext);
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery([keyword]);
    setKeyword("");
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Search Keyword"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit">Randomize</button>
      </form>
    </>
  );
}

export default SearchForm;

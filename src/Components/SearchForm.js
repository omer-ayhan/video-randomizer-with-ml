import React, { useContext, useState } from "react";
import { QueryDataContext } from "../context/QueryContext";
import DropdownRender from "./Dropdown";

function SearchForm() {
  const [query, setQuery] = useContext(QueryDataContext);
  const [keyword, setKeyword] = useState("");
  let inputStyle = {
    borderBottom: "2px solid rgb(37, 99, 235)",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setQuery((previousQuery) => ({ ...previousQuery, q: keyword }));
    setQuery({ ...query, q: keyword });
    setKeyword("");
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="grid grid-cols-7 gap-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter Search Keyword"
            value={keyword}
            onChange={handleChange}
            className="col-span-7 outline-none h-10 font-medium text-lg"
            style={inputStyle}
            required
          />
          <div className="col-start-8 col-end-8">
            <label className="p-3 rounded-md shadow-md uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white text-blue-600 ease-linear transition-all duration-150 z-50">
              <i className="fas fa-image"></i>
              <input type="file" className="hidden" />
            </label>
            <DropdownRender />
          </div>
        </div>
        <button
          className="hover:bg-blue-600 hover:text-white ease-linear transition-all duration-150 shadow-md rounded-md bg-gray-100 text-gray-500 font-medium text-lg p-3"
          type="submit">
          Randomize
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

import React, { createRef, useContext, useState } from "react";
import { createPopper } from "@popperjs/core";
import { QueryDataContext } from "../context/QueryContext";

const Dropdown = () => {
  // dropdown props
  const [query, setQuery] = useContext(QueryDataContext);
  // const [regionCode, setRegionCode] = useState("");
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <span className="ml-3">
      <button
        className={
          "p-3 text-blue-600 font-bold uppercase text-sm rounded-md border border-blue shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 bg-white"
        }
        type="button"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <i className="fas fa-cog"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1"
        }
        style={{ minWidth: "12rem" }}>
        <select
          onChange={(e) => {
            setQuery({
              ...query,
              region: e.target.value,
            });
            // setQuery((previousQuery) => ({
            //   ...previousQuery,
            //   region: e.target.value,
            // }));
            setDropdownPopoverShow(!dropdownPopoverShow);
          }}
          className="cursor-pointer outline-none text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 text-blueGray-700 ease-linear transition-all duration-150">
          <option className="bg-white cursor-pointer" value="US">
            US
          </option>
          <option className="bg-white cursor-pointer" value="TR">
            TR
          </option>
        </select>
        <select
          onChange={(e) => {
            setQuery({
              ...query,
              safe: e.target.value,
            });

            // setQuery((previousQuery) => ({
            //   ...previousQuery,
            //   safe: e.target.value,
            // }));
            setDropdownPopoverShow(!dropdownPopoverShow);
          }}
          className="cursor-pointer outline-none text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 text-blueGray-700 ease-linear transition-all duration-150">
          <option className="bg-white cursor-pointer" value="none">
            Safe Search - None
          </option>
          <option className="bg-white cursor-pointer" value="moderate">
            Safe Search - Moderate
          </option>
          <option className="bg-white cursor-pointer" value="strict">
            Safe Search - Strict
          </option>
        </select>
      </div>
    </span>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown />
    </>
  );
}

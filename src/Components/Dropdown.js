import React from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
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
    <span className="mr-3">
      <button
        className={
          "p-3 text-blue-600 font-bold uppercase text-sm rounded shadow hover:bg-blue-600 hover:text-white hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 bg-white"
        }
        type="button"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <i class="fas fa-cog"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1"
        }
        style={{ minWidth: "12rem" }}>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:bg-gray-100 ease-linear transition-all duration-150"
          }
          onClick={(e) => e.preventDefault()}>
          Action
        </a>
        <select className="cursor-pointer outline-none text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100 text-blueGray-700 ease-linear transition-all duration-150">
          <option value="">Hello</option>
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

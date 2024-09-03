import React from "react";
import { ReactSelect } from "../../../components/select/select";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-semibold">TICKER</span>
      <div className="hidden sm:flex w-1/2 justify-between">
        <span className="text-sm font-semibold">PRICE</span>
        <span className="text-sm font-semibold">CHANGE AMOUNT</span>
        <span className="text-sm font-semibold">CHANGE PERCENTAGE</span>
        <span className="text-sm font-semibold">VOLUME</span>
      </div>
      <div className="flex sm:hidden w-1/3 justify-between">
        <ReactSelect />
      </div>
    </div>
  );
};

export default Header;

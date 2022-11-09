import React from "react";
import icon_add from "../../assets/icons/add.svg";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <p className="font-bold text-5xl leading-none">Alerts</p>
      <button
        type="submit"
        className="bg-[#512DA8] py-2 px-3 rounded-md h-fit flex items-center"
      >
        <img src={icon_add} alt="" className="mr-2" />
        <p className="text-white leading-none">New Alert</p>
      </button>
    </div>
  );
}

export default Header;

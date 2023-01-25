import React from "react";
import MenuItems from "../MenuItems";

type Menu = {
  id: number;
  title: string;
  dataImage: string;
};

type DropdownMenuProps = {
  submenus: Menu[];
  dropdown: boolean;
  depthLevel: number;
  isActiveMenu?: boolean;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  submenus,
  dropdown,
  depthLevel,
  isActiveMenu,
}) => {
  depthLevel = depthLevel + 1;
  return (
    <div
      className={`dropdown ${dropdown ? "show" : ""} ${
        isActiveMenu ? "fade" : ""
      }`}
    >
      <div className="dropdown__inner">
        {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
        {/* to do image changer */}
        <img
          className="lazyload lazy_img dropdown-menu-img"
          alt="Вишиванки та вишиті сорочки"
          data-src=""
          src="./media/images/menu-1.jpg"
        />
      </div>
    </div>
  );
};

export default DropdownMenu;

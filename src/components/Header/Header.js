import { useCallback } from "react";
import SideBarToggler from "../Buttons/SideBarToggler";
import LanguageSwitch from "./LanguageSwitch";
import "./styles/Header.scss";

const Header = ({ setOpenSidebar }) => {
  const toggleSidebar = useCallback(
    () => setOpenSidebar((s) => !s),
    [setOpenSidebar]
  );

  return (
    <header>
      <div className="Header">
        <SideBarToggler toggleSidebar={toggleSidebar} />
        <div>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;

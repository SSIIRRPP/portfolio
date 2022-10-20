import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import SpaFlag from "../../assets/icons/spa.png";
import EnFlag from "../../assets/icons/en.png";
import { LanguageContext } from "../../contexts/Language";

const LanguageSwitch = () => {
  const { selectLanguage, changeLanguage } = useContext(LanguageContext);
  return (
    <span className="Header__lang--container">
      <Select
        className="Header__lang--select"
        variant="standard"
        MenuProps={{
          classes: { paper: "Header__lang--popover" },
        }}
        value={selectLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <MenuItem classes={{ selected: "Header__lang--selected" }} value="spa">
          <img className="Header__lang--image" src={SpaFlag} alt="spain-flag" />
        </MenuItem>
        <MenuItem classes={{ selected: "Header__lang--selected" }} value="en">
          <img
            className="Header__lang--image"
            src={EnFlag}
            alt="united-kingdom-flag"
          />
        </MenuItem>
      </Select>
    </span>
  );
};

export default LanguageSwitch;

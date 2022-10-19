import { ReactComponent as ToggleIcon } from "../../assets/icons/menu.svg";
import useTheme from "../../hooks/useTheme";

const SideBarToggler = ({ toggleSidebar }) => {
  const theme = useTheme();
  return (
    <span onClick={toggleSidebar} className="Header__sidebarToggler">
      <ToggleIcon width={30} height={30} fill={theme.color} />
    </span>
  );
};

export default SideBarToggler;

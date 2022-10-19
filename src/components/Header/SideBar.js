import { useCallback } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LanguageConsumer from "../Language/LanguageConsumer";
import "./styles/SideBar.scss";

const Link = ({ to, onClick, path, children = null }) => (
  <LanguageConsumer element="span" path={path} text={children}>
    {({ text }) => (
      <li>
        <RouterLink onClick={onClick ? () => onClick(to) : undefined} to={to}>
          {text}
        </RouterLink>
      </li>
    )}
  </LanguageConsumer>
);

const basePath = "Links";

const SideBar = ({ setOpenSidebar }) => {
  const location = useLocation();
  const closeSideBar = useCallback(
    (to) => {
      location.pathname !== to && setOpenSidebar(false);
    },
    [location.pathname, setOpenSidebar]
  );

  return (
    <aside className="SideBar">
      <nav>
        <ul>
          <Link to="/" onClick={closeSideBar} path={`${basePath}.home`} />
          <Link
            to="/projects"
            onClick={closeSideBar}
            path={`${basePath}.projects`}
          />
          <Link
            to="/education"
            onClick={closeSideBar}
            path={`${basePath}.education`}
          />
          <Link
            to="/code-samples"
            onClick={closeSideBar}
            path={`${basePath}.code`}
          />
          <Link
            to="/contact"
            onClick={closeSideBar}
            path={`${basePath}.contact`}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

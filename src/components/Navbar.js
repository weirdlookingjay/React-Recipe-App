import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          <span>Recipes</span>Hub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className={
                location.pathname == link.path
                  ? "sidebar-links active"
                  : "sidebar-links"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
          onClick={() => setShowSidebar(true)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}

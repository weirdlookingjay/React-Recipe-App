import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ links, close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <a href="#!" key={link.name} className="sidebar-links">
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>
      ))}
    </div>
  );
}

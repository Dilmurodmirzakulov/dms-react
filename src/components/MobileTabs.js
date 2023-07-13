import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignature,
  faSquarePlus,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MobileTabs = () => {
  return (
    <div className="mobile-nav d-lg-none">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <FontAwesomeIcon icon={faHome} />
            <span className="menu-title">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {/* <i className="fa-solid fa-signature"></i> */}
            <FontAwesomeIcon icon={faSignature} />
            <span className="menu-title">Signature</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {/* <i className="fa-solid fa-square-plus"></i> */}
            <FontAwesomeIcon icon={faSquarePlus} />
            <span className="menu-title">Create</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-target="#authModal"
            data-toggle="modal"
            href="#"
          >
            {/* <i className="fa-solid fa-street-view"></i> */}
            <FontAwesomeIcon icon={faStreetView} />
            <span className="menu-title">Local</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileTabs;

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
    <div class="mobile-nav d-lg-none">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <FontAwesomeIcon icon={faHome} />
            <span class="menu-title">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {/* <i class="fa-solid fa-signature"></i> */}
            <FontAwesomeIcon icon={faSignature} />
            <span class="menu-title">Signature</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {/* <i class="fa-solid fa-square-plus"></i> */}
            <FontAwesomeIcon icon={faSquarePlus} />
            <span class="menu-title">Create</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-target="#authModal"
            data-toggle="modal"
            href="#"
          >
            {/* <i class="fa-solid fa-street-view"></i> */}
            <FontAwesomeIcon icon={faStreetView} />
            <span class="menu-title">Local</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileTabs;

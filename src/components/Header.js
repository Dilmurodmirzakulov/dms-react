import React from "react";
import { Link } from "react-router-dom";

const Header = ({ hw, hw2 }) => {
  console.log("state:", hw);
  console.log("state2:", hw2);
  return (
    <header>
      <nav className="navbar navbar-expand-lg wu-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WIUT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="./local.html">
                  LOCAL
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signature">
                  SIGNATURE
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./create.html">
                  CREATE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

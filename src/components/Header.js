import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg wu-navbar">
        <div class="container">
          <Link class="navbar-brand" to="/">
            WIUT
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="./local.html">
                  LOCAL
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signature">
                  SIGNATURE
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./create.html">
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

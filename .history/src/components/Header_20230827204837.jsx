import React from "react";
import "./style/navbar.css";
import Logo from "../assets/bitnine-logo_.png";

export default function Header() {
  return (
    <>
      <div className="fixed-top header">
        <header class="topbar">
          <div class="container">
            <div class="row">
              {/* <!-- social icon--> */}
              <div class="col-sm-12">
                <ul class="social-network">
                    <li>
                      <a class="waves-effect waves-dark" id="hovver" href="#">
                        <i class="bi bi-search"></i>
                      </a>
                    </li>
                    <li>
                      <a class="waves-effect waves-dark" id="hovver" href="#">
                        contact
                      </a>
                    </li>
                  <li>
                    <a class="waves-effect waves-dark" href="#">
                      <i class="bi bi-github"></i>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect waves-dark" href="#">
                      <i class="bi bi-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect waves-dark" href="#">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect waves-dark" href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="waves-effect waves-dark" href="#">
                      <i class="bi bi-medium"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={`${Logo}`} alt="logo" />
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle color-tertiary"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        한국
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    use cases
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    company
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ir
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler btn-sm btn-outline-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">TRY FREE</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

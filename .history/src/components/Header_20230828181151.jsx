import React from "react";
import "./style/navbar.css";
import { useUser } from "./UserContext"; //Path to UserContext file
import Logo from "../assets/bitnine-logo_.png";

export default function Header() {
  const { userName } = useUser(); //Retrieve userName from the context
  const firstLetter = userName ? userName.charAt(0) : "";     // Get the first letter



  return (
    <>
      <div className="fixed-top header">
        <header class="topbar">
          <div class="container">
            <div class="row">
              {/* <!-- social icon--> */}
              <div class="col-sm-12">
                <ul class="social-network">
                  <div className="hovver">
                    <li>
                      <a class="waves-effect waves-dark" id="hovver" href="#">
                        <i class="bi bi-search"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        class="waves-effect waves-dark tact"
                        id="hovver"
                        href="#"
                      >
                        contact
                      </a>
                    </li>
                  </div>
                  <div className="soc">
                    <li id="git">
                      <a class="waves-effect waves-dark" href="#">
                        <i class="bi bi-github"></i>
                      </a>
                    </li>
                    <li id="youtube">
                      <a class="waves-effect waves-dark" href="#">
                        <i class="bi bi-youtube"></i>
                      </a>
                    </li>
                    <li id="in">
                      <a class="waves-effect waves-dark" href="#">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li id="fb">
                      <a class="waves-effect waves-dark" href="#">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li id="medium">
                      <a class="waves-effect waves-dark" href="#">
                        <i class="bi bi-medium"></i>
                      </a>
                    </li>
                  </div>
                  <div className="username bg-light">
                    <li>
                      <a href="">
                        <h2 className="text-dark">{firstLetter}</h2>
                        <h2 className="text-dark">{user}</h2>
                      </a>
                    </li>
                  </div>
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
                  <a className="nav-link" href="#">
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

                <button class="btn btn-outline-primary" type="submit">
                  TRY FREE
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

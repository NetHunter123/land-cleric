import Link from "next/dist/client/link";
import { useEffect } from "react";
import { stickyNav } from "../utils";
import { Home, News, Pages, Project } from "./menus";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> support@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd
                    Floor, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Funden" />
                </a>
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul id="menu-list">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/project-3">
                    Project Three
                  </Link>
                 </li>
                <li>
                  <Link href="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                   About
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              <Link href="/events">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Donate Now <i className="far fa-arrow-right" />
                </a>
              </Link>
              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

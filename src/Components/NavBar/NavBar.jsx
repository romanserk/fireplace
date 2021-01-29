import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState();
  const [y, setY] = useState(0);
  const [sideDrawer, setSideDrawer] = useState();
  const [mobileButtonClass, setMobileButtonClass] = useState("");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrolled(styles.slideDown);
      } else if (y < window.scrollY) {
        setScrolled(styles.slideUp);
      }
      setY(window.scrollY);
    },
    [y]
  );

  const mobileNavButtonClickHandler = () => {
    setSideDrawer(sideDrawer === styles.slideInRight ? styles.slideOutRight : styles.slideInRight);
    setMobileButtonClass(mobileButtonClass === "opened" ? "" : "opened");
  };

  const closeSideDrawer = () => {
    setSideDrawer(styles.slideOutRight);
    setMobileButtonClass("");
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className={`${scrolled} navBar`}>
      <div className={`${mobileButtonClass} navMobileButton`} onClick={mobileNavButtonClickHandler}>
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
      <div className={`${sideDrawer} nav-items-container`}>
        <div className="nav-items-container-inner">
          <div className="nav-link-container" onClick={closeSideDrawer}>
            <Link className="nav-link" to="/gallery">
              גלריה
            </Link>
          </div>
          <div className="nav-link-container" onClick={closeSideDrawer}>
            <Link className="nav-link" to="/contact">
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

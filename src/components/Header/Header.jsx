import { IconMenu2 } from "@tabler/icons-react";
import React, { useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contacts",
    },
  ];

  const handleSmoothScroll = (event, link = "#home") => {
    event.preventDefault();

    const targetElement = document.querySelector(link);
    window.scrollTo({
      top:
        targetElement.offsetTop - document.querySelector("header").offsetHeight,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <a
            href="#home"
            className={css.logo}
            onClick={(event) => handleSmoothScroll(event)}
          >
            Lina
          </a>
          {/* Burger Menu */}

          <div className={css.burgerMenu} onClick={toggleMenu}>
            <IconMenu2 />
          </div>

          <ul className={`${css.navList} ${isOpen && css.open}`}>
            {navlinks.map(({ name, link }, idx) => (
              <li key={idx} className={css.item}>
                <a
                  href={link}
                  className={css.link}
                  onClick={(event) => handleSmoothScroll(event, link)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

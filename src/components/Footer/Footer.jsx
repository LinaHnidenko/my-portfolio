import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.textWrapper}>
          <p className={css.footerText}>
            Copyright © 2024.All rights reserved. Lina Hnidenko
          </p>
          <ul className={css.list}>
            <li>
              <a
                href="https://www.linkedin.com/in/lina-hnidenko-b81675218/"
                className={css.link}
              >
                <IconBrandLinkedin width="34px" height="34px" />
              </a>
            </li>
            <li>
              <a href="https://github.com/LinaHnidenko" className={css.link}>
                <IconBrandGithub width="34px" height="34px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

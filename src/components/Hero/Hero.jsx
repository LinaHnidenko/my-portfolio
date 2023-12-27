import {
  IconArrowBadgeRight,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import React from "react";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.descWrapper}>
            <h1 className={css.title}>Frontend React Developer</h1>
            <p className={css.desc}>
              Hi, I'm Lina Hnidenko. 😊 <br />
              As a junior React developer, I'm keen on building user-friendly
              web experiences.
              <br />
              Based in Ukraine. 📍
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
          <div className={css.photoContainer}>
            <img src="/images/hero-image.jpg" alt="" className={css.image} />
          </div>
        </div>
        <div className={css.skillsWrapper}>
          <p className={css.techName}>
            Tech Stack
            <IconArrowBadgeRight width="35px" height="35px" />
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <img src="https://skillicons.dev/icons?i=html" alt="" />
              <img src="https://skillicons.dev/icons?i=css" alt="" />
            </li>

            <li className={css.techListItem}>
              <img src="https://skillicons.dev/icons?i=js" alt="" />
              <img src="https://skillicons.dev/icons?i=ts" alt="" />
            </li>
            <li className={css.techListItem}>
              <img src="https://skillicons.dev/icons?i=react" alt="" />
              <img src="https://skillicons.dev/icons?i=redux" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import css from "./About.module.css";

const About = () => {
  return (
    <section className={css.aboutSection} id="about">
      <div className="container">
        <div className={css.aboutWrapper}>
          <img
            src="/images/about-image_.jpg"
            alt=""
            className={css.aboutImage}
          />
          <div className={css.textWrapper}>
            <h2 className={css.aboutTitle}>About Me ✍🏻</h2>

            <p className={css.aboutDesc}>
              I'm a junior React frontend developer passionate about creating
              dynamic and user-friendly web interfaces. I have a strong
              foundation in web technologies, having mastered
              <span className={css.span}> CSS3, HTML5, and JavaScript.</span>
              <br />
              My skill set extends to modern frameworks like{" "}
              <span className={css.span}>React and TypeScript.</span> I have
              experience working with{" "}
              <span className={css.span}>REST APIs</span>. Additionally, I have
              hands-on expertise in state management using{" "}
              <span className={css.span}>Redux and Redux Toolkit.</span>
              <br /> My journey in web development is driven by a commitment to
              staying current with industry trends and continuously expanding my
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

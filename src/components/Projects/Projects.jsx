import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import css from "./Projects.module.css";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Projects</h2>
        <h3 className={css.subtitle}>Innovative and Creative Achievements</h3>
        <ProjectItem
          image="/images/project_1.png"
          title={
            <span className={css.spanName}>
              Web<span className={css.spanNameStudio}>Studio</span>
            </span>
          }
          desc="The 'WebStudio' project is a modern responsive website dedicated to showcasing a studio of web development. Visit the 'Studio' page to learn more about the studio and explore the 'Portfolio' page to see their exciting projects."
          tech1="HTML"
          tech2="CSS"
          // tech3=""
          demo="https://linahnidenko.github.io/goit-markup-hw-07/index.html"
          code="https://github.com/LinaHnidenko/goit-markup-hw-07"
        />
      </div>
    </section>
  );
};

export default Projects;

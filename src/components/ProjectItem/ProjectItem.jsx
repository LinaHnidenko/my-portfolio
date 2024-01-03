import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import React from "react";
import css from "./ProjectItem.module.css";

const ProjectItem = ({
  image,
  title,
  role,
  desc,
  tech1,
  tech2,
  tech3 = undefined,
  tech4 = undefined,
  demo,
  code,
}) => {
  return (
    <div className={css.projectWrapperInfo}>
      <div className={css.imageWrapper}>
        <a href={demo} target="_blank" rel="noreferrer">
          <img src={image} alt="" className={css.imagePortfolio} />
        </a>
      </div>
      <div className={css.textWrapper}>
        <h3 className={css.title}>
          {title} <br />({role} project)
        </h3>

        <p className={css.portfolioDesc}>{desc}</p>

        <ul className={css.list}>
          <li className={css.technology}>{tech1}</li>
          <li className={css.technology}>{tech2}</li>
          {tech3 && <li className={css.technology}>{tech3}</li>}
          {tech4 && <li className={css.technology}>{tech4}</li>}
        </ul>
        <ul className={css.list}>
          <li className={css.listItem}>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              Code
            </a>
            <IconBrandGithub width="34px" height="34px" />
          </li>
          <li className={css.listItem}>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              Live Demo
            </a>
            <IconExternalLink width="34px" height="30px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;

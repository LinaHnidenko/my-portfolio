import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import React from "react";
import css from "./ProjectItem.module.css";

const ProjectItem = ({
  image,
  title,
  desc,
  tech1,
  tech2,
  tech3,
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
        <h3>{title}</h3>
        <p className={css.portfolioDesc}>{desc}</p>
        <ul className={css.list}>
          <li className={css.technology}>{tech1}</li>
          <li className={css.technology}>{tech2}</li>
          {/* <li className={css.listItem}>{tech3}</li> */}
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

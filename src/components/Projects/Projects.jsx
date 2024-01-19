import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import css from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-right">
      <div className="container">
        <h2 className={css.title}>Projects</h2>
        <h3 className={css.subtitle}>Innovative and Creative Achievements</h3>
        <ProjectItem
          image="/images/project_1.png"
          title="FavShop"
          role="Individual"
          desc="FavShop is an innovative online store with a diverse range of products, from stylish clothing to cutting-edge electronics, catering to various tastes. Explore the fascinating world of shopping at FavShop."
          tech1="React"
          tech2="Tailwind CSS"
          tech3="Redux Toolkit"
          demo="https://linahnidenko-ecommerce.netlify.app/"
          code="https://github.com/LinaHnidenko/ecommerce-web"
        />
        <ProjectItem
          image="/images/project_4.png"
          title="Cryptoverse"
          role="Individual"
          desc="Cryptoverse: Your comprehensive hub for cryptocurrency information. Explore detailed insights on any cryptocurrency, including the latest news updates, designed to keep you informed and engaged."
          tech1="React"
          tech2="Ant Design"
          tech3="Rest API"
          tech4="RTK Query"
          demo="https://cryptoverseappln.netlify.app/"
          code="https://github.com/LinaHnidenko/cryptoapp"
        />
        <ProjectItem
          image="/images/project_3.png"
          title="Admin Dashboard"
          role="Individual"
          desc="Admin Dashboard: A dynamic React app for administrators featuring employee data, task scheduling, and statistical analysis charts. Developed independently to showcase my expertise in crafting efficient and user-friendly interfaces."
          tech1="React"
          tech2="Material UI"
          demo="https://linahnidenko.github.io/dashboard-app-admin"
          code="https://github.com/LinaHnidenko/dashboard-app-admin"
        />
        <ProjectItem
          image="/images/project_2.png"
          title={
            <span className={css.spanNameTasty}>
              Tasty<span className={css.spanNameStudio}>Treats</span>
            </span>
          }
          role="Team"
          desc="The 'Tasty Treats' is interactive recipe website where flavor meets creativity. Explore recipes by categories and conveniently save your favorites on a dedicated 'Favorites' tab for personalized culinary inspiration. This was a collaborative project where I contributed to developing the 'Favorites' page."
          tech1="HTML"
          tech2="CSS"
          tech3="JS"
          demo="https://natalikoyani.github.io/Team_10/index.html"
          code="https://github.com/natalikoyani/Team_10"
        />
        <ProjectItem
          image="/images/project_5.png"
          title="Simply Chocolate"
          role="Team"
          desc="Simply Chocolate: Indulge in the delectable world of our chocolate-making company. Explore the mouthwatering site to discover the rich ingredients and intricate process behind the exquisite chocolates. "
          tech1="HTML"
          tech2="CSS"
          tech3="JS"
          demo="https://tanyajulieva.github.io/project-CodeLovers23/index.html"
          code="https://github.com/TanyaJulieva/project-CodeLovers23"
        />
      </div>
    </section>
  );
};

export default Projects;

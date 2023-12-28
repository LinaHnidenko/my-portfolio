import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
      const bounding = section.getBoundingClientRect();

      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});

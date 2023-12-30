import { setRandomPositionDice } from "./dice.js";

const skill_list = document.querySelector(".skill_list");
const skill_list_dummy = document.querySelector(".skill_list_dummy");
const project_list = document.querySelector(".project_list");

const image_root = "/assets/logo";

const css = "css.png";
const javascript = "javascript.png";
const nextjs = "nextjs.png";
const react_query = "reactQuery.png";
const react = "react.png";
const redux = "redux.png";
const styled_components = "styledComponents.png";
const tailwind = "tailwind.png";
const threejs = "threejs.png";
const typescript = "typescript.png";
const zustand = "zustand.png";

var logos = [
  css,
  javascript,
  nextjs,
  react_query,
  react,
  redux,
  styled_components,
  tailwind,
  threejs,
  typescript,
  zustand,
];

let projectDatas = [];

fetch("json/project.json")
  .then((response) => response.json())
  .then((items) => {
    projectDatas = items;

    items.map((item) => {
      const project_item = document.createElement("li");
      project_list.appendChild(project_item);

      project_item.setAttribute("id", item.id);
      project_item.classList.add("project_item");

      const project_title_dummy = document.createElement("div");
      project_item.appendChild(project_title_dummy);
      project_title_dummy.classList.add("project_title_dummy");

      const project_title = document.createElement("div");
      project_title_dummy.appendChild(project_title);
      project_title.classList.add("project_title");
      project_title.textContent = item.title;

      const project_image = document.createElement("img");
      project_item.appendChild(project_image);
      project_image.classList.add("project_image");
      project_image.src = item.thumb_url;

      project_item.addEventListener("mouseover", (event) =>
        onMouseoverProject(event, project_title)
      );

      project_item.addEventListener("mouseout", (event) =>
        onMouseoutProject(event, project_title)
      );

      project_item.addEventListener("click", (event) =>
        onClickProject(event, item.id)
      );
    });
  });

// logo
logos.map((logo) => {
  const skill_item = document.createElement("li");
  skill_list_dummy.appendChild(skill_item);

  skill_item.setAttribute("id", logo.split(".")[0]);
  skill_item.classList.add("skill_item");
  const skill_image = document.createElement("img");
  skill_item.appendChild(skill_image);
  skill_image.classList.add("skill_image");
  skill_image.src = `${image_root}/${logo}`;
});

function onMouseoverProject(event, title) {
  title.classList.add("project_title_slide_up");
}

function onMouseoutProject(event, title) {
  title.classList.remove("project_title_slide_up");
}

function onClickProject(event, id) {
  projectDatas.map((item) => {
    if (item.id === id) {
      displayUseSkill(item.skills);
    }
  });

  displayPreview();

  setRandomPositionDice();
}

function displayUseSkill(skills) {
  while (skill_list.firstChild) {
    skill_list.removeChild(skill_list.firstChild);
  }

  console.log(skills);
  skill_list_dummy.childNodes.forEach((node) => {
    if (skills.includes(node.id)) {
      skill_list.appendChild(node.cloneNode(true));
    }
  });
}

function displayPreview() {}
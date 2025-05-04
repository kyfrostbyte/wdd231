// main.js

import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const parkData = getParkData();

function init() {
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}

// Set the main headline and description
function setParkIntro(data) {
  document.querySelector(".intro").innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
    `;
}

// For each object in parkInfoLinks, create media card populate it with object data
function setParkInfoLinks(data) {
  const infoSection = document.querySelector(".info");
  infoSection.innerHTML = data.map(mediaCardTemplate).join("");
}

document.addEventListener("DOMContentLoaded", init);

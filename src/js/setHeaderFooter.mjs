// setHeaderFooter.mjs
import { footerTemplate } from "./templates.mjs";

// Render disclaimer, hero image, hero banner and text
function setHeaderInfo(parkData) {
  // Update the link in the disclaimer area to read the name of the park and navigate to that park’s official site.
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;

  // Update the title of the page to read the name of the park.
  const title = document.querySelector("title");
  title.innerHTML = parkData.fullName;

  // Use the first image in the list in the data for the hero image.
  const heroImageElement = document.getElementById("background-image");
  heroImageElement.src = parkData.images[0].url;
  heroImageElement.alt = parkData.images[0].altText;

  // Update the name, designation, and states of the park in the hero.
  const parkNameElement = document.getElementById("park-name");
  const parkDesignationElement = document.getElementById("park-designation");
  const parkStatesElement = document.getElementById("park-states");
  parkNameElement.innerHTML = parkData.name;
  parkDesignationElement.innerHTML = parkData.designation;
  parkStatesElement.innerHTML = parkData.states;
}

// Inserts the mailing address and phone number into the footer
function setFooter(parkData) {
  const footerElemennt = document.getElementById("park-footer");
  footerElemennt.innerHTML = footerTemplate(parkData);
}

// Renders both the header and the footer
export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setFooter(data);
}

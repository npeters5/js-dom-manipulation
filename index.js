// set up parent elements

const header = document.createElement("header");
const header = document.createElement("div");
banner.className = "banner";
const header = document.createElement("main");
const header = document.createElement("footer");

const parents = [header, banner, main, footer];
parents.forEach(parent => document.body.appendChild(parent));

////////////////////
//Header Elements//
///////////////////

//Container div
const headerContainer = document.createElement("div");
headerContainer.className = "container";
header.appendChild(headerContainer);

//h1.name
const headerName = document.createElement("h1");
headerName.className = "name";
headerContainer.appendChild(headerName);

//anchor element
const headerNameLink = document.createElement("a");
headerNameLink.href = "#";
headerNameLink.innerText = "Best City Guide";
headerNameLink.appendChild(headerNameLink);

//nav element

const headerNav = document.createElement("nav");
headerContainer.appendChild(headerNav);

//4 anchor elements

const iceCream = document.createElement("a");
const donuts = document.createElement("a");
const tea = document.createElement("a");
const coffee = document.createElement("a");

const navLinks = [iceCream, donuts, tea, coffee];
const linkText = ["ice cream", "donuts", "tea", "coffee"];

navLinks.forEach((link, i) => {
  link.href = "#";
  link.innterText = linkText[i];
  headerNav.appendChild(link);
});

////////////////////
//Banner Elements//
///////////////////

//helper function

const addElement = (element, className, text, parent) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  newElement.innerText = text;
  parent.appendChild(newElement);
  return newElement;
};

//img.logo

const bannerImg = document.createElement("img");
bannerImg.className = "logo";
bannerImg.src = "img/city-logo.svg";
bannerImg.alt = "city";
banner.appendChild(bannerImg);

//h1.headline

const headline = document.createElement("h1");
headline.className = "headline";
headline.innerText = "The Best City";
banner.appendChild(headline);
const headline = addElement("h1", "headline", "The Best City", banner);

//span.tagline

// const tagline = document.createElement("span");
// headline.className = "tagline";
// headline.innerText = "The best drinks and eats in the best city ever.";
// banner.appendChild(tagline);

const tagline = addElement(
  "span",
  "tagline",
  "The best drinks and eats in the best city ever.",
  banner
);

/////////////////
//Main Elements//
////////////////

//Welcome column

//h2

//3 p tags of lorem ipsum text

//Food column
const food = document.createElement("div");
food.classList.add("food", "column");

//h2

// figure

//2 images

// figcaption
const caption = document.createElement("figcaption");
const captionHeading = document.createElement("h4");
captionHeading.innerText = "Featured Drinks & Eats";
caption.innerText = "Croissant macaroon pie brownie cookie marshmallow";

caption.appendChild(captionHeading);

//h4

//p

//Directions column

////////////////////
//Footer Elements//
///////////////////

//Create span

const footerSpan = document.createElement("span");
footerSpan.innterHTML = "&copy;2017 Residents of The Best City Ever";
footer.appendChild(footerSpan);

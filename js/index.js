const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2018",
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Header/Navbar
const navService = document.querySelector("nav a:nth-of-type(1)");
navService.textContent = siteContent["nav"]["nav-item-1"];
navService.style = "color: green";
const navProduct = document.querySelector("nav a:nth-of-type(2)");
navProduct.textContent = siteContent["nav"]["nav-item-2"];
navProduct.style = "color: green";
const navVision = document.querySelector("nav a:nth-of-type(3)");
navVision.textContent = siteContent["nav"]["nav-item-3"];
navVision.style = "color: green";
const navFeat = document.querySelector("nav a:nth-of-type(4)");
navFeat.textContent = siteContent["nav"]["nav-item-4"];
navFeat.style = "color: green";
const navAbout = document.querySelector("nav a:nth-of-type(5)");
navAbout.textContent = siteContent["nav"]["nav-item-5"];
navAbout.style = "color: green";
const navContact = document.querySelector("nav a:nth-of-type(6)");
navContact.textContent = siteContent["nav"]["nav-item-6"];
navContact.style = "color: green;";

//additional navs
const navHome = navService.cloneNode(true);
navService.prepend(navHome);
navHome.textContent = "Home";
navHome.style.cssText = "margin-right: 2rem; color:green";

const navStart = navContact.cloneNode(true);
navContact.appendChild(navStart);
navStart.textContent = "Get Started";
navStart.style.cssText = "margin-left: 2rem; color:green;";

// console.log(nav);

//top content cta
//dom is what?
const title = document.querySelector("h1");
title.textContent = "DOM Is Awesome";
console.log(title);
//code snipp img
const codeSnip = document.querySelector("#cta-img");
// console.log(codeSnip);
codeSnip.src = siteContent["cta"]["img-src"];
//button
const button = document.querySelector("button");
button.textContent = "Get Started";

//main content
//top content;
const featCont = document.querySelector(".top-content");
const featH = featCont.querySelector("h4");
featH.textContent = "Featured";
const featP = featCont.querySelector("p");
featP.textContent = siteContent["main-content"]["features-content"];
// console.log(featH);
// console.log(featP);
// console.log(featCont);

const aboutCont = featCont.cloneNode(true);
featCont.appendChild(aboutCont);
const aboutH = aboutCont.querySelector("h4");
aboutH.textContent = "About";
const aboutP = aboutCont.querySelector("p");
aboutP.textContent = siteContent["main-content"]["about-content"];
// console.log(aboutH);

//image of code snippets across screen
const mainCodeSnip = document.querySelector("#middle-img");
mainCodeSnip.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
// console.log(mainCodeSnip);

//bottom content
const servicesCont = document.querySelector(".bottom-content");
const servH = servicesCont.querySelector("h4");
servH.textContent = "Services";
const servP = servicesCont.querySelector("p");
servP.textContent = siteContent["main-content"]["services-content"];
console.log(servicesCont);

const productCont = servicesCont.cloneNode(true);
servicesCont.appendChild(productCont);
const prodH = productCont.querySelector("h4");
prodH.textContent = "Product";
const prodP = productCont.querySelector("p");
prodP.textContent = siteContent["main-content"]["product-content"];

const visionCont = productCont.cloneNode(true);
productCont.appendChild(visionCont);
const visionH = visionCont.querySelector("h4");
visionH.textContent = "Vision";
const visionP = visionCont.querySelector("p");
visionP.textContent = siteContent["main-content"]["vision-content"];

//Contact Info
const contactCont = document.querySelector(".contact");
const contactH = contactCont.querySelector("h4");
contactH.textContent = siteContent["contact"]["contact-h4"];
const contactP1 = contactCont.querySelector("p");
contactP1.textContent = siteContent["contact"]["address"];
contactP1.style = "width: 10rem;";

const contactP2 = contactP1.cloneNode(true);
contactP1.appendChild(contactP2);
contactP2.textContent = siteContent["contact"]["phone"];
console.log(contactP2);

const contactP3 = contactP2.cloneNode(true);
contactP2.appendChild(contactP3);
contactP3.textContent = siteContent["contact"]["email"];
console.log(contactP3);
console.log(contactCont);

const footer = document.querySelector("footer");
const footerP = footer.querySelector("p");
footerP.textContent = siteContent["footer"]["copyright"];
console.log(footer);

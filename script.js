"use strict";

// DOM VARIABLES

const primaryNav = document.getElementById("primary-nav");
const primaryNavButton = document.querySelector(".primary-nav-button");

// EVENTLISTENERS

primaryNavButton.addEventListener("click", function () {
	const primaryNavToggle = primaryNav.getAttribute("data-visible");

	if (primaryNavToggle === "false") {
		primaryNav.setAttribute("data-visible", "true");
		primaryNavButton.setAttribute("aria-expanded", "true");
	} else {
		primaryNav.setAttribute("data-visible", "false");
		primaryNavButton.setAttribute("aria-expanded", "false");
	}
});

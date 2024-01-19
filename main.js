// Utility functions to get elements
const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)

// Get elements
const menuIcon = select(".menu-img")
const navLinks = select(".links")

// Open / Close Menu
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle("show")
})

// Get Scroll Height
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-property", navigationHeight + "px");
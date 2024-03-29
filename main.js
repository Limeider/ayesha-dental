// Utility functions to get elements
const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)

// Get elements
const menuIcon = select(".menu-img")
const navList = select(".links")
const navLinks = selectAll(".nav-link")
const primaryNavigation = select("#primary-navigation")

// Menu Behavior
menuIcon.addEventListener('click', function () {
    navList.classList.toggle("show")

    navLinks.forEach(navLink => navLink.addEventListener("click", function () {
        navList.classList.remove("show")
    }))
})

// Prevent Touch Scrolling When Menu Is Active
navList.addEventListener("touchmove", function (e) {
    e.preventDefault()
})

primaryNavigation.addEventListener("touchmove", function (e) {
    e.preventDefault()
})

// Get Scroll Height
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-property", navigationHeight + "px");
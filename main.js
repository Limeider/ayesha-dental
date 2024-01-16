// Utility functions to get elements
const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)

// Get elements
const menu = select("#menuList")
const menuIcon = select(".menu-img")
const navigation = select("#primary-navigation")

// Add Event Listeners



// Get Scroll Height
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-property", navigationHeight + "px");
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const footer = document.querySelector(".footer");
const nav = document.querySelector(".nav");
const home = document.querySelector(".home");
const secret = document.querySelector(".secret");
const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "100%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(footer, 1, {color: "white"}, {color: "black"}, "-=1.2")
.fromTo(nav, 1.2, {color: "#008080"}, {color: "white"}, "-=0.6")
.fromTo(home, 0.5, {color: "#008080"}, {color: "white"}, "-=1.5")
.fromTo(secret, 0.5, {color: "#008080"}, {color: "white"}, "-=1.5");
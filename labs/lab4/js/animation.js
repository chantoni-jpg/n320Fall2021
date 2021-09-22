var mainBox = document.getElementById("main-box");
var boxes = document.getElementById("grid-container");
var One = document.getElementById("one");
var Two = document.getElementById("two");
var Three = document.getElementById("three");
var Four = document.getElementById("four");
var Five = document.getElementById("five");
var Six = document.getElementById("six");
init();
function init() {
  //TweenMax.to(mainBox, { duration: 0.7, ease: "none", x: 300 });
  TweenMax.from(mainBox, { autoAlpha: 0, duration: 3 });
  //TweenMax.to(otherBoxes, { duration: 0.7, ease: "none", x: 150 });
  TweenMax.from(boxes, { autoAlpha: 0, duration: 3 });

  //main box events
  mainBox.addEventListener("mouseover", () => {
    TweenMax.to(mainBox, { opacity: 0.5 });
  });
  mainBox.addEventListener("mouseout", () => {
    TweenMax.to(mainBox, { opacity: 1, duration: 0.5 });
  });
  mainBox.addEventListener("click", () => {
    //TweenMax.to(mainBox, { duration: 0.7, ease: "none", x: 3000, opacity: 0 });
    TweenMax.to(mainBox, { opacity: 0, autoAlpha: 0 });
  });

  //box one events
  One.addEventListener("mouseover", () => {
    TweenMax.to(One, { opacity: 0.5 });
  });
  One.addEventListener("mouseout", () => {
    TweenMax.to(One, { opacity: 1, duration: 0.5 });
  });
  One.addEventListener("click", () => {
    TweenMax.to(One, { opacity: 0, autoAlpha: 0 });
  });

  //box two events
  Two.addEventListener("mouseover", () => {
    TweenMax.to(Two, { opacity: 0.5 });
  });
  Two.addEventListener("mouseout", () => {
    TweenMax.to(Two, { opacity: 1, duration: 0.5 });
  });
  Two.addEventListener("click", () => {
    TweenMax.to(Two, { opacity: 0, autoAlpha: 0 });
  });

  //box three events
  Three.addEventListener("mouseover", () => {
    TweenMax.to(Three, { opacity: 0.5 });
  });
  Three.addEventListener("mouseout", () => {
    TweenMax.to(Three, { opacity: 1, duration: 0.5 });
  });
  Three.addEventListener("click", () => {
    TweenMax.to(Three, { opacity: 0, autoAlpha: 0 });
  });

  //box four events
  Four.addEventListener("mouseover", () => {
    TweenMax.to(Four, { opacity: 0.5 });
  });
  Four.addEventListener("mouseout", () => {
    TweenMax.to(Four, { opacity: 1, duration: 0.5 });
  });
  Four.addEventListener("click", () => {
    TweenMax.to(Four, { opacity: 0, autoAlpha: 0 });
  });

  //box five events
  Five.addEventListener("mouseover", () => {
    TweenMax.to(Five, { opacity: 0.5 });
  });
  Five.addEventListener("mouseout", () => {
    TweenMax.to(Five, { opacity: 1, duration: 0.5 });
  });
  Five.addEventListener("click", () => {
    TweenMax.to(Five, { opacity: 0, autoAlpha: 0 });
  });

  //box six events
  Six.addEventListener("mouseover", () => {
    TweenMax.to(Six, { opacity: 0.5 });
  });
  Six.addEventListener("mouseout", () => {
    TweenMax.to(Six, { opacity: 1, duration: 0.5 });
  });
  Six.addEventListener("click", () => {
    TweenMax.to(Six, { opacity: 0, autoAlpha: 0 });
  });
}

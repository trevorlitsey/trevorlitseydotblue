import "./style.css";

// lazy load images
const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

images.forEach(image => observer.observe(image));

// ---------
function loadImage(entries) {
  entries.filter(isIntersecting).forEach(({ target }) => {
    if (target.src.includes("h_1,w_1/")) {
      const urlParts = target.src.split("h_1,w_1/");
      target.src = []
        .concat(
          urlParts[0], // base
          target.dataset.replace, // new dimensions
          urlParts[1], // actual pic
        )
        .join("");
    }
  });
}

function isIntersecting(node) {
  return node.isIntersecting;
}

// intersection observer polyfill
(function(undefined) {}.call(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {},
));

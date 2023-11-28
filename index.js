console.log("Hello world");

// prepend header //

document.addEventListener("DOMContentLoaded", () => {
  var headerElement = document.createElement("header");

  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      headerElement.innerHTML = html;
      document.body.prepend(headerElement);
    })
    .catch((error) => console.error("Header fetch error:", error));
});


// hover effect to cta button. //
//I don't know how to make this apply to the header.html file too...//

const button = document.querySelector(".cta");

const heroButton = document.querySelector(".hero__cta");

button.classList.replace("cta--default", "cta--hover");

button.addEventListener("mouseenter", () => {
  button.classList.replace("cta--default", "cta--hover");
});

button.addEventListener("mouseleave", () => {
  button.classList.replace("cta--hover", "cta--default");
});

heroButton.addEventListener("mouseenter", () => {
  heroButton.classList.replace("cta--default", "cta--hover");
});

heroButton.addEventListener("mouseleave", () => {
  heroButton.classList.replace("cta--hover", "cta--default");
});

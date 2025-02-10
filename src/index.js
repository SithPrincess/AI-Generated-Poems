function generatePoem(event) {
  event.preventDefault();

new Typewriter("#poem", {
  strings: "This is a poem!",
  autoStart: true,
  delay: 3 ,
  cursor: "",
});

}
let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);

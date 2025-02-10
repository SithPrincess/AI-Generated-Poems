function getPoem(response) {
  console.log("Poem Generated:");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "355o03d48211t632342b7f4c029b7a0f";
  let prompt = `User Instructions: Generate a funny poem about ${userInput.value}`;
  let context =
    "You are a poem expert that loves writing funny poems in the style of dad jokes and puns. Generate a 4 line poem in basic HTML and seperate each line with a <br />. Do not include a title to poem. Sign the end of the poem with 'SheCodes AI' inside a <strong> element on the last line. Do not include the word html. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Your Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(getPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);

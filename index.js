"use strict";

function getDogImage() {
  let breed = $('input[name="breed"]').val();

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //check for error, no error then load image
  if (
    responseJson.message === "Breed not found (master breed does not exist)"
  ) {
    alert("That breed wasn't found, please try another or check spelling.");
  } else {
    $(".results-img").replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
    //display the results section
    $(".results").removeClass("hidden");
  }
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});

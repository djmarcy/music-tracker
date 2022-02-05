// WHEN, the page loads
// THEN, I am presented with all of the words I have learned so far
// GIVEN, I am presented with a page with a drop down to choose a language
// WHEN, I choose a language from the drop down box and press the Go button
// THEN, the application displays a word in english and the chosen language, as well as the definition
// WHEN, I have generated a new word,
// THEN, The words I have previously learned will display on the page


// TODO: Assign variables from the DOM
var chosenWord = document.getElementById("chosen-word")
var selectButton = document.getElementById("word-of-day")

// TODO: Assign other variables
var storedWords = []

// Init Function
function initFunction() {

// TODO: Fetch random word form random word API
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "56e1ec2b89msh75f5a1bd9fbcbb6p150a7bjsnb6e951a5a987"
    }
})
.then(function(response) { 
	return response.json() }) // Convert data to json
.then(function(data) {
  console.log(data)

  // Sets the word of the day to the DOM
  var randomWord = data.word
  chosenWord.textContent = (randomWord)

  // Sets word of the day to local storage
  storedWords.push(randomWord)
  localStorage.setItem("words", storedWords)
  testing(randomWord)

}) // End of thens
} // End of init function

function testing(rword) {
  var word = "home";
  var key = "ca17d58e-66c7-41a6-a5c6-589cfe4e0342"
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }
    fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" + rword + "?key=" + key, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); // CHANGE FORM LOG TO DISPLAY ON PAGE AND OR LOG
}

// TODO: Fetch the definition


// TODO: Display english word and definiton to the page


// TODO: Translate word using translate api


// TODO: Display translated word


// TODO: Save english and translated word to local storage


// TODO: Get from local storage and display to the table in the html framework



// TODO: Keyboard events


// TODO: Event listeners
selectButton.addEventListener("click", initFunction);
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  const results = [];
  //Filters over the fruit array and adds elements that contain the string the user types
  fruit.filter((val) =>
    val.toLowerCase().includes(str) ? results.push(val) : null
  );
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.toLowerCase();
  const results = search(inputVal);
  inputVal ? showSuggestions(results) : (suggestions.innerText = ""); //Checks if user input is empty
}

function showSuggestions(results, inputVal) {
  suggestions.innerText = "";
  results.forEach(function (suggestion) {
    //Loops each el of results to add to drop down list
    const newLi = document.createElement("li");
    newLi.innerText = suggestion;
    //I had suggestions add the following 3 event listeners, but it made it so
    //The user could click on the outer box to add all entries of results.
    newLi.addEventListener("click", useSuggestion);
    //newLi.addEventListener("mouseover", hover);
    //newLi.addEventListener("mouseout", hover);
    suggestions.appendChild(newLi);
  });
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerText = "";
}

input.addEventListener("keyup", searchHandler);

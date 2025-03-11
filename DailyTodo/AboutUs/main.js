let feedMeOne = document.querySelector("#feed-me")
let feedMeTwo = document.querySelector("#feed-me-again")
let fullBiscuit = document.querySelector("#biscuit")
let halfBiscuit = document.querySelector("#half-biscuit")
let hungryLab = document.querySelector("#hungry-lab")
let fullLab = document.querySelector("#sleepy-dog")



function dogsDinnerOne() {
   fullBiscuit.style.display = 'none';
   halfBiscuit.style.display = 'inline';
   feedMeOne.style.display = 'none'
   feedMeTwo.style.display = 'block'
}

feedMeOne.onclick = dogsDinnerOne;

function dogsDinnerTwo() {
    feedMeOne.style.display = 'none'
    fullBiscuit.style.display = 'none';
    halfBiscuit.style.display = 'none';
    hungryLab.style.display = 'none';
    fullLab.style.display = 'inline';
    feedMeTwo.style.backgroundColor = '#268540'
    feedMeTwo.innerHTML = 'Time for sleep'
 }

 feedMeTwo.onclick = dogsDinnerTwo;
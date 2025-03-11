document.addEventListener("DOMContentLoaded", function () {

//list items
const chest = document.getElementById('chest')
const back = document.getElementById('back')
const legs = document.getElementById('legs')
const run = document.getElementById('run')
//checkBoxes
const chestCheck = document.getElementById('chest-check')
const backCheck = document.getElementById('back-check')
const legsCheck = document.getElementById('legs-check')
const runCheck = document.getElementById('run-check')



////////////////////////////////////////////////////
//////////////  completion streak counter  ////////
///////////////////////////////////////////////////

let completedTasks = 0
const totalTasks = 4
let completionStreak = localStorage.getItem("completionStreak") 
    ? parseInt(localStorage.getItem("completionStreak")) 
    : 0;

    // The above code does the same as this.....

    //let storedStreak = localStorage.getItem("completionStreak");
    //if (storedStreak !== null) {
        //completionStreak = parseInt(storedStreak);
        //} else {
        //completionStreak = 0;
        //}
completedTasksRemainder = 0

//display's current completion streak

console.log("Current completion streak is: " + completionStreak)
document.getElementById('complete-count').innerHTML = 'LEVEL: ' + completionStreak

// updates completion streak once all tasks checked off

function completionCounterFunc () {
    completedTasksRemainder = completedTasks % totalTasks
    if(completedTasksRemainder === 0){
        completionStreak++
        localStorage.setItem("completionStreak", completionStreak); // Save completion streak value to localStorage
        return document.getElementById('complete-count').innerHTML = 'LEVEL: ' + completionStreak;
    } else{null}
}

/////////////////////////////////////////////////
////  strike through the various checkboxes ////
////////////////////////////////////////////////

    function strikethrough(event) {
        const targetId = event.target.id.replace("-check", ""); // Get corresponding task ID
        const taskElement = document.getElementById(targetId);
        const checkbox = event.target;

        if (taskElement) {
            taskElement.style.textDecoration = "line-through";
            completedTasks++;
            console.log(`Completed ${targetId} exercise`);
            console.log(`${completedTasks} task(s) completed`);
            completionCounterFunc();
            checkbox.hidden = true;
            console.log("CHECKBOXES hidden until tomorrow");
        }
    }

    // Add event listeners for each checkbox
    document.getElementById("chest-check").addEventListener("click", strikethrough);
    document.getElementById("back-check").addEventListener("click", strikethrough);
    document.getElementById("legs-check").addEventListener("click", strikethrough);
    document.getElementById("run-check").addEventListener("click", strikethrough);
;

//////////////////////////////////////////
// Reset checkboxes when date changes ///
////////////////////////////////////////


/////////////  get date and time  ////////////////


const date = new Date().toLocaleDateString('en-GB');
console.log(date)
document.getElementById('date').innerHTML = 'DATE: ' + date

//compare date

const lastDate = localStorage.getItem("lastDate")
const todaysDate = date

if(lastDate !== todaysDate) {
    //resets check boxes
   document.querySelector('input[type="checkbox"]')
    document.querySelector('li').style.textDecoration = 'none'

    console.log('Challenges reset')

    // updates the stored date

    localStorage.setItem("lastDate", todaysDate)
    console.log("today's date has been updated with todays date: " + todaysDate)
}});


//////////////////////////////////
///////  reset level  ///////////
/////////////////////////////////

const resetButton = document.getElementById("reset");

function resetLevelButton(event) {
    let startOver = confirm("Are you sure you want to start over?");
    if (startOver) {
        console.log("You have started a new game. Your level has been reset...");
        localStorage.setItem("completionStreak", "0"); // Explicitly resetting instead of removing
    }
}

// Event Listener for resetting the level

resetButton.addEventListener("click", resetLevelButton);

/////////////////////////////////////////////////////////////////
///////////// Challenge Complete Message  ///////////////////////
////////////////////////////////////////////////////////////////

//display a congratulation message once the daily challenges have been completed

//make reps for exercise incremental - remove hardcoded values
// increment reps by 5 for every 10 levels gained
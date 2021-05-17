console.log('Here are all the available people:', people);

$(readyFunc);


function readyFunc() {
    console.log('jquery loaded!');

    // prompt user



    for (let person of people) {
        $('#target').append(`
        <div class="pics">
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
        `) // end append
    } // end for loop
} // end readyFunc


function randomWho() {
    
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// give each person a data number in loop ?
// give user the name tied to data number, but random
// on click, compare data number clicked and data number (name) given
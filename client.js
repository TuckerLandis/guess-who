console.log('Here are all the available people:', people);

$(readyFunc);


function readyFunc() {
    console.log('jquery loaded!');

    // put people on dom
    putPeople();

    // prompt user


} // end readyFunc


function putPeople() {
    let personNum = 0;


    for (let person of people) {

        // increments number
        personNum++;
        //assigns number as data   -- this is wrong? want data on div?
        
        $(person).data('num', personNum)
        // appends person with image to dom
        $('#target').append(`
        <div class="pics">
        <img src="https://github.com/${person.githubUsername}.png?size=250" 
        alt="Profile image of ${person.name}">
        </div>
        `) // end append


        console.log(personNum);
        console.log($(person).data('num'));
        

    } // end loop

} // end put people

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// give each person a data number in loop ?
// give user the name tied to data number, but random
// on click, compare data number clicked and data number (name) given
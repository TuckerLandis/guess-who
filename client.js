console.log('Here are all the available people:', people);

$(readyFunc);

const maxPeople = people.length



function readyFunc() {
    console.log('jquery loaded!');

    //click listeners
    $('#target').on('click', '.pics', handleClick)

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



        let personAppender = $(`
        <div class="pics" data-id="${personNum}">
        <img src="https://github.com/${person.githubUsername}.png?size=250" 
        alt="Profile image of ${person.name}">
        </div>
        `);

        $('#target').append(personAppender) // end append

        

        console.log('This is the variable:', personNum);
        console.log('This is Data', $(personAppender.data('id')));
        
        

    } // end loop

} // end put people

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function handleClick() {
    console.log('div clicked');
    
}








// give each person a data number in loop ?
// give user the name tied to data number, but random
// on click, compare data number clicked and data number (name) given


// scrap heap
        // $(person).data('num', personNum)
        // // appends person with image to dom
        // let personID = $(person).data('num', personNum) //defines person data to div data -- likely for no reason
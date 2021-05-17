console.log('Here are all the available people:', people);

$(readyFunc);

const maxPeople = people.length;



function readyFunc() {
    console.log('jquery loaded!');

    //click listeners
    $('#target').on('click', '.pics', handleClick)
    $('#target').on('click', '.pics', compare)

    // put people on dom
    putPeople();
    //define person to guess and append
    let answer = pickPersonToGuess()
    $('#whoTarg').append(answer);
    let guess = handleClick();
    
    

    //clicked to answer


} // end readyFunc


function putPeople() {
    let personNum = 0;

    // this loops through 
    for (let person of people) {

        // increments number
        personNum++;
        //assigns number as data   -- this is wrong? want data on div?
        $(person).data('num', personNum);
        // console.log('this is the object data', $(person).data('num')); // sets data to object in array
        



        let personAppender = $(`
        <div class="pics" data-id="${personNum}" data-name="${person.name}">
        <img src="https://github.com/${person.githubUsername}.png?size=250" 
        alt="Profile image of ${person.name}">
        </div>
        `);

        $('#target').append(personAppender) // end append

        

        //console.log('This is the variable:', personNum);
       // console.log('This is Div Data', $(personAppender.data('id')));
        
        

    } // end loop

} // end put people

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function pickPersonToGuess(){
    let personToGuess = randomNumber(1, maxPeople);

    // need to get name from this number + object data append to top of page.
    //loop through
    // if statement -- compare to data, then append
for (let person of people) {
    if(personToGuess == $(person).data('num')) {
        personToGuess = person.name;
    } else {}
} // end loop
    
    return personToGuess;
} // end Pick

function handleClick(answer) {


    console.log('div clicked');
    let guess = ($(this).data('id'));
    console.log(answer);
    
    console.log(guess);
    
    compare(answer, guess)
     return $(this).data('id');
   
}

function compare(answer, guess) {

    console.log('in compare', answer, guess);
    
    if (answer === guess) {
        console.log('bingo');
        
    } else {
        console.log('wrong guess or broken');
        
    }
}

// i think i am comparing a name to a data, and i dont want to 





// give each person a data number in loop ?
// give user the name tied to data number, but random
// on click, compare data number clicked and data number (name) given


/// ????? put compare in handle click???

// big issues with order of operations


// scrap heap
        // $(person).data('num', personNum)
        // // appends person with image to dom
        // let personID = $(person).data('num', personNum) //defines person data to div data -- likely for no reason
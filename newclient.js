console.log('Here are all the available people:', people);

const maxPeople = people.length;

$(readyNow);

let answerReturn = randAnswer();


function readyNow() {
    console.log('jquery loaded!');
    putPeople();
    putAnswer();
}

function putPeople() {
    // loop through array of people, assigning a data'num' to each

    for ( i = 0; i < people.length; i++) {
        
        $(people[i]).data('num', i);
        let personAppender = $(`
        <div class="pics" data-id="${i}">
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
        alt="Profile image of ${people[i].name}">
        </div>
        `);

        $('#target').append(personAppender) // end append   
        console.log($(people[i].data));
        
    } // end loop

} // end put people

function randAnswer() {
    let answer = randomNumber(1, maxPeople);
    return answer;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function putAnswer(){
    let answerName = people[randAnswer()].name;
    $('#whoTarg').append(answerName);
}
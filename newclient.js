console.log('Here are all the available people:', people);

const maxPeople = people.length-1; // crucial

$(readyNow);


let answerReturn = randAnswer();
console.log(answerReturn);


function readyNow() {
    console.log('jquery loaded!');
    putAnswer();
    putPeople();
    

    // click listener
    $('#target').on('click', '.pics', compare)
}

function putPeople() {
    // loop through array of people, assigning a data'num' to each

    for ( i = 0; i < people.length; i++) {
        let person = people[i];
        $(person).data('num', i);
        let personAppender = $(`
        <div class="pics" data-id="${i}">
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
        alt="Profile image of ${people[i].name}">
        </div>
        `);

        $('#target').append(personAppender) // end append   
        console.log($(person).data('num'));
        
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
    let answerName = people[answerReturn].name;
    $('#whoTarg').append(answerName);
}

function compare() {
    console.log($(this).data('id'));
    if ($(this).data('id') !== answerReturn) {
        console.log('nope');
        alert('Nope, try again!')
        
        
    } else if ($(this).data('id') == answerReturn) {
        console.log('yes?');
        if(confirm('Bingo!')){
            window.location.reload();  
        }
        
    }
    
    
} 

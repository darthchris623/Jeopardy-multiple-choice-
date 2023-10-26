console.log('Jeopardy');
const start = document.getElementById('start'); // DOM selector for start button
const gameBoard = document.getElementById('gameboard'); // DOM selector for table
const endButton = document.createElement('button'); // Button for endgng game at any time
const scoreBoard = document.getElementById('score'); // Scoreboard DOM selector
scoreBoard.innerText = 0; // Will be updated later as you get questions right

/* This function shuffles both the categories and the clues in order to generate random distribution.
This is based on an algorithm called Fisher Yates.*/
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter); // Generates a random index
        counter--; // Decrease counter by 1
        let temp = array[counter]; // And swap the last element with it
        array[counter] = array[index];//--> index NOW equals whatever the random number is
        array[index] = temp; //and now that new index number for U.S. history NOW equals 'temp'
    };
    return array;
};

function shuffleCategories(array) {
    shuffle(array); // Shuffles the categories
    for (let a = 0; a < array.length; a++){
        shuffle(array[a].clues); // Shuffles the clues
    };
    return array.slice(0, 6); // Returns only 6 categories
};

// End-game function for end-game button
function endGame() {
    if (confirm('Are you sure you want to quit?')) {
    }
    // Keep playing
    else {
        return
    }
    $('thead').remove();
    $('tbody').remove();
    scoreBoard.innerText = '0';
    endButton.remove();
    start.addEventListener('click', startGame);
};

// Start game button
start.addEventListener('click', startGame);

function startGame() {
    const shuffledCategories = shuffleCategories(categories); // Variable stores the return value of shuffleCategories
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const categoryRow = document.createElement('tr');
    endButton.innerText = 'Quit game';
    // Two separate loops build the table head and the table body
    // Fisrt loop sets the categories in the head
    for (let a = 0; a < shuffledCategories.length; a++){
        const categoryCells = document.createElement('th');
        categoryCells.classList = 'cell category'
        categoryCells.innerText = `${shuffledCategories[a].category}`;
        categoryRow.append(categoryCells);
        head.append(categoryRow);
    };
    // 
    // Second loop sets the questions and answers in the table body
    for (let a = 0; a < 5; a++){ // Outer loop iterates to set the rows
        const row = document.createElement('tr');
        for (let b = 0; b < 6; b++){ // Inner loop iterates to set the columns
            const cell = document.createElement('td');
            const money = a + 1;
            cell.innerText = `$${money * 100}`; // Sets the dollar amount for the cells
            cell.classList = 'cell clue'; // For CSS purposes
            row.append(cell);
            cell.setAttribute('id', `${b}-${a}`);
            cell.setAttribute('question', `${shuffledCategories[b].clues[a].question}`); // Sets the question in the HTML
            cell.setAttribute('choices', `${shuffledCategories[b].clues[a].choices}`); // Sets the question in the HTML
            cell.setAttribute('answer', `${shuffledCategories[b].clues[a].answer}`); // Sets the answer in the HTML
            cell.addEventListener('click', handleClick);
            body.append(row);
        };        
    };
    gameBoard.append(head);
    gameBoard.append(body);
    start.removeEventListener('click', startGame);
    endButton.addEventListener('click', endGame);
    document.body.append(endButton);
};

// Opens the clue and displays the question in a separate div.
let openClue = false;
function handleClick(event) {
    if (openClue) { // prevents opening another clue before you answer the current one
        return;
    }
    openClue = true;
    // Retrives the coordinates from the element ID to select the
    // correct question from the categories array
    const clickedClue = event.target;
    let coords = clickedClue.id.split('-'); // example [1, 4]
    let c = parseInt(coords[0]); // 1
    let r = parseInt(coords[1]); // 4
    // Used for retrieving question in the answerQuestion function
    //------------------------------------------
    const mainDiv = document.createElement('div'); // Creates the div for the selected question
    const answerForm = document.createElement('form'); // Creates subdiv for answer form
    const text = document.createElement('p');
    const choicesArray = clickedClue.getAttribute('choices').split(','); // Creates an array of the choices from the HTML
    const button = document.createElement('button'); // Submit button for the answer
    const shuffledChoices = shuffle(choicesArray); // Shuffles the answers array
    answerForm.id = 'choices';
    mainDiv.classList = 'question'; // Used for CSS
    mainDiv.setAttribute('answer', `${categories[c].clues[r].answer}`); // Used for retrieving answer in the answerQuestion function
    text.innerText = `${categories[c].clues[r].question}`; // Renders the question onto the div
    mainDiv.setAttribute('id', `${c}-${r}`); // Used for DOM selection in the answerQuestion function
    mainDiv.setAttribute('value', clickedClue.innerText); // Used for setting score in the answer then the next line executes
    clickedClue.innerText = `${categories[c].clues[r].question}`; // Renders the question to the clicked cell
    clickedClue.classList.remove('clue'); // Changes font size
    mainDiv.append(text);
    // Creates the radio buttons for the answer form
    for (let a = 0; a < shuffledChoices.length; a++){
        const label = document.createElement('label');
        const br = document.createElement('br');
        label.innerHTML = `<input type="radio" name="choices" value="${shuffledChoices[a]}">${shuffledChoices[a]}`
        answerForm.append(label);
        answerForm.append(br);
    };
    answerForm.append(button);
    mainDiv.append(answerForm);
    const br = document.createElement('br');
    mainDiv.append(br);
    button.innerText = 'Submit';
    button.addEventListener('click', answerQuestion);
    document.body.append(mainDiv);
    removeEventListener('click', handleClick); 
};

function answerQuestion(event) {
    event.preventDefault();
    const questionDiv = document.body.querySelector('.question');
    const answerForm = document.body.querySelector('form');
    const text = document.body.querySelector('p');
    const answer = questionDiv.getAttribute('answer'); // Extracts answer from HTML
    const value = questionDiv.getAttribute('value').slice(1); // Removes the $ in order to calculate the score
    questionDiv.append(text);
    // Reads which radio selector is selected
    const selected = document.querySelector('input[name="choices"]:checked');
    if (selected === null) { // If player has not selected an answer
        return;
    }
    // If answer is right
    else if (selected.value.toLowerCase() === answer.toLowerCase()) {
        answerForm.remove();
        questionDiv.style.backgroundColor = '#00bd1c';
        questionDiv.style.fontSize = '60px';
        text.innerText = 'CORRECT';
        let score = parseFloat(scoreBoard.innerText.replace(',', '')) + parseFloat(value); // Removes comma separator and adds score
        scoreBoard.innerText = score.toLocaleString(); // Converts new score to a string
        // "CORRECT" message will display for 2 seconds, then disappear, then player can continue
        setTimeout(function () {
            let coords = questionDiv.id.split('-'); // example [1, 4]
            let c = parseInt(coords[0]); // 1 - "c" stands for column
            let r = parseInt(coords[1]); // 4 - "r" stands for row
            document.getElementById(`${c}-${r}`).innerText = '';
            document.getElementById(`${c}-${r}`).removeEventListener('click', handleClick);
            questionDiv.remove(); // Removes the answer div
            openClue = false;
        }, 2000);
        // return; /* Once it's true, the code stops running.
        // Otherwise false will be generated and the "else" statement will execute*/
    }
    // If answer is wrong
    else {
        answerForm.remove();
        questionDiv.style.backgroundColor = '#b90b0b';
        questionDiv.style.fontSize = '60px'
        text.innerText = 'INCORRECT';
        // "INCORRECT" message will display for 2 seconds, then disappear, then player can continue
        let score = parseInt(scoreBoard.innerText.replace(',', '')) - parseInt(value); // Subtracts from the score and uses a comma separator
        scoreBoard.innerText = score.toLocaleString(); // Converts new score to a string
        setTimeout(function () {
            // This code will restore the original table cell display
            let coords = questionDiv.id.split('-'); // example [1, 4]
            let c = parseInt(coords[0]); // 1 - "c" stands for column
            let r = parseInt(coords[1]); // 4 - "r" stands for row
            document.getElementById(`${c}-${r}`).innerText = questionDiv.getAttribute('value'); // Restores the score amount
            document.getElementById(`${c}-${r}`).classList = 'cell clue'; // For CSS purposes
            document.getElementById(`${c}-${r}`).addEventListener('click', handleClick); // Re-adds the event listener
            questionDiv.remove(); // Removes the answer div;
            openClue = false;
        }, 2000);
    }
    // Code must be outside of "FOR" loop otherwise the inner logic will subtract points
};
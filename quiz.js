let currentQuestionIndex = 0;

const getQuestionByIndex = (index) => {
    return questions.find(question => question.index === index);
};

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const questionData = getQuestionByIndex(currentQuestionIndex);

    if (questionData.hasOwnProperty('question')) {
        
        const questionElement = document.createElement('div');
        questionElement.className = 'question-container';
        questionElement.setAttribute('data-questionindex', currentQuestionIndex); // Add question index
        questionElement.innerHTML = `<h2>${questionData.question}</h2>`;
        
        const choicesList = document.createElement('ul');.0
        choicesList.className = 'choices';
        let choiceIndex = 0
        
        questionData.choices.forEach(choice => {
            const choiceItem = document.createElement('li');
            const choiceButton = document.createElement('button');
            choiceButton.textContent = choice;
            choiceButton.onclick = () => handleChoice(choiceButton);
            choiceItem.className = 'shown';
            choiceItem.appendChild(choiceButton);
            choicesList.appendChild(choiceItem);
            choiceItem.setAttribute('data-choiceindex', choiceIndex);
            choiceIndex++;
        });
        questionElement.appendChild(choicesList);
        quizContainer.appendChild(questionElement);
    } else {
        const completionMessage = document.createElement('div');
        completionMessage.className = 'question-container';
        completionMessage.innerHTML = `<h2>${questionData.answer}</h2>`;
        quizContainer.appendChild(completionMessage);
    }
}

function handleChoice(selectedChoice) {
    const quizContainer = document.getElementById('quiz-container');
    const lastQuestion = quizContainer.lastChild;
    const parentQuestion = selectedChoice.parentElement.parentElement.parentElement;
    const parentQuestionIndex = parseInt(parentQuestion.getAttribute('data-questionindex'))

    const questionData = getQuestionByIndex(parentQuestionIndex);
    const followUpQuestionIndex = parseInt(selectedChoice.parentElement.getAttribute('data-choiceindex'));
    const selectedQuestionIndex = questionData['followUp'][followUpQuestionIndex];

    if (parentQuestion.classList.contains('greyed-out')) {
        // If the user is unselecting the choice
        while (quizContainer.lastChild !== parentQuestion) {
            quizContainer.removeChild(quizContainer.lastChild);
        }
        currentQuestionIndex = selectedQuestionIndex;

        // Restore all previous choices
        const previousQuestion = quizContainer.lastChild;
        const buttons = previousQuestion.getElementsByTagName('button');
        for (let button of buttons) {
            button.parentElement.classList.remove('hidden');
            button.disabled = false;
            button.classList.remove('selected');
        }
        previousQuestion.classList.remove('greyed-out');
    } else {
        // Normal selection process
        const questionData = questions[currentQuestionIndex];
        // alert(questionData.followUp);

        lastQuestion.classList.add('greyed-out');
        const buttons = lastQuestion.getElementsByTagName('button');
        for (let button of buttons) {
            if (button.textContent !== selectedChoice.textContent) {
                button.parentElement.classList.add('hidden');
            } else {
                button.disabled = false; // Ensure the button is not disabled
                button.classList.add('selected');
                button.onclick = () => handleChoice(selectedChoice); // Reattach the click event
            }
        }

        currentQuestionIndex = selectedQuestionIndex;;
        setTimeout(loadQuestion, 500); // Wait for the animation to complete before loading the next question
    }
}

window.onload = loadQuestion;

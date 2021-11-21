//Laurita starts

let currentTaskIndex = 0; //that tasks would start from the beginning
let currentTopicIndex = 0; //that topics would start from the beginning
let currentTaskList = []; //list of current task

function currentTask() {
	return currentTaskList[currentTaskIndex]; //to find out current task and take the object
}

function incrementCurrentTaskIndex() {
	//this function creates circle flow
	if (currentTaskIndex < currentTaskList.length - 1) {
		currentTaskIndex++;
	} else {
		currentTaskIndex = 0;
	}
	if (currentTask().isAnsweredCorrect) {
		incrementCurrentTaskIndex();
	}
}

function decrimentCurrentTaskIndex() {
	//this function lets to come back (previous button) and hides already answered questions
	if (currentTaskIndex == 0) {
		currentTaskIndex = currentTaskList.length - 1;
	} else {
		currentTaskIndex--;
	}
	if (currentTask().isAnsweredCorrect) {
		decrimentCurrentTaskIndex();
	}
}

function currentTopicHasUnansweredQuestions() {
	//checks out if there are questions which was not answered or skipped
	return (
		currentTaskList.filter((element) => !element.isAnsweredCorrect).length != 0
	);
}

function submitButtonFunction() {
	//when submit button is pressed with a correct answer it gives succes message, if not- hint
	const answerIsCorrect = currentTask().verifyFunction();
	if (answerIsCorrect && !currentTask().isAnsweredCorrect) {
		//if it was already answered correct and it was not answered before, it does not let to answer again
		currentTask().isAnsweredCorrect = true; //selects
		displaySuccessMessage(currentTask());
	} else {
		displayHint(currentTask());
	}
}

function displayTopic(topic) {
	document.getElementById("currentTopicHeader").innerHTML = topic.name;
	document.getElementById("currentTopicDescription").innerHTML =
		topic.description;
	currentTaskList = topic.tasks;
	currentTaskList.forEach((element) => {
		element.isAnsweredCorrect = false;
	}); //selects that none of the answers was answered, when it starts again
	currentTaskIndex = 0;
	displayTask(currentTask());
}

function displayTask(task) {
	//to display tasks
	document.getElementById("task").innerHTML = task.taskContent;
	hideMessage();
}

function displayHint(task) {
	//to display hints
	document.getElementById("message").innerHTML = task.hint;
}

function displaySuccessMessage(task) {
	//to display success message
	document.getElementById("message").innerHTML = task.successMessage;
}

function hideMessage() {
	//to hidden message, when it is not needed
	document.getElementById("message").innerHTML = "";
}

function nextTask() {
	if (!currentTopicHasUnansweredQuestions()) {
		nextTopic();
	} else {
		incrementCurrentTaskIndex();
		displayTask(currentTask());
	}
}

function previousTask() {
	decrimentCurrentTaskIndex();
	displayTask(currentTask());
}

function nextTopic() {
	currentTopicIndex++;
	if (hasMoreTopics()) {
		displayTopic(allTopics[currentTopicIndex]);
	} else {
		showGameOver();
	}
}

function showGameOver() {
	document.getElementById("currentTopicHeader").innerHTML = "GAMEOVER";
	document.getElementById("currentTopicDescription").innerHTML =
		"YOU ARE JAVASCRIPT MASTER";
	document.getElementById("task").innerHTML = "";
	document.getElementById("message").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
}

function hasMoreTopics() {
	return currentTopicIndex < allTopics.length;
}

displayTopic(allTopics[currentTopicIndex]);

//Laurita ends

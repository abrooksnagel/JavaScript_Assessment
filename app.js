var counter = 0;


$(document).ready(function() {
	init();
});


//This calls functions on button clicks
function init() {
	$('.generate').on('click', appendContainerButtons);
	$('.generate').on('click', addToCounter);
	$('.two-btn').on('click', '.delete', removeContainer);
	$('.two-btn').on('click', '.change', changeColor);
}


//This will add the change and delete buttons
function appendContainerButtons() {
	$('.two-btn').append('<div class="del-change-btn"></div>');
	$('.two-btn').children().last().append('<button class="delete">Delete</button>');
	$('.two-btn').children().last().append('<button class="change">Change</button>');
}


//This will add to the counter and run the appendCounter function
function addToCounter() {
	counter++;
    appendCounter();
}


//This will append the new counter value to the DOM
function appendCounter() {
	$('.counter').append('<p>' + counter + '</p>');
}


//This removes container upon delete
function removeContainer() {
	$('.two-btn').remove();
}


//This changes color upon change
function changeColor() {
 	$('.two-btn').toggleClass('clicked');
 }





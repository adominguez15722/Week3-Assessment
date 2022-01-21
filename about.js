console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function overImg(evt)	{
	evt.preventDefault();

	alert('What a great picture you picked!')
}

let duck = document.querySelector('img')

duck.addEventListener('mouseover', overImg)
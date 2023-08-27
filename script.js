/*
	1. Perform the color change in the selection and prevail until the user removes the selection from the chosen classification.
*/
var ratingOne = document.getElementById('rtn-1'),
	ratingTwo = document.getElementById('rtn-2'),
	ratingThree = document.getElementById('rtn-3'),
	ratingFour = document.getElementById('rtn-4'),
	ratingFive = document.getElementById('rtn-5');

var listOfRating = [ratingOne, ratingTwo, ratingThree, ratingFour, ratingFive];

ratingOne.addEventListener('click', ()=>{
	if(!ratingOne.classList.contains("bg-cl-hover-rating-selected")) {
		ratingOne.classList.remove("bg-cl-normal-rating");
		ratingOne.classList.remove("rating-number-hover");
		ratingOne.classList.add("bg-cl-hover-rating-selected");

		for(var x = 1; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "none";
		}
	}else {
		ratingOne.classList.remove("bg-cl-hover-rating-selected");
		ratingOne.classList.add("bg-cl-normal-rating");
		ratingOne.classList.add("rating-number-hover");

		for(var x = 1; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "block";
		}
	}
});

ratingTwo.addEventListener('click', ()=>{
	if(!ratingTwo.classList.contains("bg-cl-hover-rating-selected")) {
		ratingTwo.classList.remove("bg-cl-normal-rating");
		ratingTwo.classList.remove("rating-number-hover");
		ratingTwo.classList.add("bg-cl-hover-rating-selected");

		listOfRating[0].style.display = "none";
		for(var x = 2; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "none";
		}
	}else {
		ratingTwo.classList.remove("bg-cl-hover-rating-selected");
		ratingTwo.classList.add("bg-cl-normal-rating");
		ratingTwo.classList.add("rating-number-hover");

		for(var x = 0; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "block";
		}
	}
});

ratingThree.addEventListener('click', ()=>{
	if(!ratingThree.classList.contains("bg-cl-hover-rating-selected")) {
		ratingThree.classList.remove("bg-cl-normal-rating");
		ratingThree.classList.remove("rating-number-hover");
		ratingThree.classList.add("bg-cl-hover-rating-selected");

		listOfRating[0].style.display = "none";
		listOfRating[1].style.display = "none";
		for(var x = 3; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "none";
		}
	}else {
		ratingThree.classList.remove("bg-cl-hover-rating-selected");
		ratingThree.classList.add("bg-cl-normal-rating");
		ratingThree.classList.add("rating-number-hover");

		for(var x = 0; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "block";
		}
	}
});

ratingFour.addEventListener('click', ()=>{
	if(!ratingFour.classList.contains("bg-cl-hover-rating-selected")) {
		ratingFour.classList.remove("bg-cl-normal-rating");
		ratingFour.classList.remove("rating-number-hover");
		ratingFour.classList.add("bg-cl-hover-rating-selected");

		listOfRating[0].style.display = "none";
		listOfRating[1].style.display = "none";
		listOfRating[2].style.display = "none";
		for(var x = 4; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "none";
		}
	}else {
		ratingFour.classList.remove("bg-cl-hover-rating-selected");
		ratingFour.classList.add("bg-cl-normal-rating");
		ratingFour.classList.add("rating-number-hover");

		for(var x = 0; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "block";
		}
	}
});

ratingFive.addEventListener('click', ()=>{
	if(!ratingFive.classList.contains("bg-cl-hover-rating-selected")) {
		ratingFive.classList.remove("bg-cl-normal-rating");
		ratingFive.classList.remove("rating-number-hover");
		ratingFive.classList.add("bg-cl-hover-rating-selected");

		listOfRating[0].style.display = "none";
		listOfRating[1].style.display = "none";
		listOfRating[2].style.display = "none";
		listOfRating[3].style.display = "none";
		for(var x = 5; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "none";
		}
	}else {
		ratingFive.classList.remove("bg-cl-hover-rating-selected");
		ratingFive.classList.add("bg-cl-normal-rating");
		ratingFive.classList.add("rating-number-hover");

		for(var x = 0; x < listOfRating.length; x++) {
			listOfRating[x].style.display = "block";
		}
	}
});

/*
	2. Add the chosen rating on the 'congratulations screen' and check when a new rating is inserted or removed.
	3. Checks that all components do not have the class and if they do not then the questionnaire is sent without a specific note.
*/
var ctnRating = document.getElementById('ctn-rating');
var ctnCongratulations = document.getElementById('ctn-congratulations');

var ctnGetRating = document.getElementById('ctn-rating-selected');
var getRating = document.getElementById('qtn-selected');
var submit = document.getElementById('submit-rating');

var i = 0;

submit.addEventListener('click', ()=>{
	while(i < listOfRating.length) {
		if(listOfRating[i].classList.contains("bg-cl-hover-rating-selected")) {
			getRating.innerHTML = listOfRating[i].innerHTML;
			ctnRating.style.display = "none";
			ctnCongratulations.style.display = "block";
		}else {
			if(!listOfRating[0].classList.contains("bg-cl-hover-rating-selected")){
				if(!listOfRating[1].classList.contains("bg-cl-hover-rating-selected")){
					if(!listOfRating[2].classList.contains("bg-cl-hover-rating-selected")){
						if(!listOfRating[3].classList.contains("bg-cl-hover-rating-selected")){
							if(!listOfRating[4].classList.contains("bg-cl-hover-rating-selected")){
								ctnRating.style.display = "none";
								ctnGetRating.style.display = "none";
								ctnCongratulations.style.display = "block";
								break;
							}
						}		
					}
				}
			}
		}
		i++;
	}
});
const problems = [
	{
		question : "1) Make an array of numbers that are doubles of the first array",
		argument : "Argument: [2, 5, 100]",
		ctaID : "1",
		class : "btn1",
		answerID : "answer1",
		divID : "prob1"
	},
	{
		question : "2) Take an array of numbers and make them strings",
		argument : "Argument: [2, 5, 100]",
		ctaID : "2",
		class : "btn2",
		answerID : "answer2",
		divID : "prob2"
	},
	{
		question : "3) Capitalize each of an array of names",
		argument : "Argument: [\"john\", \"JACOB\", \"jinGleHeimer\", \"schmidt\"]",
		ctaID : "3",
		class : "btn3",
		answerID : "answer3",
		divID : "prob3"

	},
	{
		question : "4) Make an array of strings of the names",
		argument : "Argument: people array",
		ctaID : "4",
		class : "btn4",
		answerID : "answer4",
		divID : "prob4"

	},
	{
		question : "5) Make an array of strings of the names saying whether or not they can go to The Matrix. Person must be 20 or older.",
		argument : "Argument: people array",
		ctaID : "5",
		class : "btn5",
		answerID : "answer5",
		divID : "prob5"

	},
	{
		question : "6) Make an array of the names in h1s, and the ages in h2s",
		argument : "Argument: people array",
		ctaID : "6",
		class : "btn6",
		answerID : "answer6",
		divID : "prob6"

	}

];

//loop through problems array and put html onto the page.
problems.forEach(function(prob){
	const wrapperEl = document.getElementById("wrapper");
	wrapperEl.insertAdjacentHTML('beforeend', `
		<div id="${prob.divID}">
			<p>${prob.question}</p>
			<p>${prob.argument}</p>
			
			<input type='button' class="${prob.class}" id="${prob.ctaID}" value="Show Answer" />

			<p id="${prob.answerID}">
				<!-- answer appears here -->
			</p>
		</div>`)
});

//insert people array into the html at the beginning of div 4. 
const div4 = document.getElementById("prob4");
div4.insertAdjacentHTML('afterbegin', `
	<p>const people = [
		    {
		        name: "Trey Anastasio",
		        instrument: "guitar",
		        age: 80
		    },
		    {
		        name: "Mike Gordon",
		        instrument: "bass",
		        age: 2
		    },
		    {
		        name: "Page McConnell",
		        instrument: "keys",
		        age: 5
		    },
		    {
		        name: "John Fishman",
		        instrument: "drums",
		        age: 16
		    },
		    {
		        name: "Chris Kuroda",
		        instrument: "lights",
		        age: 100
		    }
		]; 
		</p>`)
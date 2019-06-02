//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
	const answer1El = document.getElementById("answer1");
  const btn1 = document.getElementById("1");
	const doubles = arr.map(el => el * 2);
	
  btn1.value === "Show Answer" ? btn1.value = "Hide Answer" : btn1.value = "Show Answer";

  answer1El.innerHTML === "[" + doubles + "]" ? 
     answer1El.innerHTML = " " 
    :answer1El.innerHTML = "[" + doubles + "]";
  
}


//2) Take an array of numbers and make them strings
function stringItUp(arr){
  const answer2El = document.getElementById("answer2");
  const btn2 = document.getElementById("2");
  const strings = arr.map(el => el.toString());
  
   btn2.value === "Show Answer" ? btn2.value = "Hide Answer" : btn2.value = "Show Answer";
   answer2El.innerHTML === '"' + strings + '"' ? answer2El.innerHTML = "" : answer2El.innerHTML = '"' + strings + '"';
}


//3) Capitalize each of an array of names
function capitalizeNames(arr){
  const answer3El = document.getElementById("answer3");
  const cap = arr.map(el => '"' + el[0].toUpperCase() + el.slice(1).toLowerCase() + '"');
  const btn3 = document.getElementById("3");

  btn3.value === "Show Answer" ? btn3.value = "Hide Answer" : btn3.value = "Show Answer";
  answer3El.innerHTML === "[" + cap + "]" ? answer3El.innerHTML = "" : answer3El.innerHTML = "[" + cap + "]";
}


const people = [
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

//4) Make an array of strings of the names
function namesOnly(people){
  const answer4El = document.getElementById("answer4");
	const person = people.map(person => '"' + person.name + '"');
  const btn4 = document.getElementById("4");
  
  btn4.value === "Show Answer" ? btn4.value = "Hide Answer" : btn4.value = "Show Answer";
  answer4El.innerHTML === "[" + person + "]" ?
    answer4El.innerHTML = " "
   :answer4El.innerHTML = "[" + person + "]";
}


//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function matrixNames(people){
	  const answer5El = document.getElementById("answer5");
    const matrix = people.map(person => person.age > 20 ? person.name + " can go to the Matrix"  :  person.name + "  is underage!!");
    const btn5 = document.getElementById("5");

    btn5.value === "Show Answer" ? btn5.value = "Hide Answer" : btn5.value = "Show Answer";
    answer5El.innerHTML === '"' + matrix + '"' ? answer5El.innerHTML = "" : answer5El.innerHTML = '"' + matrix + '"';
}


//6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(people){
  return people.map(person => "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>");
}


function initButtonListeners(){
  document.addEventListener('click', function(e){
      if(e.target.classList.contains('btn1')){
        doubleNumbers([2,5,100]);
      }else if(e.target.classList.contains('btn2')){
        stringItUp([2, 5, 100]);
      }else if(e.target.classList.contains('btn3')){
        capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
      }else if(e.target.classList.contains('btn4')){
        namesOnly(people);
      }else if(e.target.classList.contains('btn5')){
        matrixNames(people);
      }

      
  })
 
}


//call button listener function
function init(){
  initButtonListeners();
}
init();

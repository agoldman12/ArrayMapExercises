//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
	const answer1El = document.getElementById("answer1");
	const doubles = arr.map(el => el * 2);
	
    //display answer on the page
    answer1El.innerHTML === "[" + doubles + "]" ? 
     answer1El.innerHTML = " " 
    :answer1El.innerHTML = "[" + doubles + "]";
  
}


//2) Take an array of numbers and make them strings
function stringItUp(arr){
  const answer2El = document.getElementById("answer2");
  const strings = arr.map(el => el.toString());
  
   //display answer on the page
   answer2El.innerHTML === '"' + strings + '"' ? answer2El.innerHTML = "" : answer2El.innerHTML = '"' + strings + '"';
}


//3) Capitalize each of an array of names
function capitalizeNames(arr){
  const answer3El = document.getElementById("answer3");
  const cap = arr.map(el => '"' + el[0].toUpperCase() + el.slice(1).toLowerCase() + '"');

  //display answer on the page
  answer3El.innerHTML === "[" + cap + "]" ? answer3El.innerHTML = "" : answer3El.innerHTML = "[" + cap + "]";
}

//Raw Data
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
  
  //display answer on the page
  answer4El.innerHTML === "[" + person + "]" ?
    answer4El.innerHTML = " "
   :answer4El.innerHTML = "[" + person + "]";
}


//5) Make an array of strings of the names saying whether or not they can go to The Matrix
function matrixNames(people){
	  const answer5El = document.getElementById("answer5");
    const matrix = people.map(person => person.age > 20 ? person.name + " can go to the Matrix"  :  person.name + "  is underage!!");
    
    //display answer on the page
    answer5El.innerHTML === '"' + matrix + '"' ? answer5El.innerHTML = "" : answer5El.innerHTML = '"' + matrix + '"';
}


//6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(people){
  const answer6El = document.getElementById("answer6");
  const h1h2 = people.map(person => "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>");
  
  //display answer on the page
  answer6El.innerHTML === '"' + h1h2 + '"' ? answer6El.innerHTML = " " : answer6El.innerHTML = '"' + h1h2 + '"';
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
      }else if(e.target.classList.contains('btn6')){
        readyToPutInTheDOM(people);
      }

        //toggle button display
        const selectedBtnId = e.target.id;
        const btns = document.getElementsByTagName("input");
        for(i = 0; i < btns.length; i++){
            if(selectedBtnId === btns[i].id){
              btns[i].value === "Show Answer" ? btns[i].value = "Hide Answer" 
              : btns[i].value = "Show Answer";
            }
        }
      
  });
}


//call button listener function
function init(){
  initButtonListeners();
}
init();

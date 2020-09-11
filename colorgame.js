var colors,targetcolor,n=9;
var squaredisplays=document.getElementsByClassName("square")
var heading=document.getElementsByClassName("heading")[0];
var gamestatus=document.getElementById("gamestatus");
var newcolor=document.getElementById("newcolors");
var allbuttons=document.getElementsByClassName("allbuttons");
allbuttons[2].classList.add("selected");
init();


function init(){
addevents_to_grids();
startgame();
for(var i=0;i<allbuttons.length;i++){
	allbuttons[i].addEventListener("click",function(){
	allbuttons[0].classList.remove("selected");
	allbuttons[1].classList.remove("selected");
	allbuttons[2].classList.remove("selected");
	this.classList.add('selected');
	pastn=n;
	this.textContent==="Easy"? n=3:this.textContent==="Hard"? n=6 :n=9;
	startgame();
});
}

newcolor.addEventListener("click",function(){
	startgame();
});
}

function startgame(){
	reset();
	colors=[];
	generatecolorslist(n);
	targetcolor=colors[randomnum(n)];
	guesscolordisplay=document.getElementById("guesscolordisplay");
	guesscolordisplay.textContent=targetcolor.toUpperCase();
	assigncolors();
}
function generatecolorslist(k){
	while(k>0){
		colors.push(randomcolor());
		k--;
	}
}
function randomcolor(){
	return "rgb("+randomnum(256)+", "+randomnum(256)+", "+randomnum(256)+")";
}
function randomnum(num){
	return Math.floor(Math.random()*num);
}
function assigncolors(){
	for(var i=0;i<n;i++){
		squaredisplays[i].style.backgroundColor=colors[i];
	}
}
function turnallinto(){
	for (var i=0;i<n;i++){
		squaredisplays[i].style.backgroundColor=targetcolor;
	}
	
}
function reset(){
	for(var i=0;i<9;i++){
		squaredisplays[i].style.backgroundColor="black";
	}
newcolor.textContent="New Colors"
heading.style.backgroundColor="rgb(40,100,100)";
heading.style.color="white";
gamestatus.textContent="Click on any color";
}

function addevents_to_grids(){
	for(var i=0;i<9;i++){
		squaredisplays[i].addEventListener("click",function(){
			if(targetcolor===this.style.backgroundColor){
			turnallinto(); 
			newcolor.textContent="Play Again?";
			heading.style.backgroundColor=targetcolor;
			gamestatus.textContent="You Won!!";
			}
			else{
				this.style.backgroundColor="black";
				gamestatus.textContent="Try Again!!";
			}
		});
	}
}
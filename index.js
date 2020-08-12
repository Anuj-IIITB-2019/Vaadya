
for(var i=0;i<document.querySelectorAll(".tabla").length;i++)
{
	document.querySelectorAll(".tabla")[i].addEventListener("click",function(){
		var item = (this.innerHTML);

		makeSound(item);
		buttonAnimation(item);

		});
}

// document.addEventListener("keydown",function(event){

// 	console.log(event);
// 	alert("key was ppressed");
// });
// var audio = new Audio("sounds/a.mp3");
// 		audio.play();

document.addEventListener("keydown",function(event){

	makeSound(event.key);
	buttonAnimation(event.key);
});
function makeSound(key){

		switch(key){
			case "s":
				var sa = new Audio("sounds/c.mp3");
				sa.play();
			break;
			case "r":
				var re = new Audio("sounds/d.mp3");
				re.play();
			break;
			case "g":
				var ga = new Audio("sounds/e.mp3");
				ga.play();
			break;
			case "m":
				var ma = new Audio("sounds/f.mp3");
				ma.play();
			break;
			case "p":
				var pa = new Audio("sounds/g.mp3");
				pa.play();
			break;
			case "d":
				var da = new Audio("sounds/a.mp3");
				da.play();
			break;
			case "n":
				var ni = new Audio("sounds/b.mp3");
				ni.play();
			break;
			default:console.log(key);

		}
	}
function buttonAnimation(key)
{
	var activeButton = document.querySelector("."+key);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},90);
}
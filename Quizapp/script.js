var qus,a,b,c,board,choices,pos=0,cor=0;
var questions =[
["Shortcut key for undo","ctrl+z","ctrl+w","ctrl+c","a"],
["Shortcut key for close","ctrl+z","ctrl+w","ctrl+c","b"],
["Shortcut key for copy","ctrl+z","ctrl+w","ctrl+c","c"],
["Shortcut key for selectall","ctrl+z","ctrl+a","ctrl+c","b"],
["Shortcut key for rename","f2","f3","f4","a"]
]
function displayQuestion(){
	board = document.getElementById("board");
	if(pos >= questions.length){
		board.innerHTML = `<h2> you have got ${cor} out of ${questions.length} </h2>`;
		document.getElementById("status").innerHTML = "Quiz Completed";
		pos = 0;
		cor = 0;
		return false;		
	}
	document.getElementById("status").innerHTML = `Question ${pos+1} of ${questions.length}`;
	qus = questions[pos][0];
	a = questions[pos][1];
	b = questions[pos][2];
    c = questions[pos][3];
	board.innerHTML = "<h3>"+qus+"</h3>";
	board.innerHTML += "<label><input type='radio' name = 'choices' value='a'/> "+a+"</label>";
	board.innerHTML+= "<label><input type='radio' name = 'choices' value='b'/> "+b+"</label>";
	board.innerHTML+= "<label><input type='radio' name = 'choices' value='c'/> "+c+"</label>";
	board.innerHTML+=`<button onclick = "checkAnswer()">SubmitAnswer</button>`;
}
function checkAnswer()
{
	var choice;
	choices = document.getElementsByName("choices");
	for(var i=0;i<choices.length;i++){
		if(choices[i].checked){
			choice = choices[i].value;
			console.log(choice);
		}
		
	}
	if(choice == questions[pos][4])
		{
		cor++;
		}
	pos++;
		displayQuestion();
}

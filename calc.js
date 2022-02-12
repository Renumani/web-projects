 let  outputScreen = document.getElementById("userInput");
 function display(num){
	 outputScreen.value+=num;
 }
 function calculate(){
	 try{
	    outputScreen.value=eval(outputScreen.value);	 
	 }
	 catch(err){
		 alert("INVALID INPUT");
	 }
 }
 function clear(){
	outputScreen.value = " "; 
 }
 function delete(){
	 outputScreen.value=outputScreen.value.slice(0,-1);
 }

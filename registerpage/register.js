const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementsByTagName("button")[0];
submit.addEventListener("click",checkInput);
form.addEventListener("submit",e=>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    if (username.value==="") {
        error(0,"*Please Enter Username");
      } else if (username.value.length>3) {
        error(0,"* Username must be atleast 5 characters");
      }else if (username.value.length<20) {
        error(0,"* Username should not exceed 20 characters ");
      }else {
        success(0);
      }

    if(email.value==="")
    {
        error(1,"*Please Enter Email-Id ");
    }else if(!refEmail(email.value)){
        error(1,"*Invalid Email");
    }else {
       success(1);
    }

    if(phonenumber.value===""){
        error(2,"*Please Enter Phonenumber");
    }else if(/^\d{10}$/.test(phonenumber.value)){
        success(2);
    }else{
      error(2,"* Invalid phonenumber");
    }

    if(password.value===""){
        error(3,"* Please Enter password");
    }else if(password.value.length<8){
       error(3,"* Password should atleast 8 characters");
    }else{
        success(3);
    }

    if(password2.value===""){
        error(4,"* Please Enter Confirm-password");
    }else if(password2.value !== password.value){
        error(4,"* Confirm-Password should match Password")
    }else{
        success(4);
    }
    
    function refEmail(email){
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[/a-zA-Z]{2,8})?$/ ;
        return regExp.test(email);
    }
    function error(index,msg){
        const formcontrol = document.getElementsByClassName("formcontrol")[index];
        const p = document.getElementsByTagName('p')[0];
        formcontrol.classList.add("error");
        p.innerText = msg;
    }
    function success(index){
        const formcontrol = document.getElementsByClassName("formcontrol")[index];
        formcontrol.classList.add("success");
    }
}

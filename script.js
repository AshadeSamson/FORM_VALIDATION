// header background

var header = document.querySelector('.hd');
header.style.backgroundColor = "skyblue";

// header text-manipulation
var newtext = document.querySelector('.heading');
header.addEventListener('mouseover' , (changetext) => { newtext.textContent = "COMPLETE THE FORM!";});
header.addEventListener('mouseleave' , (origintext) => { newtext.textContent = "REGISTRATION FORM";})

var firstname = document.querySelector('#fname');
firstname.addEventListener('input' , checkname);
function checkname(e){
 
  if(typeof(firstname.value) != String){
    alert("invalid name!")
  }
  
}




//quick tour of promises

// header background

var header = document.querySelector('.hd');
header.style.backgroundColor = "#ff8206";

// header text-manipulation
var newtext = document.querySelector('.heading');
header.addEventListener('mouseover' , (changetext) => { newtext.textContent = "COMPLETE THE FORM!";});
header.addEventListener('mouseleave' , (origintext) => { newtext.textContent = "REGISTRATION FORM";})


// input value validation
var firstname = document.querySelector('#fname');
firstname.addEventListener('input' , (checkname) => {
  if(typeof firstname.value != string){
    alert("invalid name!");
  }
});



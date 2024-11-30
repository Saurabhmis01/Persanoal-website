let form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.querySelector('username').value
    console.log(username);

    let email = document.querySelector('email').value
    console.log(email);

    let subject = document.querySelector('subject').value
    console.log(subject);
})

let popup = document.getElementById("popup");
function openpopup() {
    popup.classList.add("open-popup");
}

function closepopup() {
    popup.classList.remove("open-popup");
}



function data(){

let name = document.getElementById('username').value;
let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;

if(name=="" || email=="" || subject==""){
    alert("All field are mandatory");
    return false;
}
}
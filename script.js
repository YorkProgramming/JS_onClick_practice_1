console.log("ready :)");

function message() {
    alert("Ninja was liked!");
}

function login(element) {
    console.log("hello")
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(el) {
    el.remove();
}
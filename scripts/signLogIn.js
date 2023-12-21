function hiddenToggle() {
    let login = document.getElementById("log");
    let signin = document.getElementById("sign");
    if (login.className.contains("hide") ) {
        login.classList.remove("hide");
        signin.classList.add("hide");
    } else {
        signin.classList.remove("hide");
        login.classList.add("hide");
    }
}
const btnLogin = document.querySelector("button");
btnLogin.classList.add("btn-login");

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", chandleSubmit);

function chandleSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if(email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const formObj = {
        email: email,
        password: password,
    }
    console.log(formObj);
    form.reset();
}


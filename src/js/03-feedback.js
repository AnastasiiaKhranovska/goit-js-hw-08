import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formDate= {
    email: "",
    message: ""
}
updateForm();

email.addEventListener('input', throttle(() => {
        formDate.email = email.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
    }, 500)
);

message.addEventListener('input', throttle (() => {
    formDate.message = message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
}, 500)
);

form.addEventListener("submit", handleSubmit)

function updateForm()  {
    if (localStorage.getItem(LOCALSTORAGE_KEY)) {
        formDate.email = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
        formDate.message = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
        email.value = formDate.email;
        message.value = formDate.message;
    } else {
        return;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if (email.value && message.value) {
    console.log(formDate);
    localStorage.clear();
    event.currentTarget.reset();
    formDate = {
        email: "",
        message: ""
    }
    } else {
        alert("All fields must be filled!")
    }
}

import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('input[name="message"]');
const LocalStorageKey = 'feedback-form-state';

form.addEventListener(
    'input',
    throttle(e => {
        const objectToSave = {email: email, message: message.value};
        localStorage.setItem(LocalStorageKey, JSON.stringify(objectToSave));
    }, 500)
);

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log({email: email, message: message.value});
    form.requestFullscreen();
    localStorage.removeItem(LocalStorageKey);
});

const load = key => {
    try {
        const serializedState = localStorege.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState;)
    } catch(error) {
        console.error('Get state error: ', error.message);
    }
};

const storageData = load(LocalStorageKey);
if (storageDate) {
    email.value = storage.email;
    message.value = storage.message;
}
import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('textarea');
const emailRef = document.querySelector('input');

//const LOCALSTORAGE_KEY = 'feedback-msg';
const LOCALSTORAGE_KEY1 = 'feedback-form-state';

const formData = {};

formRef.addEventListener('submit', onFormSubmit);

//textareaRef.addEventListener('input', throttle(onTextareaInput, 500));

formRef.addEventListener('input', throttle((e) => {
    
    formData[e.target.name] = e.target.value;
    console.log(formData)

    const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);


    localStorage.setItem(LOCALSTORAGE_KEY1, formDataJSON);
}, 500))


populateTextarea(), 500;

// function onTextareaInput (e) {
//     const value = e.target.value;
//     console.log(value)

//     localStorage.setItem(LOCALSTORAGE_KEY, value);

    
// }


function onFormSubmit (e) {
    e.preventDefault();

    e.currentTarget.reset();

    localStorage.removeItem(LOCALSTORAGE_KEY1);
    console.log(formData);
}


function populateTextarea () {
    const input = localStorage.getItem(LOCALSTORAGE_KEY1);
    const parsedInput = JSON.parse(input)

    console.log(parsedInput)
    if(parsedInput) {
        if(parsedInput.message) {
        textareaRef.value = parsedInput.message;
    }
        if (parsedInput.email) {
            emailRef.value = parsedInput.email;
        }
    }
        
    

}
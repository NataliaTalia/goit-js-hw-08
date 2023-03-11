import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('textarea');
const emailRef = document.querySelector('input');

//const LOCALSTORAGE_KEY = 'feedback-msg';
const LOCALSTORAGE_KEY1 = 'feedback-form-state';

const {email, message} = formRef.elements;

formRef.addEventListener('submit', onFormSubmit);



//textareaRef.addEventListener('input', throttle(onTextareaInput, 500));

formRef.addEventListener('input', throttle((e) => {
    
    

    const formDataJSON = JSON.stringify({email: email.value, message: message.value});
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

    if(email.value === '' || message.value === '') {
        alert("All fields must be filled")
    } else {

        console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY1)));
        e.currentTarget.reset();

        localStorage.clear();
        
    
    }

    
}


function populateTextarea () {
    const input = localStorage.getItem(LOCALSTORAGE_KEY1);
    const parsedInput = JSON.parse(input)
  
    if(parsedInput) {
        
   message.value = parsedInput.message;

    email.value = parsedInput.email;
    
    }
        
    

}
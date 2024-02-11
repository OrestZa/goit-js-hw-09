const formEl = document.querySelector('.feedback-form');
const btnEl = document.querySelector('.feedback-btn');

formEl.addEventListener('input', (event) => {
    const formValue = {
        email: formEl.elements.email.value.trim(),
        message: formEl.elements.message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
    // console.log(formValue);
})

const existingFormValue = localStorage.getItem('feedback-form-state');

if (existingFormValue) {
    const parsedValue = JSON.parse(existingFormValue);
    formEl.elements.email.value = parsedValue.email;
    formEl.elements.message.value = parsedValue.message;
}

formEl.addEventListener('submit', function (event) {
    event.prventDefault();

    const formValue = {
        email: formEl.elements.email.value,
        message: formEl.elements.message.value,
    }

    if (formValue.email && formValue.message) {
        console.log(formValue);
    }
})

function clearLockStor() {
    localStorage.removeItem('feedback-form-state');
}

btnEl.addEventListener('click', clearLockStor);
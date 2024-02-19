const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

function readFormData(form) {
    const emailValue = form.querySelector('.email-input').value.trim();
    const messageValue = form.querySelector('.message-input').value.trim();

    return {
        email: emailValue,
        message: messageValue
    };
}

form.addEventListener("input", (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
});

const rawData = localStorage.getItem(STORAGE_KEY);

if (rawData) {
    const data = JSON.parse(rawData);
    form.querySelector('.email-input').value = data.email;
    form.querySelector('.message-input').value = data.message;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = readFormData(form);
    console.log(data.email, data.message);
      localStorage.removeItem(STORAGE_KEY);
     form.reset();
})

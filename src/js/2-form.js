const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('.email-input');
const messageInput = form.querySelector('.message-input');

function readFormData() {
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    return {
        email: emailValue,
        message: messageValue
    };
}

form.addEventListener("input", () => {
    const data = readFormData(form);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
});

const rawData = localStorage.getItem(STORAGE_KEY);

if (rawData) {
    const data = JSON.parse(rawData);
    emailInput.value = data.email;
    messageInput.value = data.message;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const data = readFormData(form);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log(data);
    // localStorage.removeItem(STORAGE_KEY);
    form.reset();
   
});

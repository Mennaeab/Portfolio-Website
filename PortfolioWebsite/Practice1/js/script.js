const helloText = "Hello!";
const welcomeText = "Welcome to my portfolio!";
const helloTextElement = document.getElementById('helloText');
const welcomeTextElement = document.getElementById('welcomeText');
// Index to track the current character being typed
let helloIndex = 0;
let welcomeIndex = 0;

// Function to display the typing animation for "Hello!"
function typeHello() {
    if (helloIndex < helloText.length) {
        helloTextElement.textContent += helloText.charAt(helloIndex);
        helloIndex++;
        setTimeout(typeHello, 100); 
    }
}

// Function to display the typing animation for "Welcome to my portfolio!"
function typeWelcome() {
    if (welcomeIndex < welcomeText.length) {
        welcomeTextElement.textContent += welcomeText.charAt(welcomeIndex);
        welcomeIndex++;
        setTimeout(typeWelcome, 80); 
    }
}

window.onload = function() {
    typeHello();
    setTimeout(typeWelcome, 1000); 
};

const hoverText = document.querySelector('.hover-effect');
        hoverText.addEventListener('mouseenter', function() {
            this.style.color = 'pink';
        });
        hoverText.addEventListener('mouseleave', function() {
            this.style.color = 'white';
        });

// ========== Event Handling ========== //

// Button click event
document.getElementById('click-button').addEventListener('click', function() {
    const output = document.getElementById('click-output');
    output.textContent = "Button was clicked! 🎉";
    output.style.color = "green";
});

// Hover effect
const hoverArea = document.getElementById('hover-area');
hoverArea.addEventListener('mouseenter', function() {
    this.style.fontWeight = 'bold';
    this.style.fontSize = '1.2em';
});

hoverArea.addEventListener('mouseleave', function() {
    this.style.fontWeight = 'normal';
    this.style.fontSize = '1em';
});

// Keypress detection
document.getElementById('keypress-input').addEventListener('keyup', function(e) {
    document.getElementById('keypress-output').textContent = 
        `You pressed: ${e.key} (Key code: ${e.keyCode})`;
});

// Secret double-click
document.getElementById('secret-area').addEventListener('dblclick', function() {
    this.innerHTML = '<p>🎉 You found the secret! 🎉</p>';
    this.style.backgroundColor = '#ffeb3b';
    this.style.padding = '20px';
    this.style.textAlign = 'center';
    this.style.fontWeight = 'bold';
});

// ========== Interactive Elements ========== //

// Color changer
const colors = ['#ff5733', '#33ff57', '#3357ff', '#f033ff', '#ff33f0'];
let colorIndex = 0;
document.getElementById('color-button').addEventListener('click', function() {
    const display = document.getElementById('color-display');
    colorIndex = (colorIndex + 1) % colors.length;
    display.style.backgroundColor = colors[colorIndex];
    display.textContent = colors[colorIndex];
    display.style.color = 'white';
    display.style.display = 'flex';
    display.style.alignItems = 'center';
    display.style.justifyContent = 'center';
});

// Image gallery
const images = document.querySelectorAll('.gallery-container img');
let currentImage = 0;

document.getElementById('next-btn').addEventListener('click', function() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
});

document.getElementById('prev-btn').addEventListener('click', function() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add('active');
});

// Accordion
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
        this.classList.toggle('active');
    });
});

// ========== Form Validation ========== //

const form = document.getElementById('validation-form');

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    const error = document.getElementById('name-error');
    if (this.value.length < 2) {
        error.textContent = "Name must be at least 2 characters";
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const error = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(this.value)) {
        error.textContent = "Please enter a valid email";
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const error = document.getElementById('password-error');
    if (this.value.length < 8) {
        error.textContent = "Password must be at least 8 characters";
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    let isValid = true;
    
    // Name validation
    if (document.getElementById('name').value.length < 2) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Password validation
    if (document.getElementById('password').value.length < 8) {
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) {
        e.preventDefault();
        alert("Please fix the errors before submitting.");
    } else {
        alert("Form submitted successfully!");
    }
});
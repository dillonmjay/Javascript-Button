// Create a button element
const button = document.createElement('button');

// Set the text of the button
button.textContent = 'Go to Website';

// Add styles to the button (optional)
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.color = 'white';
button.style.backgroundColor = 'green';
button.style.border = 'none';
button.style.borderRadius = '50px';
button.style.cursor = 'pointer';

// Add an event listener to the button
button.addEventListener('click', () => {
  // Redirect to the desired website
    window.location.href = 'https://www.dillonmjay.com';
});

// Append the button directly to the body
document.body.appendChild(button);

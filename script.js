// Create a button element
const button = document.createElement('button');

// Set the text of the button
button.textContent = 'Go to Website';

// Add styles to the button using JavaScript
button.style.position = 'fixed';
button.style.bottom = '20px'; // Distance from the bottom
button.style.right = '20px'; // Distance from the right
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.color = 'white';
button.style.backgroundColor = 'green';
button.style.border = 'none';
button.style.borderRadius = '50px';
button.style.cursor = 'pointer';
button.style.zIndex = '1000'; // Ensure it stays on top of other elements

// Add an event listener to the button
button.addEventListener('click', () => {
  // Redirect to the desired website
 window.location.href = 'https://www.dillonmjay.com';
});

// Append the button directly to the body
document.body.appendChild(button);

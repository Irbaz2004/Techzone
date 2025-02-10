const newsletter = document.getElementById('newsletter1');
const submitbutton = document.getElementById('submitbutton');

// Add event listener to the submit button
submitbutton.addEventListener('click', function() {
    // Get the value of the input field
    const email = newsletter.value;
    
    // Validate the email format
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
    } else {
        alert('Thank you for subscribing!');
    }
    // Clear the input field after submission
    newsletter.value = '';
});
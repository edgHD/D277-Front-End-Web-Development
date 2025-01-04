// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    // Get the values of the email and confirm email fields
    var email = document.getElementById('inputEmail').value;
    var confirmEmail = document.getElementById('inputEmailConf').value;
    
    // Check if the email and confirm email values match
    if (email !== confirmEmail) {
        alert('Email and Confirm Email do not match');
        event.preventDefault(); // Prevent the form from submitting
    } else {
        alert('Message Sent!');
    }
});
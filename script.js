// Initialize EmailJS with your public key
emailjs.init("4JsSEOmnRIuF8nEm4"); // المفتاح العام الخاص بك

// Get the form element
const form = document.getElementById('contact-form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email data
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_ctd572i', 'template_oz5pu9o', templateParams)
        .then(function(response) {
            document.getElementById('response-message').innerText = 'تم إرسال الرسالة بنجاح!';
            form.reset();
        }, function(error) {
            document.getElementById('response-message').innerText = 'حدث خطأ، يرجى المحاولة لاحقاً.';
        });
});

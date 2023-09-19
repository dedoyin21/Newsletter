    const form = document.querySelector('#newsletter-form');
    const subscribeButton = document.querySelector('#subscribe-button');

    // Attach an event listener to the form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('A confirmation email has been sent. Please check your inbox to confirm your subscription.');


        form.reset();
    });


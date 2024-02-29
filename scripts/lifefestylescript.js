const lifestyleForm = document.querySelector(".lifestyle_form");
const lifestylesubmitBtn = document.querySelector(".lifestyle_form .submit_lifeStyle");

// get needed data from email JS
const lifestylepublicKey = "fJBzB0lODvpNMppbY";
const lifestyleserviceID =  "service_8irmr8h";
const lifestyletemplateID = "template_xoo5ywf";

// initialize email JS with public key


// add submit event to the form
lifestyleForm.addEventListener("submit", e => {
    emailjs.init(lifestylepublicKey);
    // prevent form default behaviour
    e.preventDefault();

    // Change button text
    lifestylesubmitBtn.innerText = "Just A Moment...";

    // get all input field values
    const inputFields = {
        name: lifestyleForm.querySelector('.lifestyle_form .username').value,
        // email: lifestyleForm.querySelector('.lifestyle_form .email_adress').value,
        location: lifestyleForm.querySelector('.lifestyle_form .location').value,
        tittle: lifestyleForm.querySelector('.lifestyle_form .tittle').value,
        phoneNumber: lifestyleForm.querySelector('.lifestyle_form .phoneNumber').value,
        lifestyle_message: lifestyleForm.querySelector('.lifestyle_form .lifestyle_message').value
    };

    // Get the image file
    const imageFile = lifestyleForm.querySelector('.lifestyle_form .image').files[0];
    
    // Prepare the image data to be sent as an attachment
    if (imageFile) {
        // Assuming the image is hosted somewhere accessible online
        // Replace 'YOUR_IMAGE_URL' with the actual URL of the image
        inputFields['image'] = imageFile.value;
    }

    // send the email (adding service , template id and input fields)
    emailjs.send(lifestyleserviceID, lifestyletemplateID, inputFields)
    .then(() => {
        // changing button text
        lifestylesubmitBtn.innerText = "Posted Successfully, Waiting Aproval..";
        
        // let clear all inputs 
        lifestyleForm.reset();

        setTimeout(() => {
            lifestylesubmitBtn.innerText = "Submit";
        }, 2000);

    }, (error) => {
        // console error
        console.log(error);
        // change button text for error
        lifestylesubmitBtn.innerText = "Something went wrong";

        // clear inputs after error
        lifestyleForm.reset();

        setTimeout(() => {
            lifestylesubmitBtn.innerText = "Submit";
        }, 2000);
    });
});

// validation
function validateForm() {
    var name = document.getElementById("user_name").value;
    var email = document.getElementById("user_email").value;

    if (name === "" || email === "") {
        alert("Name and email are required fields.");
        return false;
    }
    return true;
}
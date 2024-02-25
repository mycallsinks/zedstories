const partnerForm = document.querySelector(".partner_form");
const partnersubmitBtn = document.querySelector(".partner_form .submit_partner");

// get needed data from email JS
const partnerpublicKey = "fJBzB0lODvpNMppbY";
const partnerserviceID =  "service_8irmr8h";
const partnertemplateID = "template_6ynadah";
// initialize email JS with public key


// add submit event to the form
partnerForm.addEventListener("submit", e => {
    emailjs.init(partnerpublicKey);
    // prevent form default behaviour
    e.preventDefault();

    // Change button text
    partnersubmitBtn.innerText = "Just A Moment...";

    // get all input field values
    const inputFields = {
        fullnames: partnerForm.querySelector('.partner_form .username').value,
        location: partnerForm.querySelector('.partner_form .location').value,
        typegirlorboy: partnerForm.querySelector('.partner_form .typegirlorboy').value,
        email_adress: partnerForm.querySelector('.partner_form .email_adress').value,
        phonenumber: partnerForm.querySelector('.partner_form .phoneNumber').value,
        partner_message: partnerForm.querySelector('.partner_form .partner_message').value
    };

    // Get the image files
    const imageFiles = partnerForm.querySelector('.partner_form .images').files;
    
    // Prepare the image data to be sent as an attachment
    if (imageFiles.length > 0) {
        // Assuming the images are hosted somewhere accessible online
        // You can loop through the files and construct URLs or use other methods to handle multiple images
        // For demonstration, let's assume only one image is sent
        const imageUrl = 'YOUR_IMAGE_URL'; // Replace 'YOUR_IMAGE_URL' with the actual URL of the image
        inputFields['images'] = imageUrl;
    }

    // send the email (adding service, template id, and input fields)
    emailjs.send(partnerserviceID, partnertemplateID, inputFields)
    .then(() => {
        // changing button text
        partnersubmitBtn.innerText = "Message Sent Successfully";
        
        // let clear all inputs 
        partnerForm.reset();

        setTimeout(() => {
            partnersubmitBtn.innerText = "Submit";
        }, 2000);

    }, (error) => {
        // console error
        console.log(error);
        // change button text for error
        partnersubmitBtn.innerText = "Something went wrong";

        // clear inputs after error
        partnerForm.reset();

        setTimeout(() => {
            partnersubmitBtn.innerText = "Submit";
        }, 2000);
    });
});

// validation
// function validateForm() {
//     var name = document.getElementById("user_name").value;
//     var email = document.getElementById("user_email").value;

//     if (name === "" || email === "") {
//         alert("Name and email are required fields.");
//         return false;
//     }

//     return true;
// }

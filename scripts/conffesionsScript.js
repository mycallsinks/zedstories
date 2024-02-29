// confession form

const contactForm = document.querySelector(".conffesions_form");
const confesssubmitBtn = document.querySelector(".conffesions_form .submitbtn");

// get needed data from email JS

const conffesspublicKey = "BjNDkXX8LO4fGP2Q6";
const conffessserviceID =  "service_35h9udk";
const conffesstemplateID = "template_8buoqgv";

// initialize email JS with public key

// add submit event to the form
contactForm.addEventListener("submit", e => {
    emailjs.init(conffesspublicKey);

    // prevent form default behaviour
    e.preventDefault();

    // Change button text
    confesssubmitBtn.innerText = "Just A Moment...";

    // get all input field values
    const inputFields = {
        name: contactForm.querySelector('.conffesions_form .username').value,
        // email: contactForm.querySelector('.conffesions_form .email_address').value,
        location: contactForm.querySelector('.conffesions_form .location').value,
        message: contactForm.querySelector('.conffesions_form .message').value
    };

    // Get the image file
    // const imageFile = contactForm.querySelector('.conffesions_form .images').files[0];
    
    // Prepare the image data to be sent as an attachment
    // if (imageFile) {
    //     inputFields['image'] = imageFile;
    // }

    // send the email (adding service , template id and input fields)
    emailjs.send(conffessserviceID, conffesstemplateID, inputFields)
    .then(() => {
        // changing button text
        confesssubmitBtn.innerText = "Conffessed Successfully, Waiting Aproval.. ";
        
        // let clear all inputs 
        contactForm.reset();

        setTimeout(() => {
            confesssubmitBtn.innerText = "Send";
        }, 2000);

    }, (error) => {
        // console error
        console.log(error);
        // change button text for error
        confesssubmitBtn.innerText = "Something went wrong";

        // clear inputs after error
        contactForm.reset();

        setTimeout(() => {
            confesssubmitBtn.innerText = "Send Again";
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


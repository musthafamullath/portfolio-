    let nameEror = document.getElementById('name-error');
    let emailEror = document.getElementById('email-error');
    let messageEror = document.getElementById('message-error');
    let submitEror = document.getElementById('submit-error');

function validatename(){
    

    let name = document.getElementById('contact-name').value;

    if(name.trim() === ''){
        nameEror.innerHTML = '*name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameEror.innerHTML = 'write full name';
        return false;
    }
    nameEror.innerHTML = 'perfect';
    return true


}


function validatEmail(){

    let email = document.getElementById('contact-email').value;




    if(email.trim() === ''){
        emailEror.innerHTML ='*Email is Required'
        return false;
    }

    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        emailEror.innerHTML = 'Email invalid';
        return false;
    }
  
    emailEror.innerHTML = 'perfect'; // Only set 'Valid' when the email is valid
    return true;



}
function validatemessage(){

    let message = document.getElementById('contact-message').value; 
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageEror.innerHTML = left + ' more charector required';
        return false;
    }

    messageEror.innerHTML = 'perfect '; 
    return true;
}

function validForm(){
    if(!validatename() || !validatEmail() || !validatemessage()){
        submitEror.style.display = 'block';
        submitEror.innerHTML = 'please fix the error to submit';
        setTimeout(function(){submitEror.style.display = 'none';},3000);
        return false;
    }
    alert('Form submitted successfully!'); // Display an alert to the user
    return true;
}
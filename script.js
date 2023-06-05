 
  
  $('input[type=submit]').on('click', function(e){
    if (document.getElementById("regular-checkbox").checked){
        $('.optin').removeClass('alert');
        $('.regular-checkbox').removeClass('alert2');
  } else {  
  e.preventDefault();   
  $('.optin').addClass('ahashakeheartache');  
  $('.optin').addClass('alert');
  $('.regular-checkbox').addClass('alert2');
  }
  });
    

$('.optin').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
  $('.optin').delay(200).removeClass('ahashakeheartache');
});

$('input[type=checkbox]').on('click', function(e){
  $('.optin').removeClass('alert');
  $('.regular-checkbox').removeClass('alert2');
});


function scrollToForm() {
    // Get the contact form section element
    var contactFormSection = document.querySelector(".contact-form-section");
  
    // Scroll to the bottom of the contact form section
    contactFormSection.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  
  function submitForm() {
    // Get references to the input fields and success message element
    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var companyInput = document.getElementById("company");
    var roleInput = document.getElementById("role");
    var commentsInput = document.getElementById("comments");
    var successMessage = document.getElementById("success-message");
  
    // Clear the input field values
    firstNameInput.value = "";
    lastNameInput.value = "";
    companyInput.value = "";
    roleInput.value = "";
    commentsInput.value = "";
  
    // Display the success message
    successMessage.style.display = "block";
  }
  
  
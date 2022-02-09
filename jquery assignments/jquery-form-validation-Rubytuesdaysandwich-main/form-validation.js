// Write your form validation code here
$(function () {
  $("form[name='basic-form']").validate({
    rules: {
      firstname: "required",
      lastname: "required",

      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    message: {
      firstname: "firstname is required",
      lastname: "lastname is required",
      email: "please enter a valid email",
      phone: "please enter a valid phone number",
      message: {
        required: "please enter a brief message",
        minlenght: "needs to be 10 characters or more"
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });
});

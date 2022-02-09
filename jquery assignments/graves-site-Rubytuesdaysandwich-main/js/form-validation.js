// Write your form validation code here
//contact page
$(function () {
  $("form[name='contact']").validate({
    rules: {
      name: "required",

      subject: {
        required: true,
        minlength: 1
      },

      emailAddress: {
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
      name: "First and last name",
      emailAddress: "please enter a valid email",
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
//sign in
$(function () {
  $("form[name='sign-in']").validate({
    rules: {
      email: {
        email: "required",
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },

    message: {
      email: "please enter a valid email adress",
      password: "please use a valid password to login",
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

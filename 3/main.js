const nameValidator = /^([a-zA-Z]){1,30}$/;
const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
const passwordValidator =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
$("#requirment1 , #requirment2 , #requirment3, #requirment4").hide();
const checkItems = () => {
  if (!$("#firstName").val().trim().match(nameValidator)) {
    $("#requirment1").show();
  }

  if (!$("#lastName").val().trim().match(nameValidator)) {
    $("#requirment2").show();
  }

  if (!$("#email").val().trim().match(emailValidator)) {
    $("#requirment3").show();
  }

  if (!$("#password").val().trim().match(passwordValidator)) {
    $("#requirment4").show();
  }
};

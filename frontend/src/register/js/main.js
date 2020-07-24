function checkPasswordMatch() {
    var password = $("#your_pass1").val();
    var confirmPassword = $("#your_pass2").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("Passwords do not match!!!");
    else
        $("#divCheckPasswordMatch").html("Passwords match.");
}

$(document).ready(function () {
   $("#your_pass2").keyup(checkPasswordMatch);
});
function sendMessage() {
  var username = document.getElementById("usernameBox");
  var message = document.getElementById("messageBox");
  username.value = username.value.trim();
  message.value = message.value.trim();

  if (username.value != "" && message.value != "") {
    document.getElementById("messages").innerHTML +=
      username.value + ": " + message.value + "<br>";
    message.value = "";
  }

  message.focus();
}

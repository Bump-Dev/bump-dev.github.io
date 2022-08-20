var messages = document.getElementById("messages");
function sendMessage() {
  var username = document.getElementById("usernameBox");
  var message = document.getElementById("messageBox");
  message.value = message.value.trim();
  if (message.value != "") {
    document.getElementById("messages").innerHTML +=
      username.value + ": " + message.value + "<br>";
    message.value = "";
  }
  message.focus();
}

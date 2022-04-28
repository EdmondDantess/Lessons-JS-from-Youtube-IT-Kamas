function addErrorClick() {
    var errorId = document.getElementById("send-button");
    errorId.className = "error-button";
}


var sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", addErrorClick);
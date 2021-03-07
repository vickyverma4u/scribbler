// Get the modal
var modal = document.getElementById("signup-modal");

// Get the button that opens the modal
var btn = document.getElementById("btn-signup");

// Get the <span> element that closes the modal
var close = document.getElementById("btn-signup-close");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
  let elements = document.querySelectorAll(".errortext");
  let triangles = document.querySelectorAll(".triangle");

  for (let i = 0; i < 4; i++) {
    elements[i].style.visibility = "hidden";
    triangles[i].style.visibility = "hidden";
  }
};

// Get the modal
var modal2 = document.getElementById("signin-modal");

// Get the button that opens the modal
var btn2 = document.getElementById("btn-signin");

// Get the <span> element that closes the modal
var close2 = document.getElementById("btn-signin-close");

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

close2.onclick = function () {
  modal2.style.display = "none";
};

function openCreatePostModal() {
  var modal3 = document.getElementById("create-post-modal");
  modal3.style.display = "block";
}

function closeCreatePostModal() {
  var modal3 = document.getElementById("create-post-modal");
  modal3.style.display = "none";
}

function signUpSubmit() {
  let formElement = document.getElementById("name").value;
  let count = 0;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[0].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[0].style.visibility = "visible";
  }

  formElement = document.getElementById("username").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[1].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[1].style.visibility = "visible";
  }

  formElement = document.getElementById("password").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[2].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[2].style.visibility = "visible";
  }

  formElement = document.getElementById("confirm-password").value;
  if (formElement.length === 0) {
    count++;
    document.getElementsByClassName("errortext")[3].style.visibility =
      "visible";
    document.getElementsByClassName("triangle")[3].style.visibility = "visible";
  }

  if (count === 0) {
    modal.style.display = "none";
    let elements = document.querySelectorAll(".errortext");
    let triangles = document.querySelectorAll(".triangle");

    for (let i = 0; i < 4; i++) {
      elements[i].style.visibility = "hidden";
      triangles[i].style.visibility = "hidden";
    }
  }
}

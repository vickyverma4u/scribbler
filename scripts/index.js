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

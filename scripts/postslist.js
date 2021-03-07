let targetElement;

function openDeletePostModal(e) {
  targetElement = e.parentElement.parentElement.parentElement.parentElement;
  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "block";
}

function closeDeletePostModal() {
  targetElement = null;
  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "none";
}

function deletePost() {
  document.getElementById("delete-post-modal").style.display = "none";
  targetElement.remove();
}

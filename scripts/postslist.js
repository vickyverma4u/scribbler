sessionStorage.clear();
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

function showFullPost(e) {
  let post = e.parentElement.parentElement.parentElement;
  let userName = post.getElementsByTagName("p")[0].innerHTML;
  let title = post.getElementsByTagName("p")[1].innerHTML;
  let postContent = post.getElementsByTagName("p")[2].innerHTML;
  sessionStorage.setItem("title", title);
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("postContent", postContent);

  window.location.href = "../html/post.html";
}

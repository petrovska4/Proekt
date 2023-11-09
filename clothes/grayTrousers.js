let likes = JSON.parse(localStorage.getItem('likes')) || 0;

function like() {
  likes += 1;
  localStorage.setItem('likes', JSON.stringify(likes));
  document.getElementById('likeCount').innerText = "Likes: " + likes;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('likeCount').innerText = "Likes: " + likes;
});
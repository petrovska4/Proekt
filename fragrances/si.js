let likesF = JSON.parse(localStorage.getItem('likesF')) || 0;

function like() {
  likesF += 1;
  localStorage.setItem('likesF', JSON.stringify(likesF));
  document.getElementById('likeCount').innerText = "Likes: " + likesF;
}

function changePrice() {
  var size = document.getElementById('size').value;
  if (size == "30ml") {
    document.getElementById('price').innerText = "USD 220.00";
  } else if (size == "50ml") {
    document.getElementById('price').innerText = "USD 360.00";
  } else {
    document.getElementById('price').innerText = "USD 450.00";
  }
}

function addReview(e) {
  const tag = document.createElement("p");
  const text = document.createTextNode(e.target.value);
  tag.appendChild(text);
  document.getElementById('reviews').appendChild(tag);
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('likeCount').innerText = "Likes: " + likesF;
  document.getElementById('price').innerText = "USD 220.0";
  const input = document.getElementById("addReview");
  input.addEventListener("keydown", function(e) {
    if ( e.key == 'Enter' ) {
      addReview(e);
    }
  });
  
});

let likesF = JSON.parse(localStorage.getItem('likesF')) || 0;
let price = localStorage.getItem('priceSi') || '220';
var reviewsCount = 0;
var selectedValue;

function like() {
  likesF += 1;
  localStorage.setItem('likesF', JSON.stringify(likesF));
  document.getElementById('likeCount').innerText = "Likes: " + likesF;
}

function changePrice() {
  selectedValue = document.getElementById('sizeSi').value;
  if (selectedValue == "30ml") {
    document.getElementById('price').innerText = "USD 220.00";
    localStorage.setItem('priceSi', '220');
  } else if (selectedValue == "50ml") {
    document.getElementById('price').innerText = "USD 360.00";
    localStorage.setItem('priceSi', '360');
  } else {
    document.getElementById('price').innerText = "USD 450.00";
    localStorage.setItem('priceSi', '450');
  }
}

function addReview(e) {
  const tag = document.createElement("p");
  const text = document.createTextNode(e.target.value);
  const date = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' });
  tag.appendChild(document.createTextNode("Date: " + date));
  tag.appendChild(document.createElement('br'));
  tag.appendChild(text);

  const div = document.createElement("div");
  div.style.margin = "10px 0px 0px 0px";
  div.appendChild(tag);

  reviewsCount += 1;
  
  document.getElementById('reviews').appendChild(div);

  document.getElementById('reviewsCount').innerText = "Cutomer reviews (" + reviewsCount + ")"; 

  document.getElementById('addReview').value = '';
}

function addItem() {
  var tag = document.createElement('div');

  var img = document.createElement('img');
  img.src = "fragrances1.jpg";
  img.style.height = "150px";
  img.style.width = "auto";

  var priceSi = localStorage.getItem('priceSi');

  var text1 = document.createTextNode("Smells like winter spirit");
  var text2 = document.createTextNode("Price: " + priceSi + ".00");
  var text3 = document.createTextNode("Size: " + selectedValue);

  var br1 = document.createElement('br');
  var br2 = document.createElement('br');
  var br3 = document.createElement('br');

  var exit = document.createElement('button');
  exit.appendChild(document.createTextNode("X"));
  
  tag.appendChild(img);
  tag.appendChild(br3);
  tag.appendChild(text1);
  tag.appendChild(exit);
  tag.appendChild(br1);
  tag.appendChild(text2);
  tag.appendChild(br2);
  tag.appendChild(text3);

  document.getElementById('addHere').appendChild(tag);
  showCartDialog();

  exit.addEventListener('click', function() {
    tag.remove();
  });
}

function showCartDialog() {
  document.getElementById('cartSi').showModal();
}
function closeCartDialog() {
  document.getElementById('cartSi').close();
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('likeCount').innerText = "Likes: " + likesF;
  document.getElementById('price').innerText = "USD 220.00";
  document.getElementById('reviewsCount').innerText = "Cutomer reviews (" + reviewsCount + ")";

  document.getElementById('sizeSi').addEventListener('change', changePrice);
  document.getElementById('addSi').addEventListener('click', addItem);
  document.getElementById('like').addEventListener('click', like);
  document.getElementById('buyNow').addEventListener('click', closeCartDialog);

  const input = document.getElementById("addReview");
  input.addEventListener("keydown", function(e) {
    if ( e.key == 'Enter' ) {
      addReview(e);
    }
  });
  
});

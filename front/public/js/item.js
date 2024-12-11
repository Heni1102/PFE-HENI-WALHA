document.getElementById('range-picker').addEventListener('click', function(e) {
    var sizeList = document.getElementById('range-picker').children;
    for (var i = 0; i <= sizeList.length - 1; i++) {
      console.log(sizeList[i].classList);
      if (sizeList[i].classList.contains('active')) {
        sizeList[i].classList.remove('active');
      }
    }
    e.target.classList.add('active');
  })
  
  document.getElementById('color-a').addEventListener('click', function() {
    document.getElementById('color-overlay').style.transform = 'translateX(-0.5px)';
    document.getElementById('background-element').style.backgroundColor = '#333';
    document.getElementById('highlight-overlay').style.opacity = '1';
    document.getElementById('highlight-overlay-mobile').style.opacity = '1';
    document.getElementById('color-name').innerHTML = "BLACK / 050";
    document.getElementById('color-name').style.color = '#333'
  
  })
  document.getElementById('color-b').addEventListener('click', function() {
    document.getElementById('color-overlay').style.transform = 'translateX(45px)';
    document.getElementById('background-element').style.backgroundColor = '#457';
    document.getElementById('highlight-overlay').style.opacity = '0';
    document.getElementById('highlight-overlay-mobile').style.opacity = '0';
    document.getElementById('color-name').innerHTML = "BLUES / 2V5";
    document.getElementById('color-name').style.color = '#457'
  })
  // Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
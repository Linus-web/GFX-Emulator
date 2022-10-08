// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("draw");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.classList.toggle("hidden")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.toggle("hidden")
}

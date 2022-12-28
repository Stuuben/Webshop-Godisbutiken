// Get the modal
let modalForm = document.getElementById("myModal") as HTMLDivElement;

// Get the button that opens the modal
let modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let modalSpan = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modalBtn.addEventListener("click", () => modalForm.style.display = "block");

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener("click", () => modalForm.style.display = "none");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalForm) {
    modalForm.style.display;
  }
};

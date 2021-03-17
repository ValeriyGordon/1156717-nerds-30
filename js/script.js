const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#modal-closed");
const openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

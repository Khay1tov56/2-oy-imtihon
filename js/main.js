var elModalOpenButton = document.querySelector(".site-bottom__index");
var elModal = document.querySelector(".modals");

elModalOpenButton.addEventListener("click", function() {
    elModal.classList.add("modal-show")
})

var elModalCloseButton = document.querySelector(".modal-show__close");
elModalCloseButton.addEventListener("click", function () {
    elModal.classList.remove("modal-show");
})


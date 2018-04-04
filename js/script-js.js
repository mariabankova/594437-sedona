var link = document.querySelector(".modal-form-open");
var popup = document.querySelector(".hotel-search");

  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("visually-hidden");
    popup.classList.toggle("modal-animation");
    

  });
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".subscribeSubmitButton");
const closeBtn = document.querySelector(".modalClosingButton");

openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

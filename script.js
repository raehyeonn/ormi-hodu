const pageUp = document.querySelector(".pageUp__button");

pageUp.addEventListener("mouseover", function(){
    pageUp.setAttribute("src","image/icon_scrollTopButton_after.svg");
});

pageUp.addEventListener("mouseout", function(){
    pageUp.setAttribute("src","image/icon_scrollTopButton_before.svg");
});

pageUp.addEventListener("click", function() {
    window.scrollTo(0, 0);
});



const openBtn = document.querySelector(".button-modalopening");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__button-closing");

openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if(event.target === modal) {
        modal.style.display = "none";
    }
});
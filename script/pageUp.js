const pageUp = document.querySelector(".pageUpButton");

pageUp.addEventListener("mouseover", function(){
    pageUp.setAttribute("src","image/icon_scrollTopButton_after.svg");
});

pageUp.addEventListener("mouseout", function(){
    pageUp.setAttribute("src","image/icon_scrollTopButton_before.svg");
});

pageUp.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
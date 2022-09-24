const stickyNav = document.querySelector(".sticky-box-nav");

stickyNav.addEventListener("click", (e) =>
{
    let navEle = e.target.closest(".sticky-box-nav-item");
    navEle.classList.toggle("click-show");
})

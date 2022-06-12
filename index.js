// Menu Btn Grabbing over here
const menuBtn = document.querySelector("#MenuBtn");

menuBtn.addEventListener("click", () => {
    let rightNav = document.querySelector(".navRightMenu");
    if (!rightNav.classList.contains("displayMenu")) {
        rightNav.style.display = "block";
    } else rightNav.style.display = "none";
    rightNav.classList.toggle("displayMenu");
})
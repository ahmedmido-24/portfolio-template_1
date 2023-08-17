let styleSwitcherToggle = document.querySelector(`.style-switcher-toggler`);
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/////////////////////////////////them color
let alternateStyles = document.querySelectorAll(".alernate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
////////////////////////////////////////////them light and dark
let dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
        }
})

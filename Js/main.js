let typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Web Design",
    "Graphic Designer",
    "Ambitious person",
    "Web Design"
  ],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});
/**************************************Aside */
let nav = document.querySelector(`.nav`),
  navList = nav.querySelectorAll(`li`),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++)
{
  let a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
      // for (let i = 0; i < totalSection; i++) {
      //   allSection[i].classList.remove("back-section");
      // }
    removeBackSection();
    for (let u = 0; u < totalNavList; u++){
      if (navList[u].querySelector("a").classList.contains("active"))
      {
        addBackSection(u);
        // allSection[u].classList.add("back-section")
        }
      navList[u].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  })
}

function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove("back-section");
        }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section")
}
function showSection(element)
{
  for (let i = 0; i < totalSection; i++)
  {
    allSection[i].classList.remove("active");
    }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    let target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  let sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex)
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})
let navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

/**nav */
  for (let i = 0; i < totalSection; i++)
  {
    allSection[i].classList.toggle("open");
  }
  

  }

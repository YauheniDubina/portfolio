const dropBtn = document.querySelectorAll(".dropbtn");
dropBtn.forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropbtn1").classList.toggle("change");
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".bar1,.bar2,.bar3,.dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");

    let i;

    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  if (!event.target.matches(".bar1,.bar2,.bar3,.dropbtn")) {
    let dropdownss = document.getElementsByClassName("dropbtn");
    let j;
    for (j = 0; j < dropdownss.length; j++) {
      let openDropdown = dropdownss[j];
      if (openDropdown.classList.contains("change")) {
        openDropdown.classList.remove("change");
      }
    }
  }
};
// gallary
const portfolioBtn = document.querySelectorAll(".portfolio__seasons-btn");

const portfolioImage = document.querySelectorAll(".portfolio-img");

portfolioBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    portfolioBtn.forEach((button) => {
      button.classList.remove("active");
    });
    btn.classList.toggle("active");

    portfolioImage.forEach((img, index) => {
      img.src = `./images/${btn.dataset.season}/${index + 1}.jpg`;
    });
  });
});

//cache

const seasons = ["winter", "spring", "summer", "autumn"];
function preloadImages() {
  seasons.forEach((season) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./images/${season}/${i}.jpg`;
    }
  });
}
preloadImages();
//translate page
import i18Obj from "./translate.js";

const lang = document.querySelectorAll(".header__menu-language span");

lang.forEach((elem) => {
  elem.addEventListener("click", () => {
    lang.forEach((el) => {
      el.classList.remove("check");
    });
    elem.classList.toggle("check");

    !lang[0].className.includes("check")
      ? getTranslate("ru")
      : getTranslate("en");
  });
});

function getTranslate(language) {
  let result = document.querySelectorAll("[data-i18]");

  result.forEach((element) => {
    element.textContent = i18Obj[language][element.dataset.i18];
  });
}
//theme
const themeSwitch = document.querySelectorAll(".header__menu-theme");
const theme = document.querySelectorAll(".dark-theme");
const bodyBg = document.querySelectorAll(".wrapper");
const themeIcon = document.querySelectorAll(".header__menu-theme");
const headerFooterBg = document.querySelectorAll(".header,.contacts");
const itemA = document.querySelectorAll(".header__menu-item>a");

themeSwitch.forEach((item) => {
  item.addEventListener("click", () => {
    itemA.forEach((e) => {
      if (e.classList.contains("dark-a")) {
        e.style.color = "black";
        e.classList.remove("dark-a");
      } else {
        e.style.color = "white";
        e.classList.toggle("dark-a");
      }
    });

    theme.forEach((el) => {
      if (el.classList.contains("dark-theme")) {
        themeIcon[0].lastElementChild.src = "./images/moon.png";
        headerFooterBg[0].style.backgroundImage = "url(./images/bg-light.jpg)";
        headerFooterBg[0].style.color = "black";
        headerFooterBg[1].style.backgroundImage =
          "url(./images/contacts-bg-light.png)";
        headerFooterBg[1].style.color = "black";
        el.classList.remove("dark-theme");
        el.classList.toggle("light-theme");
        bodyBg[0].style.background = "white";
      } else {
        themeIcon[0].lastElementChild.src = "./images/sun.png";
        el.classList.remove("light-theme");
        el.classList.toggle("dark-theme");
        bodyBg[0].style.background = "black";
        headerFooterBg[0].style.backgroundImage = "url(./images/bg.jpg)";
        headerFooterBg[1].style.backgroundImage = "url(./images/contacts.jpg)";
        headerFooterBg[0].style.color = "white";
        headerFooterBg[1].style.color = "#bdae82";
      }
    });
  });
});

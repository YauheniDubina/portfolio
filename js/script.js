function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function test() {
  document.getElementById("dropbtn1").classList.toggle("change");
}

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
    let j; for (j = 0; j < dropdownss.length; j++) {
      let openDropdown = dropdownss[j];
      if (openDropdown.classList.contains("change")) {
        openDropdown.classList.remove("change");
      }
    }
  }
};

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

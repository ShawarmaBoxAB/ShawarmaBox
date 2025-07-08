window.onscroll = function (e) {
  const navLogoClassList = document.querySelector(".nav-logo").classList;
  const navContentWrapperStyle = getComputedStyle(
    document.querySelector(".nav-content-wrapper")
  );
  if (navContentWrapperStyle.flexDirection === "row") {
    if (window.scrollY > 99) {
      navLogoClassList.add("nav-logo-visible");
      navLogoClassList.remove("nav-logo-hidden");
    } else {
      navLogoClassList.remove("nav-logo-visible");
      navLogoClassList.add("nav-logo-hidden");
    }
  } else {
    navLogoClassList.remove("nav-logo-visible");
    navLogoClassList.add("nav-logo-hidden");
  }
};

const navTitle = document.querySelector(".nav-title");
navTitle.addEventListener("click", () => {
  window.location = "/index.html"
})
if (document.querySelector(".logo-image") != null) {

  const logoImg = document.querySelector(".logo-image")
  logoImg.addEventListener("click", () => {
    window.location.pathname = "/index.html"
  })
}
if (document.querySelector(".nav-logo") != null) {

  const logoImgVisible = document.querySelector(".nav-logo")
  logoImgVisible.addEventListener("click", () => {
    window.location.pathname = "/index.html"
  })
}


const date = new Date();

document.querySelector(
  ".footer-paragraf"
).innerHTML = `Shawarma Box AB ©${date.getFullYear()} All Rights Reserved.`;

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector("nav ul");
  function isMobile() {
    return window.innerWidth <= 927;
  }

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", function () {
      if (isMobile()) {
        if (navMenu.style.display === "flex" || navMenu.style.display === "block") {
          navMenu.style.display = "none";
        } else {
          navMenu.style.display = "flex";
          navMenu.style.flexDirection = "column";
          navMenu.style.width = "100%";
          navMenu.style.background = "#191919";
        }
      }
    });
    // Hide menu on resize if not mobile
    window.addEventListener("resize", function () {
      if (!isMobile()) {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "row";
        navMenu.style.width = "";
        navMenu.style.background = "";
      } else {
        navMenu.style.display = "none";
      }
    });
    // Hide menu icon on desktop, show on mobile
    function updateMenuIconVisibility() {
      if (isMobile()) {
        menuIcon.style.display = "block";
        navMenu.style.display = "none";
      } else {
        menuIcon.style.display = "none";
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "row";
        navMenu.style.width = "";
        navMenu.style.background = "";
      }
    }
    // Initial state
    updateMenuIconVisibility();
    window.addEventListener("resize", updateMenuIconVisibility);
    if (isMobile()) {
      navMenu.style.display = "none";
    }
  }
});

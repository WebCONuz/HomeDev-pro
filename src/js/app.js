// LOADEING PAGE -----------------
window.addEventListener("load", loading);
function loading() {
  let loader = document.querySelector(".loader");
  loader.style.cssText = "opacity: 0; visibility: hidden;";
}

// AFTER lOAD HTML DOCUMENT
window.addEventListener("DOMContentLoaded", function () {
  function replaceClass(element, delClassArr, addClassArr) {
    element.classList.remove(...delClassArr);
    element.classList.add(...addClassArr);
  }
  function arrReplaceClass(arr, delClassArr, addClassArr) {
    arr.forEach((item) => {
      replaceClass(item, delClassArr, addClassArr);
    });
  }

  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const header = document.querySelector(".header");
  const menuList = document.querySelector(".menuList");
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "active");
    replaceClass(menuList, ["top-[84px]", "sm:top-[93px]"], ["active-top"]);
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "active");
      replaceClass(menuList, ["top-[84px]", "sm:top-[93px]"], ["active-top"]);
    } else {
      header.classList.remove("bg-white", "active");
      replaceClass(menuList, ["active-top"], ["top-[84px]", "sm:top-[93px]"]);
    }
    if (menuList.classList.contains("flex")) {
      header.classList.add("bg-white");
    }
  });

  // -----------------------------------------------------------
  // Menu & Language -------------------------------------------
  // -----------------------------------------------------------
  const langList = document.querySelector(".langList");
  const langArea = document.querySelector(".lang-area");
  const burger = document.querySelector(".menu-burder");
  const close = document.querySelector(".menu-close");
  const langListItems = document.querySelectorAll(".langList > li");
  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("lang-element")) {
      langList.classList.toggle("hidden");
      langList.classList.toggle("flex");
    } else {
      replaceClass(langList, ["flex"], ["hidden"]);
    }

    if (e.target.classList.contains("menu-element")) {
      menuList.classList.toggle("hidden");
      menuList.classList.toggle("flex");

      burger.classList.toggle("flex");
      burger.classList.toggle("hidden");

      close.classList.toggle("hidden");
      close.classList.toggle("flex");
      if (menuList.classList.contains("flex")) {
        header.classList.add("bg-white");
      } else if (menuList.classList.contains("hidden") && window.scrollY == 0) {
        header.classList.remove("bg-white", "active");
      }
    } else {
      replaceClass(menuList, ["flex"], ["hidden"]);
      replaceClass(burger, ["hidden"], ["flex"]);
      replaceClass(close, ["flex"], ["hidden"]);
    }
  });
  langListItems.forEach((item) => {
    item.addEventListener("click", function () {
      langArea.innerHTML = this.innerHTML;
      const img = document.querySelector(".lang-area img"),
        span = document.querySelector(".lang-area span");
      span.classList.add("lang-element");
      img.classList.add("lang-element");
    });
  });

  // -----------------------------------------------------------
  // Menu & Sidebar --------------------------------------------
  // -----------------------------------------------------------
  const menuItems = document.querySelectorAll(".menuList > li");
  const asideItems = document.querySelectorAll(".aside-list > a");
  const modileAsideItems = document.querySelectorAll(".mobile-aside > a");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      // PC aside ---
      arrReplaceClass(
        asideItems,
        ["w-[25px]", "h-[25px]", "text-white"],
        ["w-[12px]", "h-[12px]", "text-[#086000]"]
      );
      replaceClass(
        asideItems[index],
        ["w-[12px]", "h-[12px]", "text-[#086000]"],
        ["w-[25px]", "h-[25px]", "text-white"]
      );

      // Mobile aside ---
      arrReplaceClass(
        modileAsideItems,
        ["w-[25px]", "h-[25px]", "text-white"],
        ["w-[12px]", "h-[12px]", "text-[#086000]"]
      );
      replaceClass(
        modileAsideItems[index],
        ["w-[12px]", "h-[12px]", "text-[#086000]"],
        ["w-[25px]", "h-[25px]", "text-white"]
      );
    });
  });

  // PC aside ---
  asideItems.forEach((item) => {
    item.addEventListener("click", function () {
      arrReplaceClass(
        asideItems,
        ["w-[25px]", "h-[25px]", "text-white"],
        ["w-[12px]", "h-[12px]", "text-[#086000]"]
      );
      replaceClass(
        this,
        ["w-[12px]", "h-[12px]", "text-[#086000]"],
        ["w-[25px]", "h-[25px]", "text-white"]
      );
    });
  });

  // Mobile aside ---
  modileAsideItems.forEach((item) => {
    item.addEventListener("click", function () {
      arrReplaceClass(
        modileAsideItems,
        ["w-[25px]", "h-[25px]", "text-white"],
        ["w-[12px]", "h-[12px]", "text-[#086000]"]
      );
      replaceClass(
        this,
        ["w-[12px]", "h-[12px]", "text-[#086000]"],
        ["w-[25px]", "h-[25px]", "text-white"]
      );
    });
  });

  // -----------------------------------------------------------
  // Scroll & Sidebar ------------------------------------------
  // -----------------------------------------------------------
  const sectionAll = document.querySelectorAll("section[id]");
  this.window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((item) => {
      const sectionHeight = item.offsetHeight;
      const sectionTop = item.offsetTop - 100;
      const sectionId = item.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // PC ----
        const pcLink = document.querySelector(
          ".aside-list > a[href*=" + sectionId + "]"
        );
        arrReplaceClass(
          asideItems,
          ["w-[25px]", "h-[25px]", "text-white"],
          ["w-[12px]", "h-[12px]", "text-[#086000]"]
        );
        replaceClass(
          pcLink,
          ["w-[12px]", "h-[12px]", "text-[#086000]"],
          ["w-[25px]", "h-[25px]", "text-white"]
        );

        // Mobile ----
        const mobileLink = document.querySelector(
          ".mobile-aside > a[href*=" + sectionId + "]"
        );
        arrReplaceClass(
          modileAsideItems,
          ["w-[25px]", "h-[25px]", "text-white"],
          ["w-[12px]", "h-[12px]", "text-[#086000]"]
        );
        replaceClass(
          mobileLink,
          ["w-[12px]", "h-[12px]", "text-[#086000]"],
          ["w-[25px]", "h-[25px]", "text-white"]
        );
      }
    });
  });

  // -----------------------------------------------------------
  // Customer slider -------------------------------------------
  // -----------------------------------------------------------
  const owl1 = $(".service__carousel");
  owl1.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      768: {
        item: 3,
      },
      1024: {
        items: 4,
      },
    },
  });

  // -----------------------------------------------------------
  // Team slider -----------------------------------------------
  // -----------------------------------------------------------
  const owl2 = $(".team__slider");
  owl2.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // -----------------------------------------------------------
  // Portfolio -------------------------------------------------
  // -----------------------------------------------------------
  const portfolioItems = document.querySelectorAll(".portfolio-nav > li");
  const phoneView = document.querySelector(".phone > .phone_bg");
  const desctopView = document.querySelector(".desctop > .desctop_bg");
  const projectName = document.querySelector("#portfolio-link");
  portfolioItems.forEach((item, i) => {
    item.addEventListener("click", function () {
      phoneView.setAttribute("src", portfolioData[i].phoneSrc);
      desctopView.setAttribute("src", portfolioData[i].pcSrc);
      projectName.setAttribute("href", portfolioData[i].pathURL);
      projectName.innerText = portfolioData[i].title;
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("active");
      }
      this.classList.add("active");
    });
  });
});

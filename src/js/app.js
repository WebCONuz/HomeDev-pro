window.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const header = document.querySelector(".header");
  const circle = document.querySelector(".circle");
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "active");
    circle.classList.add("hidden", "-z-20");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "active");
      circle.classList.add("hidden", "-z-20");
    } else {
      header.classList.remove("bg-white", "active");
    }
  });

  // -----------------------------------------------------------
  // Menu & Sidebar --------------------------------------------
  // -----------------------------------------------------------
  // const langMenu = document.querySelector(".lang-btn");
  const langList = document.querySelector(".langList");
  const langArea = document.querySelector(".lang-area");
  const langListItems = document.querySelectorAll(".langList > li");
  this.window.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("lang-element")) {
      langList.classList.toggle("hidden");
      langList.classList.toggle("flex");
    } else {
      langList.classList.add("hidden");
      langList.classList.remove("flex");
    }

    if (e.target.classList.contains("menu-element")) {
      menuList.classList.toggle("hidden");
      menuList.classList.toggle("flex");
    } else {
      menuList.classList.add("hidden");
      menuList.classList.remove("flex");
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
  const menu = document.querySelector(".menu-btn");
  const menuList = document.querySelector(".menuList");
  const menuItems = document.querySelectorAll(".menuList > li");
  const asideItems = document.querySelectorAll(".aside-list > a");

  // menu.addEventListener("click", function (e) {
  //   menuList.classList.toggle("hidden");
  //   menuList.classList.toggle("flex");
  // });

  menuItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      asideItems.forEach((item) => {
        item.classList.remove("w-[20px]", "h-[20px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      asideItems[index].classList.remove(
        "w-[12px]",
        "h-[12px]",
        "text-[#086000]"
      );
      asideItems[index].classList.add("w-[20px]", "h-[20px]", "text-white");
    });
  });

  asideItems.forEach((item) => {
    item.addEventListener("click", function () {
      asideItems.forEach((item) => {
        item.classList.remove("w-[20px]", "h-[20px]", "text-white");
        item.classList.add("w-[12px]", "h-[12px]", "text-[#086000]");
      });
      this.classList.remove("w-[12px]", "h-[12px]", "text-[#086000]");
      this.classList.add("w-[20px]", "h-[20px]", "text-white");
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
  // Customer slider -------------------------------------------
  // -----------------------------------------------------------
  const owl2 = $(".blog__slider");
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
});

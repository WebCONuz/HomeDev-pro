window.addEventListener("DOMContentLoaded", function () {
  // -----------------------------------------------------------
  // Header ----------------------------------------------------
  // -----------------------------------------------------------
  const header = document.querySelector(".header");
  const circle = document.querySelector(".circle");
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "active");
    circle.classList.remove("hidden");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-white", "active");
      circle.classList.add("hidden");
    } else {
      header.classList.remove("bg-white", "active");
      circle.classList.remove("hidden");
    }
  });

  // -----------------------------------------------------------
  // Menu & Sidebar --------------------------------------------
  // -----------------------------------------------------------
  const menu = document.querySelector(".menu-btn");
  const menuList = document.querySelector(".menuList");
  const menuItems = document.querySelectorAll(".menuList > li");
  const asideItems = document.querySelectorAll(".aside-list > a");
  console.log(asideItems);

  menu.addEventListener("click", function (e) {
    menuList.classList.toggle("hidden");
    menuList.classList.toggle("flex");
  });

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

  // window.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("nav-menu")) {
  //     console.log("++++");
  //   }
  //     console.log(e.target);
  // });

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
      1024: {
        items: 3,
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

const menu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menuList");
const menuItems = document.querySelectorAll(".menuList > li");
const asideItems = document.querySelectorAll(".aside-list > li");

menu.addEventListener("click", function (e) {
  menuList.classList.toggle("hidden");
  menuList.classList.toggle("flex");
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    asideItems.forEach((item) => {
      item.classList.remove("w-[20px]", "h-[20px]", "text-white");
      item.classList.add(
        "w-[12px]",
        "h-[12px]",
        "text-[#086000]",
        "text-[8px]"
      );
    });
    asideItems[index].classList.remove(
      "w-[12px]",
      "h-[12px]",
      "text-[#086000]",
      "text-[8px]"
    );
    asideItems[index].classList.add("w-[20px]", "h-[20px]", "text-white");
  });
});

asideItems.forEach((item) => {
  item.addEventListener("click", function () {
    asideItems.forEach((item) => {
      item.classList.remove("w-[20px]", "h-[20px]", "text-white");
      item.classList.add(
        "w-[12px]",
        "h-[12px]",
        "text-[#086000]",
        "text-[8px]"
      );
    });
    this.classList.remove(
      "w-[12px]",
      "h-[12px]",
      "text-[#086000]",
      "text-[8px]"
    );
    this.classList.add("w-[20px]", "h-[20px]", "text-white");
  });
});

// window.addEventListener("click", function (e) {
//   if (e.target.classList.contains("nav-menu")) {
//     console.log("++++");
//   }
//     console.log(e.target);
// });

// Customer slider -----------------------------
const owl1 = $(".service__carousel");
owl1.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
  },
});

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

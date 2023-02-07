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

document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMod: true,
    centeredSlides: true,
    direction: "vertical",
    mousewheel: true,
    slidesPreView: 1.75,
  });
});

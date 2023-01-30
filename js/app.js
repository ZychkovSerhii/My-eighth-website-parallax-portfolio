document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMod: true,
    centeredSlides: true,
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1.75,
    slidesOffsetBefore: -190,
  });
});
bindSwipers(slider1, slider2, slider3, slider4);

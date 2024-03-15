$(document).ready(function () {
  const owl = $("#clients-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  const prev = $("#arrow-left");
  const next = $("#arrow-right");

  next.click(function () {
    owl.trigger("next.owl.carousel");
  });

  prev.click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

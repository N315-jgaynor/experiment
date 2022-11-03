function navListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $(".links a").click(function (e) {
    $(".bars").removeClass("active");
    $(".links").removeClass("active");
  });
}

$(document).ready(function () {
  navListeners();
});

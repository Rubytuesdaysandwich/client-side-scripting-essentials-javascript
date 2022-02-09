//grow image
$(".w3-card-2").hover(
  function () {
    console.log($(this));
    $(this)[0].style.transform = "scale(1.1)";
  },
  function () {
    $(this)[0].style.transform = "scale(1)";
  }
);

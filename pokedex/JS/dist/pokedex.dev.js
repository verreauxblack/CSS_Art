"use strict";

function openFlip(flied) {
  var y = $(flied).find(".flip");
  var x = y.attr("class");

  if (y.hasClass("openFlip")) {
    y.removeClass("openFlip");
  } else {
    $(".flip").removeClass("openFlip");
    y.addClass("openFlip");
  }
}
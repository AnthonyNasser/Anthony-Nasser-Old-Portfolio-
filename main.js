function setFadeToggle(aTag) {
  $(`a.${aTag}`).on("click", () => {
    $(`.${aTag} .container`).fadeToggle(500, "linear");
  });
}
function setAllToggles() {
  setFadeToggle("about");
  setFadeToggle("works");
  setFadeToggle("toolkit");
  setFadeToggle("contact");
}
function setUpButton() {
  $("button.letsTalk").on("click", () => {
    $(".contact .container").focus();
    if ($(".contact .container").css("display", "none")) {
      $(".contact .container").fadeToggle();
    }
  });
}
function app() {
  setUpButton();
  setAllToggles();
}

app();

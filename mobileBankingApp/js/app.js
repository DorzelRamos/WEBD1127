$(function () {
  let login = $("section#login");
  let welcomeMain = $("section#welcome-main-content");
  let fullGradient = $("div#full-gradient-background");
  let submit = $("button#submit");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  login.css("visibility", "visible");
  welcomeMain.css("visibility", "hidden");

  let welcomeMidChildren = welcomeMiddle.children();
  console.log(welcomeMidChildren);
  submit.click(loadWelcome)

  function loadWelcome() {
    login.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
    fullGradient.css("visibility", "hidden");
    let tl = gsap.timeline();
    tl.from(welcomeTop,{opacity:0, y: -200, duration: 0.5}, "+=1");
    tl.from(welcomeMiddle,{opacity:0, y: 200, duration: 0.5});
  }
});

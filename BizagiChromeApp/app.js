chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create("views/login.html", {
    id: "mainwin",
    outerBounds: {width:1200, height:700},
    focused: true
  });
});
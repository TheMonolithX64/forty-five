chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('fortyfive.html', {
    bounds: {
      width: 1000,
      height: 600
    }
  });
});
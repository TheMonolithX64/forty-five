/**
 * Listens for the app launching then creates the window
 *
 * @background.js - Background script
 */

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('fortyfive.html', {
  	id: 'main',
    bounds: {
      width: 1000,
      height: 600
    }
  });
});

chrome.app.runtime.onLaunched.addListener(launch);

//Example event listener for launch
document.addEventListener('DOMContentReady', function () {
  document.getElementById('main')
          .addEventListener('launch', init);
});

// Add event listener for 'Deal' button click event and action deal() funtction
document.addEventListener('DOMContentReady', function (event) {
  document.getElementById('deal')
          .addEventListener('click', deal());
});
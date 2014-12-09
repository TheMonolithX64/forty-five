/**
 * Listens for the app launching then creates the window
 *
 * @background.js - Background script
 */

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
  	id: 'main',
    bounds: {
      width: 1000,
      height: 600
    }
  });
});

chrome.app.runtime.onLaunched.addListener(onLaunched);

//Example event listener for launch
chrome.app.window.addEventListener('DOMContentReady', function () {
  //document.getElementById('main')
          //.addEventListener('load', init);
  document.getElementById('dealbtn')
          .addEventListener('click', deal, false);
  //document.getElementById('sufflebtn')
          //.addEventListener('click', shuffle, false);
  //document.getElementById('discardbtn')
          //.addEventListener('click', discard, false);
  //document.getElementById('resetbtn')
          //.addEventListener('click', resetdeck, false);
});

// Add event listener for 'Deal' button click event and action deal() function
//document.addEventListener('DOMContentReady', function (event) {
  //document.getElementById('deal')
          //.addEventListener('click', deal());
//});

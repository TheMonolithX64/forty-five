/**
 * Listens for the app launching then creates the window
 *
 * @background.js - Background script
 */

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('fortyfive.html', {
  	id: 'main',
    bounds: {
      width: 1280,
      height: 1000
    }
    //console.log("LAUNCHED!!");
  });
});

chrome.app.runtime.onLaunched.addListener(onLaunched);

//Example event listener for launch
chrome.app.window.addEventListener('DOMContentReady', function () {
  //document.getElementById('main')
          //.addEventListener('load', init);
          //console.log("DOM Ready!!");
  document.getElementById('dealbtn')
          .addEventListener('click', deal, false);
  document.getElementById('sufflebtn')
          .addEventListener('click', shuffle, false);
  document.getElementById('discardbtn')
          .addEventListener('click', discard, false);
  document.getElementById('resetbtn')
          .addEventListener('click', resetdeck, false);

  //add callback for playCard function
  //document.face.addEventListener('click', playCard);
  document.querySelector("face").onclick = playCard;
  //document.face.addEventListener('click', p1PlayCard);
  //document.face.addEventListener('click', p2PlayCard);
  //console.log("Add 'face' event listener");
});

// Add event listener for 'Deal' button click event and action deal() function
//document.addEventListener('DOMContentReady', function (event) {
  //document.getElementById('deal')
          //.addEventListener('click', deal());
//});

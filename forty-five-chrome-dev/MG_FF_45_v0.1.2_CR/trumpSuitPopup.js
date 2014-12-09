// trumpSuitPopup.js

(function(window) {
	'use strict';

	var trumpSuitPopup = document.getElementById('trumpSuitPopup');
	trumpSuitPopup.innerHTML = "The Trump Suit is: " +trumpSuitForRound;
	document.getElementById('trumpSuitPopup').appendChild(trumpSuitPopup);
})(window);
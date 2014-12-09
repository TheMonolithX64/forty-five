// card.js

(function(exports) {
	
	var NextId = 1;

	var CardModel = function () {
		this.cardObj = {};
		this.listeners = [];
		//this.id = id;
		//this.name = name;
		//this.rank = rank;
		//this.suit = suit;
		//this.cardNumber = cardNumber;

	}

	CardModel.prototype.removeCard = function() {
		this.cardObj = {};
		this.notifyListeners('removed');
	} 

	CardModel.prototype.discardDone = function() {
		var oldCardObj = this.cardObj;
		this.cardObj = {};
		for (var id in oldCardObj) {
			if ( ! oldCardObj[id].isDone ) {
				this.cardObj[id] = oldCardObj[id];
			}
		}
		this.notifyListeners('discarded');
	}

	CardModel.prototype.setCardState = function(id, isDone) {
		if ( this.cardObj[id].isDone != isDone ) {
			this.cardObj[id].isDone = isDone;
			this.notifyListeners('stateChanged', id);
		}
	}

	CardModel.prototype.addCardObj = function (id, text, isDone) {
		var id = nextId++;
		//cardNode.createElement('DIV');
		//cardNode.className('card-' +id);
		this.cardObj[id] = {
						'id': id,
						'text': text,
						'isDone': isDone
						},
						//'rank': rank,
						//'suit': suit,
						//'cardNumber': cardNumber,
						
		this.notifyListeners('added', id);
	}

	CardModel.prototype.addListener = function(listener) {
		this.listeners.push(listener);
		//console.log()
	}

	CardModel.prototype.notifyListeners = function(change, param) {
		var this_ = this;
		this.listeners.forEach(function(listener) {
			listener(this_, change, param);
		});
	}

	exports.CardModel = CardModel;

})(window);

window.addEventListener('DOMContentLoaded', function() {

	var card = new CardModel();
	var form = document.querySelector('form');
	var discard = document.getElementById('discard');
	var list = document.getElementById('list');
	//var cardNode = document.getElementById('cardNode');
	var cardTemplate = document.querySelector('#templates > [data-name="list"]');

	form.addEventListener('submit', function(e) {
		var textEl = e.target.querySelector('input[type="text"]');
		card.addCard(textEl.value, false)
		textEl.value = null;
		e.preventDefault();
	});

	discard.addEventListener('click', function(e) {
		card.discardDone();
		e.preventDefault();
	});

	card.addListener(function(card, changeType, param) {
		if ( changeType === 'removed' || changeType === 'discarded' ) {
			redrawUI(card);
		} else if ( changeType === 'added' ) {
			drawCard(card.cardObj[param], list);
		} else if ( changeType === 'stateChanged' ) {
			updateCard(card.cardObj[param]);
		}
		updateCounters(card);
	});

	var redrawUI = function(card) {
		list.innerHTML = '';
		for ( var id in card.cardObj ) {
			drawCard(card.cardObj[id], list);
		}
	};

	var drawCard = function(tempObj, container) {
		var el = cardTemplate.cloneNode(true);
		el.SetAttribute('card-id', tempObj.id);
		container.appendChild(el);
		updateCard(tempObj);
		var checkbox = el.querySelector('input[type="checkbox"]');
		checkbox.addEventListener('change', function(e) {
			card.setCardState(tempObj.id, e.target.checked);
		});
	}

	var updateCard = function(card) {
		var cardElement = list.querySelector('li[card-id="'+card.id+'"]');
		if (cardElement) {
			var checkbox = cardElement.querySelector('input[type="checkbox"]');
			var desc = cardElement.querySelector('span');
			checkbox.checked = card.isDone;
			desc.innerText = card.text;
			desc.className = "done-"+card.isDone;

		}
	}

	var updateCounters = function(card) {
		var count = 0;
		var notDone = 0;
		for ( var id in card.cardObj ) {
			count++;
			if ( ! card.cardObj[id].isDone ) {
				notDone++;
			}
		}
		document.getElementById('remaining').innerText = notDone;
		document.getElementById('length').innerText = count;
	}

	updateCounters(card);

});
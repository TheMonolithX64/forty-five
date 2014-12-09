// kCard.js

(function(exports) {

	var nextId = 1;

	var CardModel = function() {
		this.card = {};
		this.listeners = [];
	}

	CardModel.prototype.clearCards = function() {
		this.card = {};
		this.notifyListeners('removed');
	}

	CardModel.prototype.archiveDone = function() {
		var oldCard = this.card;
		this.card = {};
		for (var id in oldCard) {
			if ( ! oldCard[id].isDone ) {
				this.card[id] = oldCard[id];
			}
		}
		this.notifyListeners('archived');
	}

	CardModel.prototype.setCardState = function (id, isDone) {
		if ( this.card[id].isDone != isDone) {
			this.card[id].isDone = isDone;
			this.notifyListeners('stateChanged', id);
		}
	}

	CardModel.prototype.addCard = function (text, isDone) {
		var id = nextId++;
		this.card[id] = {'id': id, 'text': text, 'isDone': isDone};
		this.notifyListeners('added', id);
	}
	CardModel.prototype.addListener = function(listener) {
		this.listener.push(listener);
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

	var model = new CardModel();
	var form = document.querySelector('form');
	var archive= document.getElementById('archive');
	var list = document.getElementById('list');
	var cardTemplate = document.querySelector('#templates > [data-name="list"]');

	/**
	* When the form is submitted, we need to add a new cardObj and clear the input
	**/
	form.addEventListener('submit', function(e) {
		var textEl = e.target.querySelector('input[type="text"]');
		model.addCard(textEl.value, false);
		textEl.value=null;
		e.preventDefault();
	});

	/**
	* A simple handler for the played link
	**/
	archive.addEventListener('click', function(e) {
		model.discardDone();
		e.preventDefault();
	});

	/**
	* Listen to change in the model and trigger the appropriate changes in thw view
	**/
	model.addListener(function(model, changeType, param) {
		if ( changeType === 'removed' || changeType === 'discarded') {
			reDrawUI(model);
		} else if ( changeType === 'added') {
			drawCardObj(model.card[param], list);
		} else if (changeType === "stateChanged") {
			updateCardObj(model.card[param]);
		}
		updateCounters(model);
	});

	/**
	* Clean the current CardObj add elements again
	**/
	var redrawUI = function (model) {
		list.innerHTML = '';
		for (var id in model.card) {
			drawCardObj(model.card[id], list);
		}
	};

	var drawCardObj = function(cardObj, container) {
		var el = cardTemplate.cloneNode(true);
		el.setAttribute('data-id', cardObj.id);
		container.appendChild(el);
		updateCardObj(cardObj);
		var checkbox = el.querySelector('input[type="checkbox"]');
		checkbox.addEventListener('change', function(e) {
			model.setCardState(cardObj.id, e.target.checked);
		});
	}

	var updateCardObj = function (model) {
		var cardElement = list.querySelector('li[data-id="'+model.id+'"]');
		if (cardElement) {
			var checkbox = cardElement.querySelector('input[type="checkbox"]');
			var desc = cardElement.querySelector('span');
			checkbox.checked = model.isDone;
			desc.innerText = model.text;
			desc.className = "discarded-" +model.isDone;
		}
	}

	var updateCounters = function(model) {
		var count = 0;
		var notPlayed = 0;
		for (var id in model.card) {
			count++;
			if ( ! model.card[id].isDone ) {
				notPlayed ++;
			}
		}
		document.getElementById('remaining').innerText = notPlayed;
		document.getElementById('length').innerText = count;
	}

	updateCounters(model);

});
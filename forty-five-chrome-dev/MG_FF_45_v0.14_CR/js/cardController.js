// card.js

(function(exports, cardStack) {

	var nextId = 1;
	
	var Card = function (cId, rank, suit, cardNumber) {

		this.Card = {};
		this.listeners = [];
		this.cId = cId;
		this.rank = rank;
		this.suit = suit;
		this.cardNumber = cardNumber;
	
	}

	Card.prototype.cId = function (Card) {

		this.cId = cId;
	} 
})
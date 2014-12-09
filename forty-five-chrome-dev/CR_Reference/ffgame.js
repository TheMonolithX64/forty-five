/**
   * Forty Five web app v0.1
   * @author Stephen Barry | Monolithic Games | Aug 22nd 2014
   * 
   * @fileoverview ffgame.js - Javascript source code for main gameplay of 45.
   * We create card stacks in a DIV element. Provides a number of functions() 
   * for querying, dealing, shuffling, adding, counting and discarding of card 
   * objects from the deck and players hands. Additional contains some rules / 
   * booleans for checking the trump card for suit and if any player can rob.
   */ 

var deck, trump, playerHand, player2Hand, player3Hand, player4Hand, discards;
var p1SelectTemp, p2SelectTemp, p3SelectTemp, p4SelectTemp;

window.onload = init;

function init() {

  deck = new Stack();
  trump = new Stack();
  playerHand = new Stack();
  player2Hand = new Stack();
  player3Hand = new Stack();
  player4Hand = new Stack();
  discards = new Stack();

  p1SelectTemp = new Stack();
  p2SelectTemp = new Stack();
  p3SelectTemp = new Stack();
  p3SelectTemp = new Stack();

  var canRobAce = false;
  var canRobJoker = false;
  var canRobTrump = false;

  deck.makeDeck(1);
  deck.shuffle(1);
  deal();
  display();
}

this.shuffle = function() {

  if (deck == null) return;

  deck.shuffle(45);
  display();
}

// MAIN GAME deal Hands
this.deal = function () {

  var i;

  if (deck == null) return;

  if (deck.cardCount() < 21)
    alert("Not enough cards.");
  else {
    discard();
    for (i = 0; i < 1; i++) {
      trump.addCard(deck.deal());
      }
    for (i = 0; i < 5; i++) {
      playerHand.addCard(deck.deal());
      }
    for (i = 0; i < 5; i++) {
      player2Hand.addCard(deck.deal());
      }
    for (i = 0; i < 5; i++) {
      player3Hand.addCard(deck.deal());
      }
    for (i = 0; i < 5; i++) {
      player4Hand.addCard(deck.deal());
      }

      display();
  }

  var trumpSuitForRound;

    for (i = 0; i < trump.cardDeck.length; i++) {
    trumpSuitForRound = trump.cardDeck[i].getCardSuit();
      alert("TRUMP SUIT = " +trumpSuitForRound);
    }

  canRobAce();
  canRobJoker();
  canRobTrump();

}

this.discard = function () {

  if (deck == null) return;

  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);
  discards.combine(trump);
  display();
}

this.reset = function () {

  var el;

  if (deck == null) return;

  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);
  discards.combine(trump);
  deck.combine(discards);
  shuffle();
  display();
}

this.newGame = function () {

  var el;

  if (deck == null) return;

  discards.combine(trump);
  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);
  if (p1SelectTemp.cardDeck() === null || p2SelectTemp.cardDeck() === null ||
      p3SelectTemp.cardDeck() === null || p4SelectTemp.cardDeck() === null) {
    return;
  }
  else {
  discards.combine(p1SelectTemp);
  discards.combine(p2SelectTemp);
  discards.combine(p3SelectTemp);
  discards.combine(p4SelectTemp);
  }
  deck.combine(discards);
  shuffle(45);
  display();
}

this.display = function () {

  var el, left;
  var n;

  // Note: only a fraction of the cards in the deck and discard pile are
  // displayed, just enough to get an idea of the number of cards in each.

  left = 0;
  el = document.getElementById("deck");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = deck.cardCount();
  for (i = 0; i < Math.round(n / 5); i++) {
    node = deck.cardDeck[i].createNode();
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("trump");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = trump.cardCount();
  for (i = 0; i < trump.cardCount(); i++) {
    node = trump.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("playerHand");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = playerHand.cardCount();
  for (i = 0; i < playerHand.cardCount(); i++) {
    node = playerHand.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player2Hand");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = playerHand.cardCount();
  for (i = 0; i < player2Hand.cardCount(); i++) {
    node = player2Hand.cardDeck[i].createNode();
    // TURN PLAYER TWO'S CARDS FACE DOWN / INVISIBLE
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player3Hand");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = player3Hand.cardCount();
  for (i = 0; i < player3Hand.cardCount(); i++) {
    node = player3Hand.cardDeck[i].createNode();
    // TURN PLAYER THREE'S CARDS FACE DOWN / INVISIBLE
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player4Hand");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = player4Hand.cardCount();
  for (i = 0; i < player4Hand.cardCount(); i++) {
    node = player4Hand.cardDeck[i].createNode();
    // TURN PLAYER FOUR'S CARDS FACE DOWN / INVISIBLE
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("discards");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = discards.cardCount();
  for (i = n - Math.round(n / 5); i < n; i++) {
    node = discards.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  // Note: Cards displayed in a form as String value of card
  var s;

  s = ""
  for (i = 0; i < deck.cardCount(); i++)
    s += deck.cardDeck[i].getCardNumber()+ " " +deck.cardDeck[i].cardToString()+ " " +deck.cardDeck[i].getCardFilename()+ " " +deck.cardDeck[i].getCardColour()+ "\n";
  document.forms[0].elements[0].value = s;

  s = "";
  for (i = 0; i < trump.cardCount(); i++)
    s += trump.cardDeck[i].getCardNumber()+ " " +trump.cardDeck[i].cardToString()+ " " +trump.cardDeck[i].getCardFilename()+ " " +trump.cardDeck[i].getCardColour()+ "\n";
  document.forms[0].elements[1].value = s;

  s = "";
  for (i = 0; i < playerHand.cardCount(); i++)
    s += playerHand.cardDeck[i].getCardNumber() + " " +playerHand.cardDeck[i].cardToString() + " " + playerHand.cardDeck[i].getCardFilename() + " " + playerHand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[2].value = s;

  s = "";
  for (i = 0; i < player2Hand.cardCount(); i++)
    s += player2Hand.cardDeck[i].getCardNumber() + " " + player2Hand.cardDeck[i].cardToString() + " " + player2Hand.cardDeck[i].getCardFilename() + " " + player2Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[3].value = s;

  s = "";
  for (i = 0; i < player3Hand.cardCount(); i++)
    s += player3Hand.cardDeck[i].getCardNumber() + " " + player3Hand.cardDeck[i].cardToString() + " " + player3Hand.cardDeck[i].getCardFilename() + " " + player3Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[4].value = s;

  s = "";
  for (i = 0; i < player4Hand.cardCount(); i++)
    s += player4Hand.cardDeck[i].getCardNumber() + " " + player4Hand.cardDeck[i].cardToString() + " " + player4Hand.cardDeck[i].getCardFilename() + " " + player4Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[5].value = s;

  s = "";
  for (i = 0; i < discards.cardCount(); i++)
    s += discards.cardDeck[i].getCardNumber() + " " + discards.cardDeck[i].cardToString() + " " + discards.cardDeck[i].getCardFilename() + " " + discards.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[6].value = s;

}

this.canRobAce = function (cardDeck) {

    var i;
    var canRobAce = false;

    for (i = 0; i < trump.cardDeck.length; i++) {

      if (trump.cardDeck[i].rankName() == "Ace") {
        confirm("You can ROB this ACE!");
        canRobAce = true;
        }
    }
}

this.canRobJoker = function (cardDeck) {

    var i;
    var canRobJoker = false;

    for (i = 0; i < trump.cardDeck.length; i++) {

      if (trump.cardDeck[i].rankName() == "Joker") {

        confirm("You can ROB this JOKER!");

        canRobJoker = true;

      }
    }
}

this.canRobTrump = function (cardDeck) {

    var i;
    var canRobTrump = false;
    var trumpSuitForRound;

    for (i = 0; i < trump.cardDeck.length; i++) {

      trumpSuitForRound = trump.cardDeck[i].getCardSuit();
    }
    
    for (i = 0; i < playerHand.cardDeck.length; i++) {

      if (playerHand.cardDeck[i].rankName() == "Ace" && playerHand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        confirm("You can ROB this TRUMP card!"); 
        canRobTrump = true;
      }
    }

    for (i = 0; i < player2Hand.cardDeck.length; i++) {

      if (player2Hand.cardDeck[i].rankName() == "Ace" && player2Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        alert("PLAYER TWO can ROB the TRUMP card!"); 
        canRobTrump = true;
      }
    }

    for (i = 0; i < player3Hand.cardDeck.length; i++) {

      if (player3Hand.cardDeck[i].rankName() == "Ace" && player3Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        alert("PLAYER THREE can ROB the TRUMP card!"); 
        canRobTrump = true;
      }
    }

    for (i = 0; i < player4Hand.cardDeck.length; i++) {

      if (player4Hand.cardDeck[i].rankName() == "Ace" && player4Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        alert("PLAYER FOUR can ROB the TRUMP card!"); 
        canRobTrump = true;
      }
    }

}
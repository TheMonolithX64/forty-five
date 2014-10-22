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
//(function (window, document, undefined) {

    //'use-strict';
    //'use-self';

var deck, trump, playerHand, player2Hand, player3Hand, player4Hand, discards;
var p1TrickStack;

function init() {

  deck = new Stack();
  trump = new Stack();
  playerHand = new Stack();
  player2Hand = new Stack();
  player3Hand = new Stack();
  player4Hand = new Stack();
  p1TrickStack = new Stack();
  discards = new Stack();

  //p1SelectTemp = new Stack();
  //p1trickStack = new Stack();

  var canRobAce = false;
  var canRobJoker = false;
  var canRobTrump = false;

  deck.makeDeck(1);
  deck.shuffle(1);
  deal();
  display();

}

function shuffle() {

  if (deck === null) {
    return;
  }

  deck.shuffle(1);
  display();
  console.log("Shuffled deck");
}

function deal() {

  var i;

  if (deck === null) {
    return;
  }

  if (deck.cardCount() < 21) {
    //alert("Not enough cards.");
    discard();
    resetdeck();
    console.log("Not enough cards.");
  }
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
      console.log("Dealt cards");
  }

  var trumpSuitForRound;

    for (i = 0; i < trump.cardDeck.length; i++) {
    trumpSuitForRound = trump.cardDeck[i].getCardSuit();
      //alert("TRUMP SUIT = " +trumpSuitForRound);
      //chrome.app.createWindow('trumpSuitPopup')
      console.log("Trump Suit: " +trumpSuitForRound);
    }

  canRobAce();
  canRobJoker();
  canRobTrump();

}

function discard() {

  if (deck === null) {
    return;
  }

  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);
  discards.combine(trump);
  display();
  console.log("Discarded cards");
}

function resetdeck() {

  if (deck === null) {
    return;
  }

  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);
  discards.combine(trump);
  deck.combine(discards);
  shuffle();
  display();
  console.log("Reset deck");
}

function display() {

  var el, left;
  var n;

  // Note: only a fraction of the cards in the deck and discard pile are
  // displayed, just enough to get an idea of the number of cards in each.

  if (deck === null) {
    return;
  }

  left = 0;
  el = document.getElementById("deck");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
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
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = trump.cardCount();
  for (i = 0; i < trump.cardCount(); i++) {
    node = trump.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("playerHand");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = playerHand.cardCount();
  for (i = 0; i < playerHand.cardCount(); i++) {
    node = playerHand.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player2Hand");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = playerHand.cardCount();
  for (i = 0; i < player2Hand.cardCount(); i++) {
    node = player2Hand.cardDeck[i].createNode();
    // TURN PLAYER TWO'S CARDS FACE DOWN / INVISIBLE
    //node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player3Hand");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = player3Hand.cardCount();
  for (i = 0; i < player3Hand.cardCount(); i++) {
    node = player3Hand.cardDeck[i].createNode();
    // TURN PLAYER THREE'S CARDS FACE DOWN / INVISIBLE
    //node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("player4Hand");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = player4Hand.cardCount();
  for (i = 0; i < player4Hand.cardCount(); i++) {
    node = player4Hand.cardDeck[i].createNode();
    // TURN PLAYER FOUR'S CARDS FACE DOWN / INVISIBLE
    //node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
  }

  left = 0;
  el = document.getElementById("discards");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = discards.cardCount();
  for (i = n - Math.round(n / 5); i < n; i++) {
    node = discards.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  // Note: Cards displayed in a form as String value of card
  var s;

  s = "";
  for (i = 0; i < deck.cardCount(); i++) {
    s += deck.cardDeck[i].getCardNumber()+ " " +deck.cardDeck[i].cardToString()+ " " +deck.cardDeck[i].getCardFilename()+ " " +deck.cardDeck[i].getCardColour()+ "\n";
  document.forms[0].elements[0].value = s;
}

  s = "";
  for (i = 0; i < trump.cardCount(); i++) {
    s += trump.cardDeck[i].getCardNumber()+ " " +trump.cardDeck[i].cardToString()+ " " +trump.cardDeck[i].getCardFilename()+ " " +trump.cardDeck[i].getCardColour()+ "\n";
  document.forms[0].elements[1].value = s;
}

  s = "";
  for (i = 0; i < player2Hand.cardCount(); i++) {
    s += player2Hand.cardDeck[i].getCardNumber() + " " + player2Hand.cardDeck[i].cardToString() + " " + player2Hand.cardDeck[i].getCardFilename() + " " + player2Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[2].value = s;
}

  s = "";
  for (i = 0; i < playerHand.cardCount(); i++) {
    s += playerHand.cardDeck[i].getCardNumber() + " " +playerHand.cardDeck[i].cardToString() + " " + playerHand.cardDeck[i].getCardFilename() + " " + playerHand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[3].value = s;
}

  s = "";
  for (i = 0; i < player3Hand.cardCount(); i++) {
    s += player3Hand.cardDeck[i].getCardNumber() + " " + player3Hand.cardDeck[i].cardToString() + " " + player3Hand.cardDeck[i].getCardFilename() + " " + player3Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[4].value = s;
}

  s = "";
  for (i = 0; i < player4Hand.cardCount(); i++) {
    s += player4Hand.cardDeck[i].getCardNumber() + " " + player4Hand.cardDeck[i].cardToString() + " " + player4Hand.cardDeck[i].getCardFilename() + " " + player4Hand.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[5].value = s;
}

  s = "";
  for (i = 0; i < discards.cardCount(); i++) {
    s += discards.cardDeck[i].getCardNumber() + " " + discards.cardDeck[i].cardToString() + " " + discards.cardDeck[i].getCardFilename() + " " + discards.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[6].value = s;
}

console.log("Displayed card images");

}

function canRobAce(cardDeck) {

    var i;
    var canRobAce = false;

    for (i = 0; i < trump.cardDeck.length; i++) {

      if (trump.cardDeck[i].rankName() == "Ace") {
        //alert("You can ROB this ACE!");
        console.log("You can ROB this ACE!");
        canRobAce = true;
        }
    }
}

function canRobJoker(cardDeck) {

    var i;
    var canRobJoker = false;

    for (i = 0; i < trump.cardDeck.length; i++) {

      if (trump.cardDeck[i].rankName() == "Joker") {

        //alert("You can ROB this JOKER!");
        canRobJoker = true;
        console.log("YOU can ROB the JOKER!");
      }
    }
}

function canRobTrump(cardDeck) {

    var i;
    var canRobTrump = false;
    var trumpSuitForRound;

    for (i = 0; i < trump.cardDeck.length; i++) {

      trumpSuitForRound = trump.cardDeck[i].getCardSuit();
      //console.log("TRUMP suit: " +trumpSuitForRound);
    }
    
    for (i = 0; i < playerHand.cardDeck.length; i++) {

      if (playerHand.cardDeck[i].rankName() == "Ace" && playerHand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        //alert("You can ROB this TRUMP card!"); 
        canRobTrump = true;
        console.log("You can ROB this TRUMP card!");
      }
    }

    for (i = 0; i < player2Hand.cardDeck.length; i++) {

      if (player2Hand.cardDeck[i].rankName() == "Ace" && player2Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER TWO can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER TWO can ROB the TRUMP card!");
      }
    }

    for (i = 0; i < player3Hand.cardDeck.length; i++) {

      if (player3Hand.cardDeck[i].rankName() == "Ace" && player3Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER THREE can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER THREE can ROB the TRUMP card!");
      }
    }

    for (i = 0; i < player4Hand.cardDeck.length; i++) {

      if (player4Hand.cardDeck[i].rankName() == "Ace" && player4Hand.cardDeck[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER FOUR can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER FOUR can ROB the TRUMP card!");
      }
    }

}
/*
// Attempt to play card on click
function playCard(event, card) {

  var i;
  var card;
  var tempSelect, t, p;
  var selectCard;

  card.onclick = function() {
    this.event.target.nodeName = tempSelect;
    this.playerHand.cardDeck[i] = t;

  }

}
*/


//})(window, document);

window.addEventListener('DOMContentLoaded', function() {

  var dealbtn = document.getElementById('dealbtn');
  var shufflebtn = document.getElementById('shufflebtn');
  var discardbtn = document.getElementById('discardbtn');
  var resetbtn = document.getElementById('resetbtn');

  dealbtn.addEventListener('click', function(e) {
    deal();
  });

  shufflebtn.addEventListener('click', function(e) {
    shuffle();
  });

  discardbtn.addEventListener('click', function(e) {
    discard();
  });

  resetbtn.addEventListener('click', function(e) {
    resetdeck(); 
  });

});

window.onload = function() {

  init();

};
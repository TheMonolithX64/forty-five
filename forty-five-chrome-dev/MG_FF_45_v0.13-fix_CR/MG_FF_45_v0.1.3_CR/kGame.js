// kGame.js

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

var p1SelectTemp, p2SelectTemp, p3SelectTemp, p4SelectTemp;

function init() {

  deck = new Stack();
  trump = new Stack();
  discards = new Stack();
  playerHand = new Stack();
  player2Hand = new Stack();
  player3Hand = new Stack();
  player4Hand = new Stack();

  p1SelectTemp = new Stack();
  p2SelectTemp = new Stack();
  p3SelectTemp = new Stack();
  p4SelectTemp = new Stack();

  //p1TrickStack = new Stack();

  var canRobAce = false;
  var canRobJoker = false;
  var canRobTrump = false;

  deck.makeDeck(1);
  deck.shuffle(1);
  //deal();
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
      console.log("$$ TRUMP");
      trump.addCard(deck.deal());
      console.log(i);
      }
    console.log("Turned the trump card faceup");
    console.log("$$ PLAYER ONE");
    for (i = 0; i < 5; i++) {
      playerHand.addCard(deck.deal());
      console.log(playerHand.cardStack[i].cardToString());
      console.log(i);
      }
      console.log("Dealt to P1 hand");
    console.log("$$ PLAYER TWO");
    for (i = 0; i < 5; i++) {
      player2Hand.addCard(deck.deal());
      console.log(player2Hand.cardStack[i].cardToString());
      console.log(i);
      }
      console.log("Dealt to P2 hand");
    console.log("$$ PLAYER THREE");
    for (i = 0; i < 5; i++) {
      player3Hand.addCard(deck.deal());
      console.log(player3Hand.cardStack[i].cardToString());
      console.log(i);
      }
      console.log("Dealt to P3 hand");
    console.log("$$ PLAYER FOUR");  
    for (i = 0; i < 5; i++) {
      player4Hand.addCard(deck.deal());
      console.log(player4Hand.cardStack[i].cardToString());
      console.log(i);
      }
      console.log("Dealt to P4 hand");
      display();
      console.log("Dealt cards to ALL");
  }

  var trumpSuitForRound;
  var test;

    for (i = 0; i < trump.cardStack.length; i++) {
    trumpSuitForRound = trump.cardStack[i].getCardSuit();
    trumpCard = trump.cardStack[i].cardToString();
    
      //alert("TRUMP SUIT = " +trumpSuitForRound);
      //chrome.app.createWindow('trumpSuitPopup')
      console.log("Trump Suit: " +trumpSuitForRound);
      console.log("Trump Card: " +trumpCard);
      //console.log("Trump Card ID: " +i);
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

function newGame() {

  if (deck === null) {
    return;
  }
  discards.combine(trump);
  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);

  if (p1SelectTemp === null || p2SelectTemp === null ||
      p3SelectTemp === null || p4SelectTemp === null) {
    return;
  }
  else {
    discards.combine(p1SelectTemp);
    discards.combine(p2SelectTemp);
    discards.combine(p3SelectTemp);
    discards.combine(p4SelectTemp);
  }
  discards.combine(trump);
  deck.combine(discards);
  shuffle();
  display();
  console.log("Reset, new game started!");
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
    node = deck.cardStack[i].createNode();
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
    node = trump.cardStack[i].createNode();
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
    node = playerHand.cardStack[i].createNode();
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
    node = player2Hand.cardStack[i].createNode();
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
    node = player3Hand.cardStack[i].createNode();
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
    node = player4Hand.cardStack[i].createNode();
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
    node = discards.cardStack[i].createNode();
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }
/**********************************************************

  if (p1TrickStack.length === null) {
    return;
  }
  else {
  left = 0;
  el = document.getElementById("p1TrickStack");
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = p1TrickStack.cardCount();
  for (i = 0; i < p1TrickStack.cardCount(); i++) {
    node = p1TrickStack.cardStack[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 1.00;
    }
  }

***************************************************************/
  // Note: Cards displayed in a form as String value of card
  var s;

  s = "";
  for (i = 0; i < deck.cardCount(); i++) {
    s += deck.cardStack[i].getCardNumber()+ " " +deck.cardStack[i].cardToString()+ " " +deck.cardStack[i].getCardFilename()+ " " +deck.cardStack[i].getCardColour()+ "\n";
  document.forms[0].elements[0].value = s;
}

  s = "";
  for (i = 0; i < trump.cardCount(); i++) {
    s += trump.cardStack[i].getCardNumber()+ " " +trump.cardStack[i].cardToString()+ " " +trump.cardStack[i].getCardFilename()+ " " +trump.cardStack[i].getCardColour()+ "\n";
  document.forms[0].elements[1].value = s;
}

  s = "";
  for (i = 0; i < player2Hand.cardCount(); i++) {
    s += player2Hand.cardStack[i].getCardNumber() + " " + player2Hand.cardStack[i].cardToString() + " " + player2Hand.cardStack[i].getCardFilename() + " " + player2Hand.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[2].value = s;
}

  s = "";
  for (i = 0; i < playerHand.cardCount(); i++) {
    s += playerHand.cardStack[i].getCardNumber() + " " +playerHand.cardStack[i].cardToString() + " " + playerHand.cardStack[i].getCardFilename() + " " + playerHand.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[3].value = s;
}

  s = "";
  for (i = 0; i < player3Hand.cardCount(); i++) {
    s += player3Hand.cardStack[i].getCardNumber() + " " + player3Hand.cardStack[i].cardToString() + " " + player3Hand.cardStack[i].getCardFilename() + " " + player3Hand.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[4].value = s;
}

  s = "";
  for (i = 0; i < player4Hand.cardCount(); i++) {
    s += player4Hand.cardStack[i].getCardNumber() + " " + player4Hand.cardStack[i].cardToString() + " " + player4Hand.cardStack[i].getCardFilename() + " " + player4Hand.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[5].value = s;
}

  s = "";
  for (i = 0; i < discards.cardCount(); i++) {
    s += discards.cardStack[i].getCardNumber() + " " + discards.cardStack[i].cardToString() + " " + discards.cardStack[i].getCardFilename() + " " + discards.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[6].value = s;
}
/***********************************
s = "";
  for (i = 0; i < p1TrickStack.cardCount(); i++) {
    s += p1TrickStack.cardStack[i].getCardNumber() + " " + p1TrickStack.cardStack[i].cardToString() + " " + p1TrickStack.cardStack[i].getCardFilename() + " " + p1TrickStack.cardStack[i].getCardColour() + "\n";
  document.forms[0].elements[7].value = s;
}
**************************************/

console.log("Displayed card images");

}

function canRobAce(cardStack) {

    var i;
    var canRobAce = false;

    for (i = 0; i < trump.cardStack.length; i++) {

      if (trump.cardStack[i].rankName() == "Ace") {
        //alert("You can ROB this ACE!");
        console.log("You can ROB this ACE!");
        canRobAce = true;

        }
    }
}

function canRobJoker(cardStack) {

    var i;
    var canRobJoker = false;

    for (i = 0; i < trump.cardStack.length; i++) {

      if (trump.cardStack[i].rankName() == "Joker") {

        //alert("You can ROB this JOKER!");
        canRobJoker = true;
        console.log("YOU can ROB the JOKER!");
      }
    }
}

function canRobTrump(cardStack) {

    var i;
    var canRobTrump = false;
    var trumpSuitForRound;

    for (i = 0; i < trump.cardStack.length; i++) {

      trumpSuitForRound = trump.cardStack[i].getCardSuit();
      //console.log("TRUMP suit: " +trumpSuitForRound);
    }
    
    for (i = 0; i < playerHand.cardStack.length; i++) {

      if (playerHand.cardStack[i].rankName() == "Ace" && playerHand.cardStack[i].getCardSuit() == trumpSuitForRound) {
        //alert("You can ROB this TRUMP card!"); 
        canRobTrump = true;
        console.log("You can ROB this TRUMP card!");
      }
    }

    for (i = 0; i < player2Hand.cardStack.length; i++) {

      if (player2Hand.cardStack[i].rankName() == "Ace" && player2Hand.cardStack[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER TWO can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER TWO can ROB the TRUMP card!");
      }
    }

    for (i = 0; i < player3Hand.cardStack.length; i++) {

      if (player3Hand.cardStack[i].rankName() == "Ace" && player3Hand.cardStack[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER THREE can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER THREE can ROB the TRUMP card!");
      }
    }

    for (i = 0; i < player4Hand.cardStack.length; i++) {

      if (player4Hand.cardStack[i].rankName() == "Ace" && player4Hand.cardStack[i].getCardSuit() == trumpSuitForRound) {
        //alert("PLAYER FOUR can ROB the TRUMP card!"); 
        canRobTrump = true;
        console.log("PLAYER FOUR can ROB the TRUMP card!");
      }
    }

}

function player1Turn (e, cardStack, CardObj) {

  var i;
  var player1Turn = false;
  var p1HandIndex = []

  for (i = 0; i < playerHand.cardStack[i].length; i++) {
      var c = playerHand.cardStack[i].getCardFilename();
      console.log(c);
      playerTurn(true);
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
    this.playerHand.cardStack[i] = t;

  }

}
*/


//})(window, document);

window.addEventListener('DOMContentLoaded', function() {

  var dealbtn = document.getElementById('dealbtn');
  var shufflebtn = document.getElementById('shufflebtn');
  var discardbtn = document.getElementById('discardbtn');
  var resetbtn = document.getElementById('resetbtn');
  var newgamebtn = document.getElementById('newgamebtn');

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

  newgamebtn.addEventListener('click', function(e) {
    newGame(); 
  });

});

window.onload = function() {

  init();

};
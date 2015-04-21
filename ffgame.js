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
//var p1SelectTemp, p2SelectTemp, p3SelectTemp, p4SelectTemp;
var p1TrickStack, p2TrickStack, p3TrickStack, p4TrickStack;

function init() {

  deck = new Stack();
  trump = new Stack();
  playerHand = new Stack();
  player2Hand = new Stack();
  player3Hand = new Stack();
  player4Hand = new Stack();
  p1TrickStack = new Stack();
  p2TrickStack = new Stack();
  p3TrickStack = new Stack();
  p4TrickStack = new Stack();
  //p1SelectTemp = new Stack();
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
  //var index;


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
      console.log("Dealt card to trump stack")
      //trump.index++;
      //console.log("TR index pos: " +index);
      console.log("Index: " +trump.cardDeck.length);
      }
    for (i = 0; i < 5; i++) {
      playerHand.addCard(deck.deal());
      //playerHand.index++;
      //console.log("P1 index pos: " +index);
      console.log("Dealt card to P1");
      }
      for (i = 0; i < playerHand.cardDeck.length; i++) {
            
             c = playerHand.cardDeck[i].getCardFilename();
              console.log(c);
              console.log("Index: " +i);
            }
    for (i = 0; i < 5; i++) {
      player2Hand.addCard(deck.deal());
      //player2Hand.index++;
      //console.log("P2 index pos: " +index);
      console.log("Dealt card to P2");
      }
      for (i = 0; i < player2Hand.cardDeck.length; i++) {
            
             c = player2Hand.cardDeck[i].getCardFilename();
              console.log(c);
              console.log("Index: " +i);
            }
    for (i = 0; i < 5; i++) {
      player3Hand.addCard(deck.deal());
      //console.log("P3 index pos: " +index);
      //player3Hand.index++
      console.log("Dealt card to P3");
      }
      for (i = 0; i < player3Hand.cardDeck.length; i++) {
            
             c = player3Hand.cardDeck[i].getCardFilename();
              console.log(c);
              console.log("Index: " +i);
            }
    for (i = 0; i < 5; i++) {
      player4Hand.addCard(deck.deal());
      //player4Hand.index++;
      //console.log("P4 index pos: " +index);
      console.log("Dealt card to P4");
      }
      for (i = 0; i < player4Hand.cardDeck.length; i++) {
            
             c = player4Hand.cardDeck[i].getCardFilename();
              console.log(c);
              console.log("Index: " +i);
            }

      display();
      console.log("Finished dealing card to all players");
  }

  var trumpSuitForRound, trumpCardForRound;

    for (i = 0; i < trump.cardDeck.length; i++) {
    trumpSuitForRound = trump.cardDeck[i].getCardSuit();
    trumpCardForRound = trump.cardDeck[i].cardToString();
      //alert("TRUMP SUIT = " +trumpSuitForRound);
      //chrome.app.createWindow('trumpSuitPopup')
      console.log("Trump Suit: " +trumpSuitForRound);
      console.log("Trump Card: " +trumpCardForRound);
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
  discards.combine(p1TrickStack);
  discards.combine(p2TrickStack);
  discards.combine(p3TrickStack);
  discards.combine(p4TrickStack);
  deck.combine(discards);
  shuffle();
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
  deck.combine(p1TrickStack);
  deck.combine(p2TrickStack);
  deck.combine(p3TrickStack);
  deck.combine(p4TrickStack);
  deck.combine(discards);
  shuffle();
  display();
  console.log("Reset deck");
}

function newGame() {

  discards.combine(playerHand);
  discards.combine(player2Hand);
  discards.combine(player3Hand);
  discards.combine(player4Hand);

  
  /**
  * 
    if (p1SelectTemp.cardDeck === null) {
      return;
    }
    else {
      discards.combine(p1SelectTemp);
    }
    if (p2SelectTemp.cardDeck === null) {
      return;
    }
    else {
      discards.combine(p2SelectTemp);
    }
    if (p3SelectTemp.cardDeck === null) {
      return;
    }
    else {
      discards.combine(p3SelectTemp);
    }
    if (p4SelectTemp.cardDeck === null) {
      return;
    }
    else {
      discards.combine(p4SelectTemp);
    }
    * 
    **/

  discards.combine(trump);
  deck.combine(discards);
  shuffle();
  display();
  console.log("Reset deck and started new game");

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
  n = player2Hand.cardCount();
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

  // NOTE: NOT WORKING, breaks all the text box strings :(
  ///**
  left = 0;
  el = document.getElementById("p1TrickStack");
  if (el == null || el == undefined) {
    return;
  }
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = p1TrickStack.cardCount();
  for (i = 0; i < p1TrickStack.cardCount(); i++) {
    node = p1TrickStack.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("p2TrickStack");
  if (el == null || el == undefined) {
    return;
  }
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = p2TrickStack.cardCount();
  for (i = 0; i < p2TrickStack.cardCount(); i++) {
    node = p2TrickStack.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("p3TrickStack");
  if (el == null || el == undefined) {
    return;
  }
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = p3TrickStack.cardCount();
  for (i = 0; i < p3TrickStack.cardCount(); i++) {
    node = p3TrickStack.cardDeck[i].createNode();
    node.style.left = left + "em";
    el.appendChild(node);
    left += 0.10;
  }

  left = 0;
  el = document.getElementById("p4TrickStack");
  if (el == null || el == undefined) {
    return;
  }
  while (el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
  n = p4TrickStack.cardCount();
  for (i = 0; i < p4TrickStack.cardCount(); i++) {
    node = p4TrickStack.cardDeck[i].createNode();
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

s = "";
  for (i = 0; i < p1TrickStack.cardCount(); i++) {
    if (p1TrickStack.cardCount() == null) {
      return;
    }
    s += p1TrickStack.cardDeck[i].getCardNumber() + " " + p1TrickStack.cardDeck[i].cardToString() + " " + p1TrickStack.cardDeck[i].getCardFilename() + " " + p1TrickStack.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[7].value = s;
}

s = "";
  for (i = 0; i < p2TrickStack.cardCount(); i++) {
    if (p2TrickStack.cardCount() == null) {
      return;
    }
    s += p2TrickStack.cardDeck[i].getCardNumber() + " " + p2TrickStack.cardDeck[i].cardToString() + " " + p2TrickStack.cardDeck[i].getCardFilename() + " " + p2TrickStack.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[8].value = s;
}

s = "";
  for (i = 0; i < p3TrickStack.cardCount(); i++) {
    if (p3TrickStack.cardCount() == null) {
      return;
    }
    s += p3TrickStack.cardDeck[i].getCardNumber() + " " + p3TrickStack.cardDeck[i].cardToString() + " " + p3TrickStack.cardDeck[i].getCardFilename() + " " + p3TrickStack.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[9].value = s;
}

s = "";
  for (i = 0; i < p4TrickStack.cardCount(); i++) {
    if (p4TrickStack.cardCount() == null) {
      return;
    }
    s += p4TrickStack.cardDeck[i].getCardNumber() + " " + p4TrickStack.cardDeck[i].cardToString() + " " + p4TrickStack.cardDeck[i].getCardFilename() + " " + p4TrickStack.cardDeck[i].getCardColour() + "\n";
  document.forms[0].elements[10].value = s;
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
        //pickUpTrumpP1 = true;
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

/**
function pickUpTrumpP1(event, card, cardDeck) {

  pickUpTrumpP1 = true;

  console.log("Pick a card to exchange for trump card")
  var i, n;
  var exgDiscard;

  var el = event.target;

    var t = el.src;
            //console.log(t);
        // Displays the RS (R ='rank') and (S ='suit') string value of clicked card
        var burnedCard = t.substr(63, 2);
            console.log("Clicked : " +burnedCard.toUpperCase());


        for (i = 0; i < playerHand.cardDeck.length; i++) {
            card = playerHand.cardDeck[i];
                  console.log(card);

                  //
                  // Check if player 1 is robbing trump
                  //

                    discards.combine.playerHand.cardDeck[i];
                    console.log("Discarded: " +c);
                    playerHand.combine(trump);
 

                }
                display();


}
**/


function playCard(event, card, cardDeck) {

  var i, c;
  console.log("# CLICK_EVENT #");

  var el = event.target;
  console.log(el);
  var sourcePlayer = el.parentNode.parentNode.parentNode.id;
        console.log("Source player: " +sourcePlayer);
  var t = el.src;
            //console.log(t);
        // Displays the RS (R ='rank') and (S ='suit') string value of clicked card
        var clickedCard = t.substr(63, 2);
            console.log("Clicked : " +clickedCard.toUpperCase());
        //var cTemp = el.cloneNode(false);

        // Check who clicked a card
        if (sourcePlayer === "playerHand"&& clickedCard.toUpperCase() === c) {
          // DO SOME STUFF
          var p = playerHand.cardDeck.length;
          console.log("P1 hand length: " +p);
        }
        
          for (i = 0; i < playerHand.cardDeck.length; i++) {
            
              c = playerHand.cardDeck[i].getCardFilename();
              //console.log(c);
              //console.log("Index: " +i);

                if (sourcePlayer === "playerHand" && clickedCard.toUpperCase() === c) {

                  console.log("Card " +c+ " to move from position: " +i);
                  card = playerHand.cardDeck[i];
                  console.log(card);

                  //*
                  //* Attempt to move the clicked on card to play area and remove
                  //* from player's hand.
                  

                  //p1TrickStack.addCard(playerHand.cardDeck[i].deal());
                  p1TrickStack.addCard(card);
                  //console.log(p1TrickStack.cardDeck.length);
                  //p1TrickStack.draw(1);
                  console.log("Pushed " +c+ " to P1 play area");
                  //console.log("Updated P1 play area with selected card")
                  var n =i;
                  playerHand.removeCard(n);
                  console.log("Removed " +c+ " from position " +i);

                }

                //display();
            // Try to force an update of the display for p1TrickStack
            //displayP1Play();
          };

          
          if (sourcePlayer === "player2Hand" && clickedCard.toUpperCase() === c) {
          // DO SOME STUFF
          var p = player2Hand.cardDeck.length;
          console.log("P2 hand length: " +p);
        }
          for (i = 0; i < player2Hand.cardDeck.length; i++) {
            
              c = player2Hand.cardDeck[i].getCardFilename();
              //console.log(c);
              //console.log("Index: " +i);
            

                if (sourcePlayer === "player2Hand" && clickedCard.toUpperCase() === c) {

                  console.log("Card " +c+ " to move from position: " +i);
                  card = player2Hand.cardDeck[i];
                  console.log(card);

                  
                  //* Attempt to move the clicked on card to play area and remove
                  //* from player's hand.
                  //* 
                  
                  //p1TrickStack.addCard(playerHand.cardDeck[i].deal());
                  p2TrickStack.addCard(card);
                  //console.log(p1TrickStack.cardDeck.length);
                  //p1TrickStack.draw(1);
                  console.log("Pushed " +c+ " to P2 play area");
                  //console.log("Updated P1 play area with selected card")
                  var n =i;
                  player2Hand.removeCard(n);
                  console.log("Removed " +c+ " from position " +i);

                }
                //display();
            // Try to force an update of the display for p1TrickStack
            //displayP1Play();
          };

          if (sourcePlayer === "player3Hand" && clickedCard.toUpperCase() === c) {
          // DO SOME STUFF
          var p = player3Hand.cardDeck.length;
          console.log("P3 hand length: " +p);
        }
          for (i = 0; i < player3Hand.cardDeck.length; i++) {
            
              c = player3Hand.cardDeck[i].getCardFilename();
              //console.log(c);
              //console.log("Index: " +i);
            

                if (sourcePlayer === "player3Hand" && clickedCard.toUpperCase() === c) {

                  console.log("Card " +c+ " to move from position: " +i);
                  card = player3Hand.cardDeck[i];
                  console.log(card);

                  
                  //* Attempt to move the clicked on card to play area and remove
                  //* from player's hand.
                  //* 
                  
                  //p1TrickStack.addCard(playerHand.cardDeck[i].deal());
                  p3TrickStack.addCard(card);
                  //console.log(p1TrickStack.cardDeck.length);
                  //p1TrickStack.draw(1);
                  console.log("Pushed " +c+ " to P3 play area");
                  //console.log("Updated P1 play area with selected card")
                  var n =i;
                  player3Hand.removeCard(n);
                  console.log("Removed " +c+ " from position " +i);

                }
                //display();
            // Try to force an update of the display for p1TrickStack
            //displayP1Play();
          };

          if (sourcePlayer === "player4Hand" && clickedCard.toUpperCase() === c) {
          // DO SOME STUFF
          var p = player4Hand.cardDeck.length;
          console.log("P4 hand length: " +p);
        }
          for (i = 0; i < player4Hand.cardDeck.length; i++) {
            
              c = player4Hand.cardDeck[i].getCardFilename();
              //console.log(c);
              //console.log("Index: " +i);
            

                if (sourcePlayer === "player4Hand" && clickedCard.toUpperCase() === c) {

                  console.log("Card " +c+ " to move from position: " +i);
                  card = player4Hand.cardDeck[i];
                  console.log(card);

                  
                  //* Attempt to move the clicked on card to play area and remove
                  //* from player's hand.
                  //* 
                  
                  //p1TrickStack.addCard(playerHand.cardDeck[i].deal());
                  p4TrickStack.addCard(card);
                  //console.log(p1TrickStack.cardDeck.length);
                  //p1TrickStack.draw(1);
                  console.log("Pushed " +c+ " to P4 play area");
                  //console.log("Updated P1 play area with selected card")
                  var n =i;
                  player4Hand.removeCard(n);
                  console.log("Removed " +c+ " from position " +i);

                }
                //display();
            // Try to force an update of the display for p1TrickStack
            //displayP1Play();
          };
          
          display();
  console.log("Finished playing card for " +sourcePlayer);

}

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
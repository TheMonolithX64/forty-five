// kHand.js

/**
   * Forty Five web app v0.1
   * @author Stephen Barry | Monolithic Games | Aug 22nd 2014
   * 
   * @fileoverview ffdeck.js - Javascript source code for deck, hand and stack 
   * definition, creation, and rendering the card image in a parent DIV element. 
   * Provides a number of functions() for querying, dealing, shuffling, adding
   * counting and discarding of card objects from the deck and players hands.
   * 
   */ 

//-----------------------------------------------------------------------------
// Deck constructor function.
//-----------------------------------------------------------------------------

function Hand (cardStack, CardObj, indexName, cardToString) {

  // Create an empty array of cards.
  this.Hand = Hand;
  this.cardStack = [];

  this.makeHand  = stackMakeHand;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.CardObj   = CardObj;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
  this.clickCard = clickCard;
  this.removeCard = removeCard;
  this.indexName = indexName;
  //this.checkHand = checkHand;
  //this.cardIndex = cardIndex;
}
//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeHand (n) {

  // EXAMPLE
  /**
   *
  // Example ranks array for rank
  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  // Example suits Array for suit
  var suits = new Array("C", "D", "H", "S");
  //var jokers = new Array("R");
  *
  */

  //WORK IN PROGRESS - NEW DECK IMPLEMENTATION

    var cardStack = []; 
    	this.cardStack[n] = cardStack;
         
         return cardStack;
}
//-----------------------------------------------------------------------------
// stackShuffle(n): Shuffles a stack of cards 'n' times. 
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// stackDeal(): Removes the first card in the stack and returns it.
//-----------------------------------------------------------------------------

function stackDeal () {

  if (this.cardStack.length > 0) {
    return this.cardStack.shift();
  }
  else {
    return null;
  }
}

//-----------------------------------------------------------------------------
// stackDraw(n): Removes the indicated card from the stack and returns it.
//-----------------------------------------------------------------------------

function stackDraw (n) {

  var card;

  if (n >= 0 && n < this.cardStack.length) {
    card = this.cardStack[n];
    this.cardStack.splice(n, 1);
  }
  else {
    card = null;
  }

  return card;
}

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard (Hand, Card) {

  this.cardStack.push(Card);
  console.log(Card);
}

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

function stackCombine (deck, Hand, cardStack) {

  this.cardStack = this.cardStack.concat(deck.cardStack);
  deck.cardStack = new Array();
}

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

function stackCardCount (Card) {

  return this.cardStack.length;
}  

//-----------------------------------------------------------------------------
// stackSelectCard(): Returns the selected card for play from players Hand.
//-----------------------------------------------------------------------------

function clickCard (e, cardStack, CardObj) {


        var cid, clickedCard;
        var el = e.target;
        var text = el.getAttribute("id");
        //var c = el.id;
        var sourcePlayer = el.parentNode.parentNode.parentNode.id;
        console.log(el);
        console.log(sourcePlayer);

        //console.log(id);
        //image (face element) source
        console.log(text);

        var t = el.src;
            //console.log(t);
        // Displays the RS (R ='rank') and (S ='suit') string value of clicked card
        var clickedCard = t.substr(63, 2);
            console.log(clickedCard.toUpperCase());
            //console.log("SOURCE : " +c);
        //var p = el.cloneNode(el);

        /************************************************
          if (sourcePlayer === "playerHand") {
            playerHand.
          }

          if (sourcePlayer === "player2Hand") {
            //p2SelectTemp.appendChild(p);
            //var r = el.parentNode.removeChild(el);
          }

          if (sourcePlayer === "player3Hand") {
            //p3SelectTemp.appendChild(p);
            //var r = el.parentNode.removeChild(el);
          }

          if (sourcePlayer === "player4Hand") {
            //p4SelectTemp.appendChild(p);
            //var r = el.parentNode.removeChild(el);
          }
        ****************************************************/
        //this.p1SelectTemp.push(card);
        //this.playerHand.remove(el);
        console.log(sourcePlayer+ ' clicked the ' +clickedCard.toUpperCase());
}

//-----------------------------------------------------------------------------
// removeCard(): Removes the selected card after playing from players Hand.
//-----------------------------------------------------------------------------

function removeCard (CardObj) {

  this.cardStack.remove(CardObj);
  
}

//-----------------------------------------------------------------------------
// : Removes the selected card after playing from players Hand.
//-----------------------------------------------------------------------------
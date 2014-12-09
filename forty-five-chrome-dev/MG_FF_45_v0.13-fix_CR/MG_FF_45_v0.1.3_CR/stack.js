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

function Stack (cardStack, CardObj) {

  // Create an empty array of cards.

  this.cardStack = [];

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.CardObj   = CardObj;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
  this.clickCard = clickCard;
  this.removeCard = removeCard;
  //this.checkHand = checkHand;
  //this.cardIndex = cardIndex;
};
//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeDeck (n) {

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
         
         //var cardBack = new Card("B", "B", "0", "B")
         // SPADES
         tenS    = new CardObj("T", "S", 1, "TS", "BL");
         nineS   = new CardObj("9", "S", 2, "9S", "BL");
         eightS  = new CardObj("8", "S", 3, "8S", "BL");
         sevenS  = new CardObj("7", "S", 4, "7S", "BL");
         sixS    = new CardObj("6", "S", 5, "6S", "BL");
         fiveS   = new CardObj("5", "S", 6, "5S", "BL");
         fourS   = new CardObj("4", "S", 7, "4S", "BL");
         threeS  = new CardObj("3", "S", 8, "3S", "BL");
         twoS    = new CardObj("2", "S", 9, "2S", "BL");
         jackS   = new CardObj("J", "S", 10, "JS", "BL");
         queenS  = new CardObj("Q", "S", 11, "QS", "BL");
         kingS   = new CardObj("K", "S", 12, "KS", "BL");
         aceS    = new CardObj("A", "S", 13, "AS", "BL");
         // CLUBS
         tenC    = new CardObj("T", "C", 14, "TC", "BL");
         nineC   = new CardObj("9", "C", 15, "9C", "BL");
         eightC  = new CardObj("8", "C", 16, "8C", "BL");
         sevenC  = new CardObj("7", "C", 17, "7C", "BL");
         sixC    = new CardObj("6", "C", 18, "6C", "BL");
         fiveC   = new CardObj("5", "C", 19, "5C", "BL");
         fourC   = new CardObj("4", "C", 20, "4C", "BL");
         threeC  = new CardObj("3", "C", 21, "3C", "BL");
         twoC    = new CardObj("2", "C", 22, "2C", "BL");
         jackC   = new CardObj("J", "C", 23, "JC", "BL");
         queenC  = new CardObj("Q", "C", 24, "QC", "BL");
         kingC   = new CardObj("K", "C", 25, "KC", "BL");
         aceC    = new CardObj("A", "C", 26, "AC", "BL");
         // DIAMONDS
         twoD    = new CardObj("2", "D", 27, "2D", "RD");
         threeD  = new CardObj("3", "D", 28, "3D", "RD");
         fourD   = new CardObj("4", "D", 29, "4D", "RD");
         fiveD   = new CardObj("5", "D", 30, "5D", "RD");
         sixD    = new CardObj("6", "D", 31, "6D", "RD");
         sevenD  = new CardObj("7", "D", 32, "7D", "RD");
         eightD  = new CardObj("8", "D", 33, "8D", "RD");
         nineD   = new CardObj("9", "D", 34, "9D", "RD");
         tenD    = new CardObj("T", "D", 35, "TD", "RD");
         jackD   = new CardObj("J", "D", 36, "JD", "RD");
         queenD  = new CardObj("Q", "D", 37, "QD", "RD");
         kingD   = new CardObj("K", "D", 38, "KD", "RD");
         aceD    = new CardObj("A", "D", 39, "AD", "RD");
         // HEARTS
         twoH    = new CardObj("2", "H", 40, "2H", "RD");
         threeH  = new CardObj("3", "H", 41, "3H", "RD");
         fourH   = new CardObj("4", "H", 42, "4H", "RD");
         fiveH   = new CardObj("5", "H", 43, "5H", "RD");
         sixH    = new CardObj("6", "H", 44, "6H", "RD");
         sevenH  = new CardObj("7", "H", 45, "7H", "RD");
         eightH  = new CardObj("8", "H", 46, "8H", "RD");
         nineH   = new CardObj("9", "H", 47, "9H", "RD");
         tenH    = new CardObj("T", "H", 48, "TH", "RD");
         jackH   = new CardObj("J", "H", 49, "JH", "RD");
         queenH  = new CardObj("Q", "H", 50, "QH", "RD");
         kingH   = new CardObj("K", "H", 51, "KH", "RD");
         aceH    = new CardObj("A", "H", 52, "AH", "RD");
         // JOKER
         joker   = new CardObj("JR", "TM", 53, "JR", "TM");
    
         this.cardStack.push(tenS);
         this.cardStack.push(nineS);
         this.cardStack.push(eightS);
         this.cardStack.push(sevenS);      
         this.cardStack.push(sixS);      
         this.cardStack.push(fiveS);
         this.cardStack.push(fourS);
         this.cardStack.push(threeS);
         this.cardStack.push(twoS);
         this.cardStack.push(jackS);
         this.cardStack.push(queenS);
         this.cardStack.push(kingS);
         this.cardStack.push(aceS);
         this.cardStack.push(tenC);
         this.cardStack.push(nineC);
         this.cardStack.push(eightC);
         this.cardStack.push(sevenC);
         this.cardStack.push(sixC);
         this.cardStack.push(fiveC);
         this.cardStack.push(fourC);
         this.cardStack.push(threeC);
         this.cardStack.push(twoC);
         this.cardStack.push(jackC);
         this.cardStack.push(queenC);
         this.cardStack.push(kingC);
         this.cardStack.push(aceC);
         this.cardStack.push(twoD);
         this.cardStack.push(threeD);
         this.cardStack.push(fourD);
         this.cardStack.push(fiveD);
         this.cardStack.push(sixD);
         this.cardStack.push(sevenD);
         this.cardStack.push(eightD);
         this.cardStack.push(nineD);
         this.cardStack.push(tenD);
         this.cardStack.push(jackD);
         this.cardStack.push(queenD);
         this.cardStack.push(kingD);
         this.cardStack.push(aceD);
         this.cardStack.push(twoH);
         this.cardStack.push(threeH);
         this.cardStack.push(fourH);
         this.cardStack.push(fiveH);
         this.cardStack.push(sixH);
         this.cardStack.push(sevenH);
         this.cardStack.push(eightH);
         this.cardStack.push(nineH);
         this.cardStack.push(tenH);
         this.cardStack.push(jackH);
         this.cardStack.push(queenH);
         this.cardStack.push(kingH);
         this.cardStack.push(aceH);
         this.cardStack.push(joker);
         //console.log()

       return cardStack;

   };   

//-----------------------------------------------------------------------------
// stackShuffle(n): Shuffles a stack of cards 'n' times. 
//-----------------------------------------------------------------------------

function stackShuffle (n) {

  var i, j, k;
  var temp;

  // Shuffle the stack 'n' times.

  for (i = 0; i < n; i++) {
    for (j = 0; j < this.cardStack.length; j++) {
      k = Math.floor(Math.random() * this.cardStack.length);
      temp = this.cardStack[j];
      this.cardStack[j] = this.cardStack[k];
      this.cardStack[k] = temp;
    }
  }
};

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
};

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
};

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard (CardObj) {

  this.cardStack.push(CardObj);
  console.log(CardObj);
};

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

function stackCombine (deck, cardStack) {

  this.cardStack = this.cardStack.concat(deck.cardStack);
  deck.cardStack = new Array();
};

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

function stackCardCount (CardObj) {

  return this.cardStack.length;
};   
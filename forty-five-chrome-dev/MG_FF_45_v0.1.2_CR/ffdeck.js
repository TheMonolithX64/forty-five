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

this.Stack = function () {

  // Create an empty array of cards.

  this.cardDeck = new Array();

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
  this.selectCard = selectCard;
  this.removeCard = removeCard;

};
//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

this.stackMakeDeck = function (n) {

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

    var cardDeck = new Array(); 
         
         //var cardBack = new Card("B", "B", "0", "B")
         // SPADES
         var tenS    = new Card("T", "S", 1, "TS", "BL");
         var nineS   = new Card("9", "S", 2, "9S", "BL");
         var eightS  = new Card("8", "S", 3, "8S", "BL");
         var sevenS  = new Card("7", "S", 4, "7S", "BL");
         var sixS    = new Card("6", "S", 5, "6S", "BL");
         var fiveS   = new Card("5", "S", 6, "5S", "BL");
         var fourS   = new Card("4", "S", 7, "4S", "BL");
         var threeS  = new Card("3", "S", 8, "3S", "BL");
         var twoS    = new Card("2", "S", 9, "2S", "BL");
         var jackS   = new Card("J", "S", 10, "JS", "BL");
         var queenS  = new Card("Q", "S", 11, "QS", "BL");
         var kingS   = new Card("K", "S", 12, "KS", "BL");
         var aceS    = new Card("A", "S", 13, "AS", "BL");
         // CLUBS
         var tenC    = new Card("T", "C", 14, "TC", "BL");
         var nineC   = new Card("9", "C", 15, "9C", "BL");
         var eightC  = new Card("8", "C", 16, "8C", "BL");
         var sevenC  = new Card("7", "C", 17, "7C", "BL");
         var sixC    = new Card("6", "C", 18, "6C", "BL");
         var fiveC   = new Card("5", "C", 19, "5C", "BL");
         var fourC   = new Card("4", "C", 20, "4C", "BL");
         var threeC  = new Card("3", "C", 21, "3C", "BL");
         var twoC    = new Card("2", "C", 22, "2C", "BL");
         var jackC   = new Card("J", "C", 23, "JC", "BL");
         var queenC  = new Card("Q", "C", 24, "QC", "BL");
         var kingC   = new Card("K", "C", 25, "KC", "BL");
         var aceC    = new Card("A", "C", 26, "AC", "BL");
         // DIAMONDS
         var twoD    = new Card("2", "D", 27, "2D", "RD");
         var threeD  = new Card("3", "D", 28, "3D", "RD");
         var fourD   = new Card("4", "D", 29, "4D", "RD");
         var fiveD   = new Card("5", "D", 30, "5D", "RD");
         var sixD    = new Card("6", "D", 31, "6D", "RD");
         var sevenD  = new Card("7", "D", 32, "7D", "RD");
         var eightD  = new Card("8", "D", 33, "8D", "RD");
         var nineD   = new Card("9", "D", 34, "9D", "RD");
         var tenD    = new Card("T", "D", 35, "TD", "RD");
         var jackD   = new Card("J", "D", 36, "JD", "RD");
         var queenD  = new Card("Q", "D", 37, "QD", "RD");
         var kingD   = new Card("K", "D", 38, "KD", "RD");
         var aceD    = new Card("A", "D", 39, "AD", "RD");
         // HEARTS
         var twoH    = new Card("2", "H", 40, "2H", "RD");
         var threeH  = new Card("3", "H", 41, "3H", "RD");
         var fourH   = new Card("4", "H", 42, "4H", "RD");
         var fiveH   = new Card("5", "H", 43, "5H", "RD");
         var sixH    = new Card("6", "H", 44, "6H", "RD");
         var sevenH  = new Card("7", "H", 45, "7H", "RD");
         var eightH  = new Card("8", "H", 46, "8H", "RD");
         var nineH   = new Card("9", "H", 47, "9H", "RD");
         var tenH    = new Card("T", "H", 48, "TH", "RD");
         var jackH   = new Card("J", "H", 49, "JH", "RD");
         var queenH  = new Card("Q", "H", 50, "QH", "RD");
         var kingH   = new Card("K", "H", 51, "KH", "RD");
         var aceH    = new Card("A", "H", 52, "AH", "RD");
         // JOKER
         var joker   = new Card("JR", "TM", 53, "JR", "TM");
    
         this.cardDeck.push(tenS);
         this.cardDeck.push(nineS);
         this.cardDeck.push(eightS);
         this.cardDeck.push(sevenS);      
         this.cardDeck.push(sixS);      
         this.cardDeck.push(fiveS);
         this.cardDeck.push(fourS);
         this.cardDeck.push(threeS);
         this.cardDeck.push(twoS);
         this.cardDeck.push(jackS);
         this.cardDeck.push(queenS);
         this.cardDeck.push(kingS);
         this.cardDeck.push(aceS);
         this.cardDeck.push(tenC);
         this.cardDeck.push(nineC);
         this.cardDeck.push(eightC);
         this.cardDeck.push(sevenC);
         this.cardDeck.push(sixC);
         this.cardDeck.push(fiveC);
         this.cardDeck.push(fourC);
         this.cardDeck.push(threeC);
         this.cardDeck.push(twoC);
         this.cardDeck.push(jackC);
         this.cardDeck.push(queenC);
         this.cardDeck.push(kingC);
         this.cardDeck.push(aceC);
         this.cardDeck.push(twoD);
         this.cardDeck.push(threeD);
         this.cardDeck.push(fourD);
         this.cardDeck.push(fiveD);
         this.cardDeck.push(sixD);
         this.cardDeck.push(sevenD);
         this.cardDeck.push(eightD);
         this.cardDeck.push(nineD);
         this.cardDeck.push(tenD);
         this.cardDeck.push(jackD);
         this.cardDeck.push(queenD);
         this.cardDeck.push(kingD);
         this.cardDeck.push(aceD);
         this.cardDeck.push(twoH);
         this.cardDeck.push(threeH);
         this.cardDeck.push(fourH);
         this.cardDeck.push(fiveH);
         this.cardDeck.push(sixH);
         this.cardDeck.push(sevenH);
         this.cardDeck.push(eightH);
         this.cardDeck.push(nineH);
         this.cardDeck.push(tenH);
         this.cardDeck.push(jackH);
         this.cardDeck.push(queenH);
         this.cardDeck.push(kingH);
         this.cardDeck.push(aceH);
         this.cardDeck.push(joker);

       return cardDeck;

   };   

//-----------------------------------------------------------------------------
// stackShuffle(n): Shuffles a stack of cards 'n' times. 
//-----------------------------------------------------------------------------

this.stackShuffle = function (n) {

  var i, j, k;
  var temp;

  // Shuffle the stack 'n' times.

  for (i = 0; i < n; i++) {
    for (j = 0; j < this.cardDeck.length; j++) {
      k = Math.floor(Math.random() * this.cardDeck.length);
      temp = this.cardDeck[j];
      this.cardDeck[j] = this.cardDeck[k];
      this.cardDeck[k] = temp;
    }
  }
};

//-----------------------------------------------------------------------------
// stackDeal(): Removes the first card in the stack and returns it.
//-----------------------------------------------------------------------------

this.stackDeal = function () {

  if (this.cardDeck.length > 0) {
    return this.cardDeck.shift();
  }
  else {
    return null;
  }
};

//-----------------------------------------------------------------------------
// stackDraw(n): Removes the indicated card from the stack and returns it.
//-----------------------------------------------------------------------------

this.stackDraw = function (n) {

  var card;

  if (n >= 0 && n < this.cardDeck.length) {
    card = this.cardDeck[n];
    this.cardDeck.splice(n, 1);
  }
  else {
    card = null;
  }

  return card;
};

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

this.stackAddCard = function (card) {

  this.cardDeck.push(card);
};

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

this.stackCombine = function (deck) {

  this.cardDeck = this.cardDeck.concat(deck.cardDeck);
  deck.cardDeck = new Array();
};

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

this.stackCardCount = function () {

  return this.cardDeck.length;
};   

//-----------------------------------------------------------------------------
// stackSelectCard(): Returns the selected card for play from players Hand.
//-----------------------------------------------------------------------------

this.selectCard = function (card) {

  this.cardDeck.push(card);

}

//-----------------------------------------------------------------------------
// removeCard(): Removes the selected card after playing from players Hand.
//-----------------------------------------------------------------------------

this.removeCard = function (card) {

  this.cardDeck.remove(card);
  
}

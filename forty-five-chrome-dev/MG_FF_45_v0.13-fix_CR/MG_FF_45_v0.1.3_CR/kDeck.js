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

function Stack (cardStack, Card, indexName) {

  // Create an empty array of cards.

  this.cardStack = [];

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.Card   	 = Card;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
  this.clickCard = clickCard;
  this.removeCard = removeCard;
  this.indexName = indexName;
  //this.checkHand = checkHand;
  //this.cardIndex = cardIndex;
};

function stackMakeDeck (n) {

	//var n = 1;

	var cardStack= [];

	//var cardBack = new Card("B", "B", "0", "B")
         // SPADES
         tenS    = new Card("T", "S", 1, "TS", "BL");
         nineS   = new Card("9", "S", 2, "9S", "BL");
         eightS  = new Card("8", "S", 3, "8S", "BL");
         sevenS  = new Card("7", "S", 4, "7S", "BL");
         sixS    = new Card("6", "S", 5, "6S", "BL");
         fiveS   = new Card("5", "S", 6, "5S", "BL");
         fourS   = new Card("4", "S", 7, "4S", "BL");
         threeS  = new Card("3", "S", 8, "3S", "BL");
         twoS    = new Card("2", "S", 9, "2S", "BL");
         jackS   = new Card("J", "S", 10, "JS", "BL");
         queenS  = new Card("Q", "S", 11, "QS", "BL");
         kingS   = new Card("K", "S", 12, "KS", "BL");
         aceS    = new Card("A", "S", 13, "AS", "BL");
         // CLUBS
         tenC    = new Card("tenC","T", "C", 14, "TC", "BL");
         nineC   = new Card("nineC","9", "C", 15, "9C", "BL");
         eightC  = new Card("eightC","8", "C", 16, "8C", "BL");
         sevenC  = new Card("sevenC","7", "C", 17, "7C", "BL");
         sixC    = new Card("sixC","6", "C", 18, "6C", "BL");
         fiveC   = new Card("fiveC","5", "C", 19, "5C", "BL");
         fourC   = new Card("fourC","4", "C", 20, "4C", "BL");
         threeC  = new Card("threeC","3", "C", 21, "3C", "BL");
         twoC    = new Card("twoC","2", "C", 22, "2C", "BL");
         jackC   = new Card("jackC","J", "C", 23, "JC", "BL");
         queenC  = new Card("queenC","Q", "C", 24, "QC", "BL");
         kingC   = new Card("kingC","K", "C", 25, "KC", "BL");
         aceC    = new Card("aceC","A", "C", 26, "AC", "BL");
         // DIAMONDS
         twoD    = new Card("twoD","2", "D", 27, "2D", "RD");
         threeD  = new Card("threeD","3", "D", 28, "3D", "RD");
         fourD   = new Card("fourD","4", "D", 29, "4D", "RD");
         fiveD   = new Card("fiveD","5", "D", 30, "5D", "RD");
         sixD    = new Card("sixD","6", "D", 31, "6D", "RD");
         sevenD  = new Card("sevenD","7", "D", 32, "7D", "RD");
         eightD  = new Card("eightD","8", "D", 33, "8D", "RD");
         nineD   = new Card("nineD","9", "D", 34, "9D", "RD");
         tenD    = new Card("tenD","T", "D", 35, "TD", "RD");
         jackD   = new Card("jackD","J", "D", 36, "JD", "RD");
         queenD  = new Card("queenD","Q", "D", 37, "QD", "RD");
         kingD   = new Card("kingD","K", "D", 38, "KD", "RD");
         aceD    = new Card("aceD","A", "D", 39, "AD", "RD");
         // HEARTS
         twoH    = new Card("twoH","2", "H", 40, "2H", "RD");
         threeH  = new Card("threeH","3", "H", 41, "3H", "RD");
         fourH   = new Card("fourH","4", "H", 42, "4H", "RD");
         fiveH   = new Card("fiveH","5", "H", 43, "5H", "RD");
         sixH    = new Card("sixH","6", "H", 44, "6H", "RD");
         sevenH  = new Card("sevenH","7", "H", 45, "7H", "RD");
         eightH  = new Card("eightH","8", "H", 46, "8H", "RD");
         nineH   = new Card("nineH","9", "H", 47, "9H", "RD");
         tenH    = new Card("tenH","T", "H", 48, "TH", "RD");
         jackH   = new Card("jackH","J", "H", 49, "JH", "RD");
         queenH  = new Card("queenH","Q", "H", 50, "QH", "RD");
         kingH   = new Card("kingH","K", "H", 51, "KH", "RD");
         aceH    = new Card("aceH","A", "H", 52, "AH", "RD");
         // JOKER
         joker   = new Card("joker","JR", "TM", 53, "JR", "TM");
    
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
       console.log("Created and populated the Deck");

}

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
}

//-----------------------------------------------------------------------------
// stackDraw(n): Removes the indicated card from the stack and returns it.
//-----------------------------------------------------------------------------

function stackDraw (n, Card) {

  var Card;

  if (n >= 0 && n < this.cardStack.length) {
    card = this.cardStack[n];
    this.cardStack.splice(n, 1);
  }
  else {
    card = null;
  }

  return Card;
}

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard (Card) {

  this.cardStack.push(Card);
  console.log(Card);
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

function stackCardCount (Card) {

  return this.cardStack.length;
};   

//-----------------------------------------------------------------------------
// stackSelectCard(): Returns the selected card for play from players Hand.
//-----------------------------------------------------------------------------

function clickCard (e, cardStack, Hand, Card) {


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

function removeCard (Card) {

  this.cardStack.remove(Card);
  
}

//-----------------------------------------------------------------------------
// : Removes the selected card after playing from players Hand.
//-----------------------------------------------------------------------------
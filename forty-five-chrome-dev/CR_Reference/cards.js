/**
   * Forty Five web app v0.1
   * @author Stephen Barry | Monolithic Games | Aug 22nd 2014
   * 
   * @fileoverview cards,js - Javascript source code for card object definition,
   * creation, and rendering the card image in a DIV element. Provides a number
   * of functions() for querying specific values and meta data from card obects. 
   * 
   */ 

//-----------------------------------------------------------------------------
// Card constructor function.
//-----------------------------------------------------------------------------

   function Card(rank, suit, cardNumber, cardFilename, cardColour) {

	/**
	 * @param rank() A rank value of a card object (1-10, J, Q, K, A)
	 * @param suit() A suit value of a card object (Spades, Clubs, Diamonds & Hearts)
	 * @param cardNumber() A static numerial representaion of a card object for reference
	 * @param cardFilename() A string value of a card image file name
   * @param cardColour()
   * @param cardToString() A static string value of both rank and suit of a card
   * @param rankName() A String variable descibing the rank of the card
   * @param 
	 */ 

	this.rank = rank;
	this.suit = suit;
	this.cardNumber = cardNumber;
	this.cardFilename = cardFilename;
  this.cardColour = cardColour;

  this.rankName = rankName;
	this.cardToString = cardToString;
  this.getCardSuit = getCardSuit;
  this.getCardNumber = getCardNumber;
  this.getCardFilename = getCardFilename;
  this.getCardColour = getCardColour;
	this.createNode = cardCreateNode;



 function rankName()  {
  /**
   * Generates a String represention of a card obejct
   * from the rank values.
   */

  var rank;

  switch (this.rank) {
    case "A" :
      rank = "Ace";
      break;
    case "2" :
      rank = "Two";
      break;
    case "3" :
      rank = "Three";
      break;
    case "4" :
      rank = "Four";
      break;
    case "5" :
      rank = "Five";
      break;
    case "6" :
      rank = "Six";
      break;
    case "7" :
      rank = "Seven";
      break;
    case "8" :
      rank = "Eight";
      break;
    case "9" :
      rank = "Nine";
      break;
    case "T" :
      rank = "Ten";
      break;
    case "J" :
      rank = "Jack"
      break;
    case "Q" :
      rank = "Queen"
      break;
    case "K" :
      rank = "King"
      break;
    case "JR" :
      rank = "Joker"
      break;
    //case "B" :
    //  rank = "Back"
    //  break;
    default :
      rank = null;
      break;
  }

  return rank;

}

function getCardSuit() {

    var suit;

    switch (this.suit) {
    case "C" :
      suit = "CLUBS";
      break;
    case "D" :
      suit = "DIAMONDS"
      break;
    case "H" :
      suit = "HEARTS"
      break;
    case "S" :
      suit = "SPADES"
      break;
    case "TM" :
      suit = "TRUMP"
      break;
    //case "B" :
    //  suit = "Back"
    //  break;
    default :
      suit = null;
      break;
  }

  return suit;

}

function cardToString()	{
	/**
	 * Generates a String represention of a card obejct
	 * from the rank and suit values.
	 */

	var rank, suit;

  switch (this.rank) {
    case "A" :
      rank = "Ace";
      break;
    case "2" :
      rank = "Two";
      break;
    case "3" :
      rank = "Three";
      break;
    case "4" :
      rank = "Four";
      break;
    case "5" :
      rank = "Five";
      break;
    case "6" :
      rank = "Six";
      break;
    case "7" :
      rank = "Seven";
      break;
    case "8" :
      rank = "Eight";
      break;
    case "9" :
      rank = "Nine";
      break;
    case "T" :
      rank = "Ten";
      break;
    case "J" :
      rank = "Jack"
      break;
    case "Q" :
      rank = "Queen"
      break;
    case "K" :
      rank = "King"
      break;
    case "JR" :
    	rank = "Joker"
    	break;
    //case "B" :
    //	rank = "Back"
    //	break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "C" :
      suit = "CLUBS";
      break;
    case "D" :
      suit = "DIAMONDS"
      break;
    case "H" :
      suit = "HEARTS"
      break;
    case "S" :
      suit = "SPADES"
      break;
    case "TM" :
      suit = "TRUMP"
      break;
    //case "B" :
    //  suit = "Back"
    //  break;
    default :
      suit = null;
      break;
  }

  if (rank == null || suit == null)
    return "";

  return rank + " of " + suit;
}

function getCardNumber() {

  var cardNumber;

  switch (this.cardNumber) {
    // For CARD_BACK_IMAGE
    //case "0" :
    //  cardNumber = "0"
    //  break;
    // For SPADES
    case 1 :
      cardNumber = 1;
      break;
    case 2 :
      cardNumber = 2;
      break;
    case 3 :
      cardNumber = 3;
      break;
    case 4 :
      cardNumber = 4;
      break;
    case 5 :
      cardNumber = 5;
      break;
    case 6 :
      cardNumber = 6;
      break;
    case 7 :
      cardNumber = 7;
      break;
    case 8 :
      cardNumber = 8;
      break;
    case 9 :
      cardNumber = 9;
      break;
    case 10 :
      cardNumber = 10;
      break;
    case 11 :
      cardNumber = 11;
      break;
    case 12 :
      cardNumber = 12;
      break;
    case 13 :
      cardNumber = 13;
      break;
    // For CLUBS
    case 14 :
      cardNumber = 14;
      break;
    case 15 :
      cardNumber = 15;
      break;
    case 16 :
      cardNumber = 16;
      break;
    case 17 :
      cardNumber = 17;
      break;
    case 18 :
      cardNumber = 18;
      break;
    case 19 :
      cardNumber = 19;
      break;
    case 20 :
      cardNumber = 20;
      break;
    case 21 :
      cardNumber = 21;
      break;
    case 21 :
      cardNumber = 21;
      break;
    case 22 :
      cardNumber = 22;
      break;
    case 23 :
      cardNumber = 23;
      break;
    case 24 :
      cardNumber = 24;
      break;
    case 25 :
      cardNumber = 25;
      break;
    // For DIAMONDS
    case 26 :
      cardNumber = 26;
      break;
    case 27 :
      cardNumber = 27;
      break;
    case 28 :
      cardNumber = 28;
      break;
    case 29 :
      cardNumber = 29;
      break;
    case 30 :
      cardNumber = 30;
      break;
    case 31 :
      cardNumber = 31;
      break;
    case 32 :
      cardNumber = 32;
      break;
    case 33 :
      cardNumber = 33;
      break;
    case 34 :
      cardNumber = 34;
      break;
    case 35 :
      cardNumber = 35;
      break;
    case 36 :
      cardNumber = 36;
      break;
    case 37 :
      cardNumber = 37;
      break;
    case 38 :
      cardNumber = 38;
      break;
    // For HEARTS
    case 39 :
      cardNumber = 39;
      break;
    case 40 :
      cardNumber = 40;
      break;
    case 41 :
      cardNumber = 41;
      break;
    case 42 :
      cardNumber = 42;
      break;
    case 43 :
      cardNumber = 43;
      break;
    case 44 :
      cardNumber = 44;
      break;
    case 45 :
      cardNumber = 45;
      break;
    case 46 :
      cardNumber = 46;
      break;
    case 47 :
      cardNumber = 47;
      break;
    case 48 :
      cardNumber = 48;
      break;
    case 49 :
      cardNumber = 49;
      break;
    case 50 :
      cardNumber = 50;
      break;
    case 51 :
      cardNumber = 51;
      break;
    case 52 :
      cardNumber = 52;
      break;
      // For JOKER
    case 53 :
      cardNumber = 53;
      break;
    default :
      cardNumber = null;
      break;
  }

  return cardNumber;
}

function getCardFilename() {

  var cardFilename;

  switch (this.cardFilename) {
    // For CARD_BACK_IMAGE
    //case "B" :
    //  cardNumber = "B"
    //  break;
    // For SPADES
    case "TS" :
      cardFilename = "TS";
      break;
    case "9S" :
      cardFilename = "9S";
      break;
    case "8S" :
      cardFilename = "8S";
      break;
    case "7S" :
      cardFilename = "7S";
      break;
    case "6S" :
      cardFilename = "6S";
      break;
    case "5S" :
      cardFilename = "5S";
      break;
    case "4S" :
      cardFilename = "4S";
      break;
    case "3S" :
      cardFilename = "3S";
      break;
    case "2S" :
      cardFilename = "2S";
      break;
    case "JS" :
      cardFilename = "JS";
      break;
    case "QS" :
      cardFilename = "QS";
      break;
    case "KS" :
      cardFilename = "KS";
      break;
    case "AS" :
      cardFilename = "AS";
      break;
    // For CLUBS
    case "TC" :
      cardFilename = "TC";
      break;
    case "9C" :
      cardFilename = "9C";
      break;
    case "8C" :
      cardFilename = "8C";
      break;
    case "7C" :
      cardFilename = "7C";
      break;
    case "6C" :
      cardFilename = "6C";
      break;
    case "5C" :
      cardFilename = "5C";
      break;
    case "4C" :
      cardFilename = "4C";
      break;
    case "3C" :
      cardFilename = "3C";
      break;
    case "2C" :
      cardFilename = "2C";
      break;
    case "JC" :
      cardFilename = "JC";
      break;
    case "QC" :
      cardFilename = "QC";
      break;
    case "KC" :
      cardFilename = "KC";
      break;
    case "AC" :
      cardFilename = "AC";
      break;
    // For DIAMONDS
    case "2D" :
      cardFilename = "2D";
      break;
    case "3D" :
      cardFilename = "3D";
      break;
    case "4D" :
      cardFilename = "4D";
      break;
    case "5D" :
      cardFilename = "5D";
      break;
    case "6D" :
      cardFilename = "6D";
      break;
    case "7D" :
      cardFilename = "7D";
      break;
    case "8D" :
      cardFilename = "8D";
      break;
    case "9D" :
      cardFilename = "9D";
      break;
    case "TD" :
      cardFilename = "TD";
      break;
    case "JD" :
      cardFilename = "JD";
      break;
    case "QD" :
      cardFilename = "QD";
      break;
    case "KD" :
      cardFilename = "KD";
      break;
    case "AD" :
      cardFilename = "AD";
      break;
    // For HEARTS
    case "2H" :
      cardFilename= "2H";
      break;
    case "3H" :
      cardFilename = "3H";
      break;
    case "4H" :
      cardFilename = "4H";
      break;
    case "5H" :
      cardFilename = "5H";
      break;
    case "6H" :
      cardFilename = "6H";
      break;
    case "7H" :
      cardFilename = "7H";
      break;
    case "8H" :
      cardFilename = "8H";
      break;
    case "9H" :
      cardFilename = "9H";
      break;
    case "TH" :
      cardFilename = "TH";
      break;
    case "JH" :
      cardFilename = "JH";
      break;
    case "QH" :
      cardFilename = "QH";
      break;
    case "KH" :
      cardFilename = "KH";
      break;
    case "AH" :
      cardFilename = "AH";
      break;
      // For JOKER
    case "JR" :
      cardFilename = "JR";
      break;
    default :
      cardFilename = null;
      break;
  }

  return cardFilename;
}

function getCardColour() {

  var cardColour;

    switch (this.cardColour) {

      case "RD" :
          cardColour = "RED";
          break;
      case "BL" :
          cardColour = "BLACK";
          break;
      case "TM" :
          cardColour = "TRUMP";
      default :
          cardColour = null;
          break;
      }

      return cardColour; 

    }
/**
 *
function cardImage() {

  var cardImage;

      
 *
 */

/**
 * cardCreateNode(): Returns a DIV node which can be used to display a card
 * on a page.
 */

/*
    var cardImage;

      //cardImage = "cardImg" + this.getCardNumber();

    // back / face down image
      var cardImg0 = new Image(); cardImg0.src= "cardimages/b.png";

    // SPADES card images
      var cardImg1 = new Image(); cardImg1.src= "cardimages/ts.png";
      var cardImg2 = new Image(); cardImg2.src= "cardimages/9s.png";
      var cardImg3 = new Image(); cardImg3.src= "cardimages/8s.png";
      var cardImg4 = new Image(); cardImg4.src= "cardimages/7s.png";
      var cardImg5 = new Image(); cardImg5.src= "cardimages/6s.png";
      var cardImg6 = new Image(); cardImg6.src= "cardimages/5s.png";
      var cardImg7 = new Image(); cardImg7.src= "cardimages/4s.png";
      var cardImg8 = new Image(); cardImg8.src= "cardimages/3s.png";
      var cardImg9 = new Image(); cardImg9.src= "cardimages/2s.png";
      var cardImg10 = new Image(); cardImg10.src= "cardimages/js.png";
      var cardImg11 = new Image(); cardImg11.src= "cardimages/qs.png";
      var cardImg12 = new Image(); cardImg12.src= "cardimages/ks.png";
      var cardImg13 = new Image(); cardImg13.src= "cardimages/as.png";
    // CLUBS
      var cardImg14 = new Image(); cardImg14.src= "cardimages/tc.png";
      var cardImg15 = new Image(); cardImg15.src= "cardimages/9c.png";
      var cardImg16 = new Image(); cardImg16.src= "cardimages/8c.png";
      var cardImg17 = new Image(); cardImg17.src= "cardimages/7c.png";
      var cardImg18 = new Image(); cardImg18.src= "cardimages/6c.png";
      var cardImg19 = new Image(); cardImg19.src= "cardimages/5c.png";
      var cardImg20 = new Image(); cardImg20.src= "cardimages/4c.png";
      var cardImg21 = new Image(); cardImg21.src= "cardimages/3c.png";
      var cardImg22 = new Image(); cardImg22.src= "cardimages/2c.png";
      var cardImg23 = new Image(); cardImg23.src= "cardimages/jc.png";
      var cardImg24 = new Image(); cardImg24.src= "cardimages/qc.png";
      var cardImg25 = new Image(); cardImg25.src= "cardimages/kc.png";
      var cardImg26 = new Image(); cardImg26.src= "cardimages/ac.png";
    // DIAMONDS
      var cardImg27 = new Image(); cardImg27.src= "cardimages/2d.png";
      var cardImg28 = new Image(); cardImg28.src= "cardimages/3d.png";
      var cardImg29 = new Image(); cardImg29.src= "cardimages/4d.png";
      var cardImg30 = new Image(); cardImg30.src= "cardimages/5d.png";
      var cardImg31 = new Image(); cardImg31.src= "cardimages/6d.png";
      var cardImg32 = new Image(); cardImg32.src= "cardimages/7d.png";
      var cardImg33 = new Image(); cardImg33.src= "cardimages/8d.png";
      var cardImg34 = new Image(); cardImg34.src= "cardimages/9d.png";
      var cardImg35 = new Image(); cardImg35.src= "cardimages/td.png";
      var cardImg36 = new Image(); cardImg36.src= "cardimages/jd.png";
      var cardImg37 = new Image(); cardImg37.src= "cardimages/qd.png";
      var cardImg38 = new Image(); cardImg38.src= "cardimages/kd.png";
      var cardImg39 = new Image(); cardImg39.src= "cardimages/ad.png";
    // HEARTS
      var cardImg40 = new Image(); cardImg40.src= "cardimages/2h.png";
      var cardImg41 = new Image(); cardImg41.src= "cardimages/3h.png";
      var cardImg42 = new Image(); cardImg42.src= "cardimages/4h.png";
      var cardImg43 = new Image(); cardImg43.src= "cardimages/5h.png";
      var cardImg44 = new Image(); cardImg44.src= "cardimages/6h.png";
      var cardImg45 = new Image(); cardImg45.src= "cardimages/7h.png";
      var cardImg46 = new Image(); cardImg46.src= "cardimages/8h.png";
      var cardImg47 = new Image(); cardImg47.src= "cardimages/9h.png";
      var cardImg48 = new Image(); cardImg48.src= "cardimages/th.png";
      var cardImg49 = new Image(); cardImg49.src= "cardimages/jh.png";
      var cardImg50 = new Image(); cardImg50.src= "cardimages/qh.png";
      var cardImg51 = new Image(); cardImg51.src= "cardimages/kh.png";
      var cardImg52 = new Image(); cardImg52.src= "cardimages/ah.png";
    // JOKER
      var cardImg53 = new Image(); cardImg53.src= "cardimages/jrt.png";

     //return cardImage;
*/

function cardCreateNode() {

  var cardNode, frontNode, tempNode;
  var indexStr,

  // This is the main node, a DIV tag.

  cardNode = document.createElement("DIV");
  cardNode.className = "card";

   // For face cards (Jack, Queen or King), create and add the proper image.

  //frontNode = document.createElement("DIV");
  //frontNode.className = "front";

    // FOR DRAWING IMAGES
  tempNode = document.createElement("IMG");
  tempNode.className = "face";

  // 
  indexStr = this.cardNumber;
  // FOR BACK OF CARD
  //if (this.cardNumber == "0")
    //tempNode.src = "cardimages/b.png";
    // SPADES
  if (this.cardNumber == "1")
    tempNode.src = "cardimages/ts.png";
  if (this.cardNumber == "2")
    tempNode.src = "cardimages/9s.png";
  if (this.cardNumber == "3")
    tempNode.src = "cardimages/8s.png";
  if (this.cardNumber == "4")
    tempNode.src = "cardimages/7s.png";
  if (this.cardNumber == "5")
    tempNode.src = "cardimages/6s.png";
  if (this.cardNumber == "6")
    tempNode.src = "cardimages/5s.png";
  if (this.cardNumber == "7")
    tempNode.src = "cardimages/4s.png";
  if (this.cardNumber == "8")
    tempNode.src = "cardimages/3s.png";
  if (this.cardNumber == "9")
    tempNode.src = "cardimages/2s.png";
  if (this.cardNumber == "10")
    tempNode.src = "cardimages/js.png";
  if (this.cardNumber == "11")
    tempNode.src = "cardimages/qs.png";
  if (this.cardNumber == "12")
    tempNode.src = "cardimages/ks.png";
  if (this.cardNumber == "13")
    tempNode.src = "cardimages/as.png";

// CLUBS
  if (this.cardNumber == "14")
    tempNode.src = "cardimages/tc.png";
  if (this.cardNumber == "15")
    tempNode.src = "cardimages/9c.png";
  if (this.cardNumber == "16")
    tempNode.src = "cardimages/8c.png";
  if (this.cardNumber == "17")
    tempNode.src = "cardimages/7c.png";
  if (this.cardNumber == "18")
    tempNode.src = "cardimages/6c.png";
  if (this.cardNumber == "19")
    tempNode.src = "cardimages/5c.png";
  if (this.cardNumber == "20")
    tempNode.src = "cardimages/4c.png";
  if (this.cardNumber == "21")
    tempNode.src = "cardimages/3c.png";
  if (this.cardNumber == "22")
    tempNode.src = "cardimages/2c.png";
  if (this.cardNumber == "23")
    tempNode.src = "cardimages/jc.png";
  if (this.cardNumber == "24")
    tempNode.src = "cardimages/qc.png";
  if (this.cardNumber == "25")
    tempNode.src = "cardimages/kc.png";
  if (this.cardNumber == "26")
    tempNode.src = "cardimages/ac.png";

// DIAMONDS
  if (this.cardNumber == "27")
    tempNode.src = "cardimages/2d.png";
  if (this.cardNumber == "28")
    tempNode.src = "cardimages/3d.png";
  if (this.cardNumber == "29")
    tempNode.src = "cardimages/4d.png";
  if (this.cardNumber == "30")
    tempNode.src = "cardimages/5d.png";
  if (this.cardNumber == "31")
    tempNode.src = "cardimages/6d.png";
  if (this.cardNumber == "32")
    tempNode.src = "cardimages/7d.png";
  if (this.cardNumber == "33")
    tempNode.src = "cardimages/8d.png";
  if (this.cardNumber == "34")
    tempNode.src = "cardimages/9d.png";
  if (this.cardNumber == "35")
    tempNode.src = "cardimages/td.png";
  if (this.cardNumber == "36")
    tempNode.src = "cardimages/jd.png";
  if (this.cardNumber == "37")
    tempNode.src = "cardimages/qd.png";
  if (this.cardNumber == "38")
    tempNode.src = "cardimages/kd.png"; 
  if (this.cardNumber == "39")
    tempNode.src = "cardimages/ad.png"; 

 // HEARTS 
  if (this.cardNumber == "40")
    tempNode.src = "cardimages/2h.png";
  if (this.cardNumber == "41")
    tempNode.src = "cardimages/3h.png";
  if (this.cardNumber == "42")
    tempNode.src = "cardimages/4h.png";
  if (this.cardNumber == "43")
    tempNode.src = "cardimages/5h.png";
  if (this.cardNumber == "44")
    tempNode.src = "cardimages/6h.png";
  if (this.cardNumber == "45")
    tempNode.src = "cardimages/7h.png";
  if (this.cardNumber == "46")
    tempNode.src = "cardimages/8h.png";
  if (this.cardNumber == "47")
    tempNode.src = "cardimages/9h.png";
  if (this.cardNumber == "48")
    tempNode.src = "cardimages/th.png";
  if (this.cardNumber == "49")
    tempNode.src = "cardimages/jh.png";
  if (this.cardNumber == "50")
    tempNode.src = "cardimages/qh.png";
  if (this.cardNumber == "51")
    tempNode.src = "cardimages/kh.png";
  if (this.cardNumber == "52")
    tempNode.src = "cardimages/ah.png";

// JOKER
  if (this.cardNumber == "53")
    tempNode.src = "cardimages/jrt.png";

  
  //frontNode.appendChild(tempNode);

// Add front node to the card node.

  cardNode.appendChild(tempNode);

  // Return the card node.

  return cardNode;
}

}
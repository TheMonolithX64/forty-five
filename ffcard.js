/**
   * Forty Five web app v0.1
   * @author Stephen Barry | Monolithic Games | Aug 22nd 2014
   * 
   * @fileoverview card,js - Javascript source code for card object definition,
   * creation, and rendering the card image in a DIV element. Provides a number
   * of functions() for querying specific values and meta data from card obects. 
   * 
   */ 

//-----------------------------------------------------------------------------
// @param Card card object constructor
//-----------------------------------------------------------------------------

   var Card = function (rank, suit, cardNumber, cardFilename, cardColour, suitValue) {

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
  //document.getElementById('face').addEventListener('click', clickCard, false);
  
  this.rank = rank;
  this.suit = suit;
  this.cardNumber = cardNumber;
  this.cardFilename = cardFilename;
  this.cardColour = cardColour;
  this.getSuitValue = suitValue;

  this.rankName = rankName;
  this.cardToString = cardToString;
  this.getCardSuit = getCardSuit;
  this.getCardNumber = getCardNumber;
  this.getCardFilename = getCardFilename;
  this.getCardColour = getCardColour;
  this.createNode = cardCreateNode;
  this.clickCard = clickCard;

};

//-----------------------------------------------------------------------------
// @ param rankName rank getter
//-----------------------------------------------------------------------------

 this.rankName  = function (rank)  {
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
      rank = "Jack";
      break;
    case "Q" :
      rank = "Queen";
      break;
    case "K" :
      rank = "King";
      break;
    case "JR" :
      rank = "Joker";
      break;
    //case "B" :
    //  rank = "Back"
    //  break;
    default :
      rank = null;
      break;
  }

  return rank;

};

this.getCardSuit = function (suit) {

    var suit;

    switch (this.suit) {
    case "C" :
      suit = "CLUBS";
      break;
    case "D" :
      suit = "DIAMONDS";
      break;
    case "H" :
      suit = "HEARTS";
      break;
    case "S" :
      suit = "SPADES";
      break;
    case "TM" :
      suit = "TRUMP";
      break;
    //case "B" :
    //  suit = "Back"
    //  break;
    default :
      suit = null;
      break;
  }

  return suit;

};

this.cardToString = function (rank, suit) {
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
      rank = "Jack";
      break;
    case "Q" :
      rank = "Queen";
      break;
    case "K" :
      rank = "King";
      break;
    case "JR" :
      rank = "Joker";
      break;
    //case "B" :
    //  rank = "Back"
    //  break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "C" :
      suit = "CLUBS";
      break;
    case "D" :
      suit = "DIAMONDS";
      break;
    case "H" :
      suit = "HEARTS";
      break;
    case "S" :
      suit = "SPADES";
      break;
    case "TM" :
      suit = "TRUMP";
      break;
    //case "B" :
    //  suit = "Back"
    //  break;
    default :
      suit = null;
      break;
  }

  if (rank === null || suit === null) {
        return "";
      }

  return rank + " of " + suit;
};

this.getCardNumber = function (cardNumber) {

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
};

this.getCardFilename = function (cardFilename) {

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
};

this.getCardColour = function (cardColour) {

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
          break;
      default :
          cardColour = null;
          break;
      }

      return cardColour; 

};

this.cardCreateNode = function (card) {

  //var cardNode, frontNode, tempNode;
  var indexStr, card;

  // This is the main node, a DIV tag.

  cardNode = document.createElement("DIV");
  cardNode.className = "card";

   // For face cards (Jack, Queen or King), create and add the proper image.

  frontNode = document.createElement("DIV");
  frontNode.className = "front";

    // FOR DRAWING IMAGES
  tempNode = document.createElement("IMG");
  tempNode.className = "face";

  // 
  indexStr = this.cardNumber;
  // FOR BACK OF CARD
  //if (this.cardNumber == "0")
    //tempNode.src = "cardimages/b.png";
    // SPADES
  if (this.cardNumber == "1") {
    tempNode.src = "cardimages/ts.png";
  }
  if (this.cardNumber == "2") {
    tempNode.src = "cardimages/9s.png";
  }
  if (this.cardNumber == "3") {
    tempNode.src = "cardimages/8s.png";
  }
  if (this.cardNumber == "4") {
    tempNode.src = "cardimages/7s.png";
  }
  if (this.cardNumber == "5") {
    tempNode.src = "cardimages/6s.png";
  }
  if (this.cardNumber == "6") {
    tempNode.src = "cardimages/5s.png";
  }
  if (this.cardNumber == "7") {
    tempNode.src = "cardimages/4s.png";
  }
  if (this.cardNumber == "8") {
    tempNode.src = "cardimages/3s.png";
  }
  if (this.cardNumber == "9") {
    tempNode.src = "cardimages/2s.png";
  }
  if (this.cardNumber == "10") {
    tempNode.src = "cardimages/js.png";
  }
  if (this.cardNumber == "11") {
    tempNode.src = "cardimages/qs.png";
  }
  if (this.cardNumber == "12") {
    tempNode.src = "cardimages/ks.png";
  }
  if (this.cardNumber == "13") {
    tempNode.src = "cardimages/as.png";
  }

// CLUBS
  if (this.cardNumber == "14") {
    tempNode.src = "cardimages/tc.png";
  }
  if (this.cardNumber == "15") {
    tempNode.src = "cardimages/9c.png";
  }
  if (this.cardNumber == "16") {
    tempNode.src = "cardimages/8c.png";
  }
  if (this.cardNumber == "17") {
    tempNode.src = "cardimages/7c.png";
  }
  if (this.cardNumber == "18") {
    tempNode.src = "cardimages/6c.png";
  }
  if (this.cardNumber == "19") {
    tempNode.src = "cardimages/5c.png";
  }
  if (this.cardNumber == "20") {
    tempNode.src = "cardimages/4c.png";
  }
  if (this.cardNumber == "21") {
    tempNode.src = "cardimages/3c.png";
  }
  if (this.cardNumber == "22") {
    tempNode.src = "cardimages/2c.png";
  }
  if (this.cardNumber == "23") {
    tempNode.src = "cardimages/jc.png";
  }
  if (this.cardNumber == "24") {
    tempNode.src = "cardimages/qc.png";
  }
  if (this.cardNumber == "25") {
    tempNode.src = "cardimages/kc.png";
  }
  if (this.cardNumber == "26") {
    tempNode.src = "cardimages/ac.png";
  }

// DIAMONDS
  if (this.cardNumber == "27") {
    tempNode.src = "cardimages/2d.png";
  }
  if (this.cardNumber == "28") {
    tempNode.src = "cardimages/3d.png";
  }
  if (this.cardNumber == "29") {
    tempNode.src = "cardimages/4d.png";
  }
  if (this.cardNumber == "30") {
    tempNode.src = "cardimages/5d.png";
  }
  if (this.cardNumber == "31") {
    tempNode.src = "cardimages/6d.png";
  }
  if (this.cardNumber == "32") {
    tempNode.src = "cardimages/7d.png";
  }
  if (this.cardNumber == "33") {
    tempNode.src = "cardimages/8d.png";
  }
  if (this.cardNumber == "34") {
    tempNode.src = "cardimages/9d.png";
  }
  if (this.cardNumber == "35") {
    tempNode.src = "cardimages/td.png";
  }
  if (this.cardNumber == "36") {
    tempNode.src = "cardimages/jd.png";
  }
  if (this.cardNumber == "37") {
    tempNode.src = "cardimages/qd.png";
  }
  if (this.cardNumber == "38") {
    tempNode.src = "cardimages/kd.png";
    } 
  if (this.cardNumber == "39") {
    tempNode.src = "cardimages/ad.png";
    } 

 // HEARTS 
  if (this.cardNumber == "40") {
    tempNode.src = "cardimages/2h.png";
  }
  if (this.cardNumber == "41") {
    tempNode.src = "cardimages/3h.png";
  }
  if (this.cardNumber == "42") {
    tempNode.src = "cardimages/4h.png";
  }
  if (this.cardNumber == "43") {
    tempNode.src = "cardimages/5h.png";
  }
  if (this.cardNumber == "44") {
    tempNode.src = "cardimages/6h.png";
  }
  if (this.cardNumber == "45") {
    tempNode.src = "cardimages/7h.png";
  }
  if (this.cardNumber == "46") {
    tempNode.src = "cardimages/8h.png";
  }
  if (this.cardNumber == "47") {
    tempNode.src = "cardimages/9h.png";
  }
  if (this.cardNumber == "48") {
    tempNode.src = "cardimages/th.png";
  }
  if (this.cardNumber == "49") {
    tempNode.src = "cardimages/jh.png";
  }
  if (this.cardNumber == "50") {
    tempNode.src = "cardimages/qh.png";
  }
  if (this.cardNumber == "51") {
    tempNode.src = "cardimages/kh.png";
  }
  if (this.cardNumber == "52") {
    tempNode.src = "cardimages/ah.png";
  }

// JOKER
  if (this.cardNumber == "53") {
    tempNode.src = "cardimages/jrt.png";
  }

  
  frontNode.appendChild(tempNode);

// Add front node to the card node.

  cardNode.appendChild(frontNode);

  // Return the card node.
  //cardNode.onclick = clickCard;
  //face.onclick = clickCard;
  //cardNode.addEventListener('click', clickCard, true);

  // Working \/
  cardNode.addEventListener('click', playCard);

  //Test
  //cardNode.addEventListener('click', p1PlayCard);
  //cardNode.addEventListener('click', p2PlayCard, true);

  return cardNode;
};

this.getSuitValue = function (suitValue) {

  var suitValue;

    switch (this.suitValue) {
      case 1:
        suitValue = 1;
        break;
      case 2:
        suitValue = 2;
        break;
      case 3:
        suitValue = 3;
        break;
      case 4:
        suitValue = 4;
        break;
      case 5:
        suitValue = 5;
        break;
      default :
        suitValue = 0;
        break;
    }

    return suitValue;
};

this.clickCard  = function (e) {

        var i;
        var clickedCard;
        var el = e.target;
        var text = el.getAttribute("class");
  
        var sourcePlayer = el.parentNode.parentNode.parentNode.id;
        //console.log(el);
        console.log(sourcePlayer);
        //image (face element) source
        console.log(text);

        var t = el.src;
            //console.log(t);
        // Displays the RS (R ='rank') and (S ='suit') string value of clicked card
        var clickedCard = t.substr(63, 2);
            console.log(clickedCard.toUpperCase());

        // p is a clone of the clicked card image
        var p = el.cloneNode(false);

          if (sourcePlayer === "playerHand") {

            // CLONE NODE and REMOVE CHILD #UGLY METHOD
            p1SelectTemp.appendChild(p);
            //this.cardDeck.push(card);
            //Temporarily remove the played card
            // #Note: calling display() shows the played
            //        card still in hand.
            //var r = el.parentNode.removeChild(el);
            var r = el.parentNode.removeChild(el);
            
          }

          if (sourcePlayer === "player2Hand") {
            p2SelectTemp.appendChild(p);
            var r = el.parentNode.removeChild(el);
          }

          if (sourcePlayer === "player3Hand") {
            p3SelectTemp.appendChild(p);
            var r = el.parentNode.removeChild(el);
          }

          if (sourcePlayer === "player4Hand") {
            p4SelectTemp.appendChild(p);
            var r = el.parentNode.removeChild(el);
          }
        
        //this.p1SelectTemp.push(card);
        //this.playerHand.remove(el);
        console.log(sourcePlayer+ ' played the ' +clickedCard.toUpperCase());

}
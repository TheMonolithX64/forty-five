// kCard.js - simple card object holding two ariables and three methods

function Card (rank, suit, cardNumber, cardCreateNode) {

	this.rank = rank;
	this.suit = suit;

	this.cardToString = cardToString;
}

Card.prototype.rank = function() {
	this.rank = rank;
	return rank;
}

Card.prototype.suit = function() {
	this.suit = suit;
	return suit;
}

Card.prototype.cardNumber = function() {
	this.cardNumber = cardNumber;
	return cardNumber;
}

Card.prototype.cardCreateNode = function() {
	
	//var cardNode, frontNode, tempNode;
  var indexStr;

  // This is the main node, a DIV tag.

  cardNode = document.createElement("DIV");
  cardNode.className = "cardNode";

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
  if (this.cardNumber == "1") {
    tempNode.src = "cardimages/ts.png";
    tempNode.setAttribute("id", "tenS");
  }
  if (this.cardNumber == "2") {
    tempNode.src = "cardimages/9s.png";
    tempNode.setAttribute("id", "nineS");
  }
  if (this.cardNumber == "3") {
    tempNode.src = "cardimages/8s.png";
    tempNode.setAttribute("id", "eigthS");
  }
  if (this.cardNumber == "4") {
    tempNode.src = "cardimages/7s.png";
    tempNode.setAttribute("id", "sevenS");
  }
  if (this.cardNumber == "5") {
    tempNode.src = "cardimages/6s.png";
    tempNode.setAttribute("id", "sixS");
  }
  if (this.cardNumber == "6") {
    tempNode.src = "cardimages/5s.png";
    tempNode.setAttribute("id", "fiveS");
  }
  if (this.cardNumber == "7") {
    tempNode.src = "cardimages/4s.png";
    tempNode.setAttribute("id", "fourS");
  }
  if (this.cardNumber == "8") {
    tempNode.src = "cardimages/3s.png";
    tempNode.setAttribute("id", "threeS");
  }
  if (this.cardNumber == "9") {
    tempNode.src = "cardimages/2s.png";
    tempNode.setAttribute("id", "twoS");
  }
  if (this.cardNumber == "10") {
    tempNode.src = "cardimages/js.png";
    tempNode.setAttribute("id", "jackS");
  }
  if (this.cardNumber == "11") {
    tempNode.src = "cardimages/qs.png";
    tempNode.setAttribute("id", "queenS");
  }
  if (this.cardNumber == "12") {
    tempNode.src = "cardimages/ks.png";
    tempNode.setAttribute("id", "kingS");
  }
  if (this.cardNumber == "13") {
    tempNode.src = "cardimages/as.png";
    tempNode.setAttribute("id", "aceS");
  }

// CLUBS
  if (this.cardNumber == "14") {
    tempNode.src = "cardimages/tc.png";
    tempNode.setAttribute("id", "tenC");
  }
  if (this.cardNumber == "15") {
    tempNode.src = "cardimages/9c.png";
    tempNode.setAttribute("id", "nineC");
  }
  if (this.cardNumber == "16") {
    tempNode.src = "cardimages/8c.png";
    tempNode.setAttribute("id", "eigthC");
  }
  if (this.cardNumber == "17") {
    tempNode.src = "cardimages/7c.png";
    tempNode.setAttribute("id", "sevenC");
  }
  if (this.cardNumber == "18") {
    tempNode.src = "cardimages/6c.png";
    tempNode.setAttribute("id", "sixC");
  }
  if (this.cardNumber == "19") {
    tempNode.src = "cardimages/5c.png";
    tempNode.setAttribute("id", "fiveC");
  }
  if (this.cardNumber == "20") {
    tempNode.src = "cardimages/4c.png";
    tempNode.setAttribute("id", "fourC");
  }
  if (this.cardNumber == "21") {
    tempNode.src = "cardimages/3c.png";
    tempNode.setAttribute("id", "threeC");
  }
  if (this.cardNumber == "22") {
    tempNode.src = "cardimages/2c.png";
    tempNode.setAttribute("id", "twoC");
  }
  if (this.cardNumber == "23") {
    tempNode.src = "cardimages/jc.png";
    tempNode.setAttribute("id", "jackC");
  }
  if (this.cardNumber == "24") {
    tempNode.src = "cardimages/qc.png";
    tempNode.setAttribute("id", "queenC");
  }
  if (this.cardNumber == "25") {
    tempNode.src = "cardimages/kc.png";
    tempNode.setAttribute("id", "kingC");
  }
  if (this.cardNumber == "26") {
    tempNode.src = "cardimages/ac.png";
    tempNode.setAttribute("id", "aceC");
  }

// DIAMONDS
  if (this.cardNumber == "27") {
    tempNode.src = "cardimages/2d.png";
    tempNode.setAttribute("id", "twoD");
  }
  if (this.cardNumber == "28") {
    tempNode.src = "cardimages/3d.png";
    tempNode.setAttribute("id", "threeD");
  }
  if (this.cardNumber == "29") {
    tempNode.src = "cardimages/4d.png";
    tempNode.setAttribute("id", "fourD");
  }
  if (this.cardNumber == "30") {
    tempNode.src = "cardimages/5d.png";
    tempNode.setAttribute("id", "fiveD");
  }
  if (this.cardNumber == "31") {
    tempNode.src = "cardimages/6d.png";
    tempNode.setAttribute("id", "sixD");
  }
  if (this.cardNumber == "32") {
    tempNode.src = "cardimages/7d.png";
    tempNode.setAttribute("id", "sevenD");
  }
  if (this.cardNumber == "33") {
    tempNode.src = "cardimages/8d.png";
    tempNode.setAttribute("id", "eigthD");
  }
  if (this.cardNumber == "34") {
    tempNode.src = "cardimages/9d.png";
    tempNode.setAttribute("id", "nineD");
  }
  if (this.cardNumber == "35") {
    tempNode.src = "cardimages/td.png";
    tempNode.setAttribute("id", "tenD");
  }
  if (this.cardNumber == "36") {
    tempNode.src = "cardimages/jd.png";
    tempNode.setAttribute("id", "jackD");
  }
  if (this.cardNumber == "37") {
    tempNode.src = "cardimages/qd.png";
    tempNode.setAttribute("id", "queenD");
  }
  if (this.cardNumber == "38") {
    tempNode.src = "cardimages/kd.png";
    tempNode.setAttribute("id", "kingD");
    } 
  if (this.cardNumber == "39") {
    tempNode.src = "cardimages/ad.png";
    tempNode.setAttribute("id", "aceD");
    } 

 // HEARTS 
  if (this.cardNumber == "40") {
    tempNode.src = "cardimages/2h.png";
    tempNode.setAttribute("id", "twoH");
  }
  if (this.cardNumber == "41") {
    tempNode.src = "cardimages/3h.png";
    tempNode.setAttribute("id", "threeH");
  }
  if (this.cardNumber == "42") {
    tempNode.src = "cardimages/4h.png";
    tempNode.setAttribute("id", "fourH");
  }
  if (this.cardNumber == "43") {
    tempNode.src = "cardimages/5h.png";
    tempNode.setAttribute("id", "fiveH");
  }
  if (this.cardNumber == "44") {
    tempNode.src = "cardimages/6h.png";
    tempNode.setAttribute("id", "sixH");
  }
  if (this.cardNumber == "45") {
    tempNode.src = "cardimages/7h.png";
    tempNode.setAttribute("id", "sevenH");
  }
  if (this.cardNumber == "46") {
    tempNode.src = "cardimages/8h.png";
    tempNode.setAttribute("id", "eigthH");
  }
  if (this.cardNumber == "47") {
    tempNode.src = "cardimages/9h.png";
    tempNode.setAttribute("id", "nineH");
  }
  if (this.cardNumber == "48") {
    tempNode.src = "cardimages/th.png";
    tempNode.setAttribute("id", "tenH");
  }
  if (this.cardNumber == "49") {
    tempNode.src = "cardimages/jh.png";
    tempNode.setAttribute("id", "jackH");
  }
  if (this.cardNumber == "50") {
    tempNode.src = "cardimages/qh.png";
    tempNode.setAttribute("id", "queenH");
  }
  if (this.cardNumber == "51") {
    tempNode.src = "cardimages/kh.png";
    tempNode.setAttribute("id", "kingH");
  }
  if (this.cardNumber == "52") {
    tempNode.src = "cardimages/ah.png";
    tempNode.setAttribute("id", "aceH");
  }

// JOKER
  if (this.cardNumber == "53") {
    tempNode.src = "cardimages/jrt.png";
    tempNode.setAttribute("id", "Joker");
  }
  
  //frontNode.appendChild(tempNode);

// Add front node to the card node.

  cardNode.appendChild(tempNode);

  // Return the card node.
  //cardNode.addEventListener('click', clickCard, true);
  cardNode.addEventListener('click', clickCard, true);
  //face.click(function() { clickCard(this); });

  return cardNode;
}

function cardToString(rank, suit) {

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

}
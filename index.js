let cardholderName = ""
let cardNumber = ""


// $("#name-error").hide()
const getCardHolderName = () => {
    /**
     * Function gets the user's card holder name
    */
    let userName  = $("#card-name").val();
    let nameTest = /^[a-zA-Z]+ [a-zA-Z]+$/; 

    if (nameTest.test(userName) == true || userName == "") {
        $("#name-error").css("display", "none")
        cardholderName = userName
    } else {
        $("#name-error").css("display", "inline")
    }
}

const getCardNumbers = () => {
    //Function gets the user card numbers and validates it using the validate card function//
    let userCardNum  = $("#card-num").val();
    if (validateCard(userCardNum) == true || userCardNum == "") {
        $("#card-error").css("display", "none")
        cardNumber = userCardNum
    } else {
        $("#card-error").css("display", "inline")
    }
}

const validateCard = (cardNumber) => {
    /**
        Function uses luhns algorithm to verify credit card number
    **/
    // Reverse the card number
    var reversed = cardNumber.split("").reverse().join("");
    
    // Multiply every other digit by 2, starting with the first digit
    var multiplied = [];
    for (var i = 0; i < reversed.length; i++) {
      var digit = parseInt(reversed[i]);
      if (i % 2 === 0) {
        digit *= 2;
      }
      multiplied.push(digit);
    }
  
    // Subtract 9 from any digits that are greater than 9
    var subtracted = multiplied.map(function(digit) {
      if (digit > 9) {
        digit -= 9;
      }
      return digit;
    });
  
    // Sum all the digits
    var sum = subtracted.reduce(function(acc, digit) {
      return acc + digit;
    }, 0);
  
    // If the sum is divisible by 10, the card number is valid
    return sum % 10 === 0;
  }
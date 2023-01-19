let cardholderName = ""
let cardNumber = ""



const getCardHolderName = () => {
    /**
     * Function gets the user's card holder name
    */
    let userName  = $("#card-name").val();
    let nameTest = /^[a-zA-Z]+ [a-zA-Z]+$/; 

    if (nameTest.test(userName) == true || userName == "") {  // cardholder name
          $("#name-error").css("display", "none")
          cardholderName = userName
    } else {
          $("#name-error").css("display", "inline")
    }
}

const getCardNumbers = () => {
    /*
      Function gets the user card numbers and validates it using the validate card function
    */
    let userCardNum  = $("#card-num").val();
    let x = userCardNum.replace(/\s/g, '')              // removes any trailing spaces
    if (validateCard(x) == true || userCardNum == "") {
        $("#card-error").css("display", "none")
        const formattedNums = x.match(/.{1,4}/g);
        cardNumber = formattedNums.join(" ")
        $("#card-num").val(cardNumber) 
    } 
    else {
        $("#card-error").css("display", "inline")
    }
}

const getExpDateandCVC = () => {
    let month = $("#mm").val()
    let year = $("#yy").val()
    let cvc = $("#cvc").val()

    if (1 <= month <= 12) {
        // for later
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
let cardholderName = ""
let cardNumber = ""
let month = ""
let year = ""
let cvc = ""




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

const getExpDateMonth = () => {
    let usrMonth = parseInt($("#mm").val())
    
    if (usrMonth <= 12 && usrMonth >= 1) {
        $("#mm-yy-error").css("display", "none")
        month = usrMonth
    } else {
        $("#mm-yy-error").css("display", "block").text("Invalid Month")
    }}

const getExpDateYear = () => {
    let usrYear = parseInt($("#yy").val())

    if (usrYear > 22 && usrYear.toString().length == 2) {
      $("#mm-yy-error").css("display", "none") 
      year = usrYear
    } else {
      $("#mm-yy-error").css("display", "block").text("Invalid Year")
}}

const getCVC = () => {
    let usrCVC = parseInt($("#cvc").val())

    if (usrCVC >= 100 && usrCVC <= 999) {
      $("#cvc-error").css("display", "none") 
      cvc = usrCVC
    } else {
      $("#cvc-error").css("display", "block")
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
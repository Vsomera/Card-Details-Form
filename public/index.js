const getCardHolderName = () => {
    /**
     * Function gets the user's card holder name
    */
    let userName  = $("#card-name").val();
    let nameTest = /^[a-zA-Z]+ [a-zA-Z]+$/;
     
    if (userName == " ") {
      $("#cardholderName").text("FirstName LastName")
    }

    if (nameTest.test(userName) == true) {  // validates cardholder name
          $("#cardholderName").text(userName)
          $("#name-error").css("display", "none")
    } else {
          $("#name-error").css("display", "inline")
          $("#cardholderName").text("FirstName LastName")
    }

}

const getCardNumbers = () => {
    /*
      Function gets the user card numbers and validates it using the validate card function
    */
    let userCardNum  = $("#card-num").val();
    let x = userCardNum.replace(/\s/g, '')              // removes any trailing spaces
    if (x.length == 16) {
        $("#card-error").css("display", "none")
        const formattedNums = x.match(/.{1,4}/g);
        $("#card-num").val(formattedNums.join(" "))
        $("#front-card-numbers").text(formattedNums.join(" "))
    } 
    else {
        $("#card-error").css("display", "inline")
        $("#front-card-numbers").text("0000 0000 0000 0000")
    }
}

const getExpDateMonth = () => {
    let usrMonth = parseInt($("#mm").val())

    if (usrMonth <= 12 && usrMonth >= 1) {
        $("#mm-yy-error").css("display", "none")
        $("#exp-date-mm").text(usrMonth)
    } else {
        $("#mm-yy-error").css("display", "block").text("Invalid Month")
    }
}

const getExpDateYear = () => {
  let usrYear = parseInt($("#yy").val())

  if (usrYear > 22 && usrYear.toString().length == 2) {
    $("#mm-yy-error").css("display", "none")
    $("#exp-date-yy").text(usrYear)
  } else {
    $("#mm-yy-error").css("display", "block").text("Invalid Year")
  }
}

const getCVC = () => {
    let usrCVC = parseInt($("#cvc").val())

    if (usrCVC >= 100 && usrCVC <= 999) {
      $("#cvc-error").css("display", "none") 
      $("#card-back-cvc").text(usrCVC)
    } else {
      $("#cvc-error").css("display", "block")
    }
}



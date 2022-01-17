const firstName = document.getElementById("firstName");
const emailAdress = document.getElementById("email");
const cardNumEntered = document.getElementById("cardDetails")


function validatorCaller() {
if(validateFormName(firstName) && validateFormEmail(emailAdress) && validateFormCard()) {
    return true;
} else {
    return false;
}
}


function validateFormName()  {
  var firstName = document.getElementById("firstName");
   var letters = /^[A-Za-z]+$/;

   if(!firstName.value.match(letters)) {      
       firstName.style.backgroundColor = "rgb(231,0,100)";
       alert("Please enter a valid name");
       return false;
      }     
   else {    
    firstName.style.backgroundColor = "rgb(137,200,46)"; 
     return true;
   }
  }


function validateFormEmail() {
 
  var regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
   if(!emailAdress.value.match(regex)) {
     
      emailAdress.style.backgroundColor = "rgb(231,0,100)";
       alert("Please enter a valid email address");       
      return false;
     }     
   else {
    emailAdress.style.backgroundColor = "rgb(137,200,46)"; 
     return true;
   }
}


function luhnValidator(value) {
  // accept only digits, dashes or spaces
    
  if (!value){
   return false;
  }
      if (/[^0-9-\s]+/.test(value)) return false;
  
  // The Luhn Algorithm. It's so pretty.
      var nCheck = 0, nDigit = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
              nDigit = parseInt(cDigit, 10);
  
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
  
          nCheck += nDigit;
          bEven = !bEven;
      }
        return (nCheck % 10) == 0;
    }
   
    
function validateFormCard() {
  
  if (luhnValidator(cardNumEntered.value)) {
    cardNumEntered.style.backgroundColor = "rgb(137,200,46)"; 
    alert("Form submitted")
    window.open("mailto:test@dn-uk.com?subject=Form%20data&body=First%20Name:%20" + firstName.value + "%20Email:%20" + emailAdress.value + "%20Card:%20" + cardNumEntered.value);
    return true;
  } else {    
  cardNumEntered.style.backgroundColor = "rgb(231,0,100)";
    alert("Please enter a valid Credit card number")
    return false;
  }
}
// subject=Form data&body=${firstName}'

// console.log("the console log for card validator itself = " + luhnValidator("4417 1234 5678 9113"));











 

//4417 1234 5678 9113
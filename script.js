function validateFormName()
  {
  var firstName = document.getElementById("firstName")
   var letters = /^[A-Za-z]+$/;
   
///^[A-Za-z][0-9]+$@./

   if(!firstName.value.match(letters))
     {
       alert("Please enter your name");

      return false;
     }
     
   else {
     true;
   }
  }


// function validateFormEmail()
// {
//   var emailAdress = document.getElementById("email")
//    var email = /^[A-Za-z]+$/;

//    if(!emailAdress.value.match(email))
//      {
//        alert("Please enter your name");

//       return false;
//      }
     
//    else {
//      true;
//    }
//   }

   ///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/





       
  

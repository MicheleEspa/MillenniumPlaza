

function empty() { 
  alert ("This product is out of stock. We apologize for the inconvenience.");
}

function available() { 
  var name = window.prompt ("This product is available. Please enter your name:");
  if(name == '') {
    alert("Please, you have to enter some characters for the name."); 
    return false;}
  else {
    var address = window.prompt ("Now please enter your Home address:");
    if(address == '') {
      alert("Please, you have to enter some characters for the Home address."); 
      return false;}
    else {
      var mailValid ="NotValid";
      while (mailValid == "NotValid") { 
        var mail = window.prompt ("Last thing, your E-Mail:");
        if(mail=='') {
          alert("Please, you have to enter some characters for the E-Mail.");
          mailValid ="NotValid";
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
          alert("The E-Mail address you entered is valid.");
          mailValid = "Valid";
        }
        else {
          alert("The E-Mail address you entered is invalid.");
          mailValid ="NotValid";
      }

      }
      var order ="NotValid";
      while (order == "NotValid") {
        quantity = 5;
        var units = window.prompt ("how many units of this product do you want to buy?");
        if (units <= quantity && units > 0) {
          order = "Valid";
        }
        else if (units > quantity) {
          alert("Sorry, we don't have that many units of this product. \nYou should remove at least " + (units - quantity) + " Units to continue the purchase.");
          order ="NotValid";
        }
        else {
          order ="NotValid";
        }
      }

      alert ("*====== SUMMARY ======* \n -NAME: " + name + "\n -HOME ADDRESS: " + address + "\n -E-MAIL: " + mail + "\n -UNITS: " + units)
      alert("Thank You for your purchase, " + name + ". \nWe have sent a confirmation E-Mail to your address.")  
    }
    }
  }


function mostra() {
  document.getElementById("oggettoInterattivo").style.display="block";
  document.getElementById("Window").style.display="block";
  }
    
function nascondi() {
  document.getElementById("oggettoInterattivo").style.display="none";
  document.getElementById("Window").style.display="none";
  }
  


function age() {
  var agecheck = "NotValid";
  while (agecheck == "NotValid") {
    var age = window.prompt ("Enter your Age:");
    if ( age == '') {
      agecheck = "Valid";
    }
    else if (age >= 18 &&  age != undefined && age <= 150 ) {
      alert ("You can buy this product. Age: " + age + ".");
      alert ("This product is out of stock. We apologize for the inconvenience.");
      agecheck = "Valid";
    } 
    else if ( age < 18  &&  age != undefined ) {
      var adult = 18; 
      alert ("You are underage, you cannot buy this product. Age: " + age + ". \n Try again in " + (adult - age) + " years.");
      agecheck = "Valid"; 
    }
    else if ( age > 150 ) {
      alert("Please, enter a valid age.");
      agecheck = "NotValid"; 
    }
    else {
      alert("Please, you have to enter only numbers (Not letters) for the age check.");
      agecheck = "NotValid";  
      }  
  }
}

/* 
  Le righe di codice da 104 a 130 di questo documento sono tratte dal sito 
  https://www.byte-post.com/muovere-oggetti-liberamente-funzioni-htmljs/
  Visitato in data 3 settembre 2021. 
*/ 

var cursore;
  var offset = [0,0];
  var ogg;
  var click = false;
  ogg = document.getElementById("Window");
  document.body.appendChild(ogg);
  ogg.addEventListener('mousedown', function(e) {
    click = true;
    offset = [
      ogg.offsetLeft - e.clientX,
      ogg.offsetTop - e.clientY
    ];
  }, true);
  document.addEventListener('mouseup', function() {
    click = false;
  }, true);
  document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (click) {
      cursore = {
        x : event.clientX,
        y : event.clientY
      };
      ogg.style.left = (cursore.x + offset[0]) + 'px';
      ogg.style.top  = (cursore.y + offset[1]) + 'px';
    }
  }, true);


 
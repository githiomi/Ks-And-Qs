var price = 0;
var plusTrans = 0;

function placeOrder1() {
  price = parseInt(document.getElementById('overlay1').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Mohawk hairstyle that will cost you Ksh: " + price);
}
function placeOrder2() {
  price = parseInt(document.getElementById('overlay2').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Dreads Fade Long hairstyle that will cost you Ksh: " + price);
}
function placeOrder3() {
  price = parseInt(document.getElementById('overlay3').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Dreads Fade Top hairstyle that will cost you Ksh: " + price);
}
function placeOrder4() {
  price = parseInt(document.getElementById('overlay4').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Dyed Fade hairstyle that will cost you Ksh: " + price);
}
function placeOrder5() {
  price = parseInt(document.getElementById('overlay5').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Fade hairstyle that will cost you Ksh: " + price);
}
function placeOrder6() {
  price = parseInt(document.getElementById('overlay6').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Fade X Cuts hairstyle that will cost you Ksh: " + price);
}
function placeOrder7() {
  price = parseInt(document.getElementById('overlay7').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Braids hairstyle that will cost you Ksh: " + price);
}
function placeOrder8() {
  price = parseInt(document.getElementById('overlay8').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Taper Fade hairstyle that will cost you Ksh: " + price);
}
function placeOrder9() {
  price = parseInt(document.getElementById('overlay9').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Afro Curly hairstyle that will cost you Ksh: " + price);
}
function detailsShow() {
  $(".info").slideToggle(1500);
}
function displayDelivery() {
  $(".addressInput").show(1000);
  $(".noDelivery").hide(1000);
}
function hideDelivery() {
  $(".addressInput").hide(1000);
  $(".noDelivery").slideToggle(1000);
}

function Pdetails(fname, lname, number, email, cname,sname){
  this.fname = fname;
  this.lname = lname;
  this.number = number;
  this.email = email;
  this.cname = cname;
  this.sname = sname;
}

function confirmDetails(){
     var firstName = $("#fName").val();
     var lastName = $("#lName").val();
     var phoneNumber = $("#pNumber").val();
     var emailAddress = $("#eAddress").val();
     var cityName = $("#cName").val();
     var streetName = $("#sName").val();
   
     var Person = new  Pdetails (firstName, lastName, phoneNumber, emailAddress, cityName, streetName);

     plusTrans = price + 150;
  
  Pdetails.prototype.fullName = function() {
     return Person.fname + " " + Person.lname;
  }
  Pdetails.prototype.contactDetails = function() {
     return Person.number + ", "  + Person.email;
  }
  Pdetails.prototype.deliveryAddress = function() {
     return Person.cname + ", " + Person.sname;
  }

      $("#showDetails").slideToggle();
      $(".fullName").text(Person.fullName);
      $(".contactInfo").text(Person.contactDetails);
      $(".orderLocation").text(Person.deliveryAddress);
      $(".plusTrans").text(plusTrans);
}
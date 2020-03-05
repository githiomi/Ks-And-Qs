// $(document).ready(function() {
//     $(".clickable").click(function() {
//       $(".afro-curly-showing").toggle();
//       $(".afro-curly-hidden").toggle();
//       $("#afro-curly").show();
//     });
// });  
var price = 0;
var plusTrans = 0;

function placeOrder1() {
  price = parseInt(document.getElementById('overlay1').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected Double Arm Sleeve that will cost you Ksh: " + price);
}
function placeOrder2() {
  price = parseInt(document.getElementById('overlay2').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Half Arm that will cost you Ksh: " + price);
}
function placeOrder3() {
  price = parseInt(document.getElementById('overlay3').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Torso filled Top that will cost you Ksh: " + price);
}
function placeOrder4() {
  price = parseInt(document.getElementById('overlay4').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected Half Back with arm that will cost you Ksh: " + price);
}
function placeOrder5() {
  price = parseInt(document.getElementById('overlay5').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected Half Neck that will cost you Ksh: " + price);
}
function placeOrder6() {
  price = parseInt(document.getElementById('overlay6').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected Half Back Filled that will cost you Ksh: " + price);
}
function placeOrder7() {
  price = parseInt(document.getElementById('overlay7').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Full Leg Sleeve that will cost you Ksh: " + price);
}
function placeOrder8() {
  price = parseInt(document.getElementById('overlay8').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Full sleeve Arm with Neck hairstyle that will cost you Ksh: " + price);
}
function placeOrder9() {
  price = parseInt(document.getElementById('overlay9').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Full Back With Arm that will cost you Ksh: " + price);
}
function placeOrder10() {
  price = parseInt(document.getElementById('overlay10').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Earing Piercing that will cost you Ksh: " + price);
}
function placeOrder11() {
  price = parseInt(document.getElementById('overlay11').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Nose Ring Piercing that will cost you Ksh: " + price);
}
function placeOrder12() {
  price = parseInt(document.getElementById('overlay12').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Bull Ring Piercing that will cost you Ksh: " + price);
}
function placeOrder13() {
  price = parseInt(document.getElementById('overlay13').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Eyebrow Piercing that will cost you Ksh: " + price);
}
function placeOrder14() {
  price = parseInt(document.getElementById('overlay14').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Belly Button Piercing that will cost you Ksh: " + price);
}
function placeOrder15() {
  price = parseInt(document.getElementById('overlay15').getAttribute('value'));

  $("#appear").show();
  $(".haircut").text("You have selected the Tongue Piercing that will cost you Ksh: " + price);
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
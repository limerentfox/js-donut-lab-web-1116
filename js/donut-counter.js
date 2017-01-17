//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

var guests = parseInt(prompt('Please enter the number of guests: '));
var donuts = parseInt(prompt('Please enter the number of donuts: '));

var alertMessage = `There are ${guests} guests and ${donuts} donuts.`;
 
 if (donuts < guests) {
   alertMessage += ' There are not enough donuts for the guests.';
   alert(alertMessage);
 } else {
   alertMessage += ' There are enough donuts for the guests.';
   alert(alertMessage);
 }


//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

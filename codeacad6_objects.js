var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//new object
var me = new Object();
me.name = "Anca Fodor";
me.age = 35;

//heterogenous array
var myArray = [3, true, "Anca", {first : "great"}];

//Multidimensional arrays
var newArray = [["Anca", "Silviu"], ["Cluj", 21, {"married":true}]];

//Object that contains an array
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: [false, "none", "zero"]
};
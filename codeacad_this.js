// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};

// now we make bob
var bob = new Object();
bob.age = 30;

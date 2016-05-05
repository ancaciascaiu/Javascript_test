var isEven = function(number) {
  nr = number;
  if (isNaN(nr)) {
      return ("It`s not a number!");
  }
  else if (number % 2 !== 0){
      return false;
  }
  
  else{
      return true;
  }
  
};
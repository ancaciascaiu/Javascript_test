var user = prompt("How are you today?").toUpperCase();

switch(user) {
  case 'GOOD':
    console.log("Great!");
    break;
  case 'awful':
    console.log("Oooohhhh!");
    break;
  case 'pretty well':
    console.log("can you decide?");
    break;
default:
    console.log("enter a mood!");
}

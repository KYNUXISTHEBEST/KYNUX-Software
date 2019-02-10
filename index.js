console.log ("===========================");
console.log ("|Welcome to KYNUX Software|");
console.log ("===========================");

var laaddingeskes = ['-', '\\', '|', '/'];
var i = 0;

var interval = setInterval(function(){
  process.stdout.write("Loading, Please wait " + laaddingeskes[i] + "\r");
  i++;
  if(i===laaddingeskes.length){
    i = 0;
  }
}, 100);

setTimeout(function(){
  clearInterval(interval);
  console.log("KYNUX Software is ready!");
}, 5000);

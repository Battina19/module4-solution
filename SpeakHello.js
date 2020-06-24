var helloGreeter ={};
helloGreeter.speakWord = "Hello";

var helloSpeaker = "speakhello";
var yaakovGreeter = {};
yaakovGreeter.speakhello = function(name){
  console.log(helloGreeter.speakWord + " " + name);
}
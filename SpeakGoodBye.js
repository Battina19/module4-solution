var goodbyeGreeter = {};
goodbyeGreeter.speakWord = "Good Bye";

var byeSpeaker = "speakbye";
var johnGreeter = {};
johnGreeter.speakbye = function(name){
  console.log(goodbyeGreeter.speakWord + " " + name);
}

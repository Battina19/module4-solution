(function () {

var names = ["John","Yaakov",  "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toUpperCase();

  
  if (firstLetter === 'J') {
    johnGreeter.speakbye(names[i]);
  } else {
    yaakovGreeter.speakhello(names[i]);
  }
}

})();

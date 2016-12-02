console.log("Sanity Check: JS is working!");
var start;
pressCount = 0;

$(document).ready(function(){
  $(window).keypress(function(e){
    if(e.keyCode == 32) {
      if (start) {
        pressCount +=1;
        var end = Date.now();
        total = (end - start)/1000;
        $("#total-time").text(total);
      } else {
        start = Date.now();
        var interval = window.setInterval(counter, 1);
      }
    }
  })
})

function counter() {
  if (pressCount<1) {
    var total = (Date.now() - start)/1000;
    $("#total-time").text(total);
  }
}

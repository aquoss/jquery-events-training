console.log("Sanity Check: JS is working!");
var start;

$(document).ready(function(){
  $(window).keypress(function(e){
    if(e.keyCode == 32) {
      if (start) {
        var end = Date.now();
        var total = (end - start)/1000;
        $("#total-time").text(total);
      } else {
        start = Date.now();
      }
    };
  })
})

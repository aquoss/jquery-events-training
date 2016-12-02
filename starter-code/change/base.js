console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("#time").text( Date.now() );
  $('.add').change(function() {
    var a = $('#right').val();
    var b = $('#left').val();
    var total = Number(a) + Number(b);
    $('#total').val(total);
  })
})

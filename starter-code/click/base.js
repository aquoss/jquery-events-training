console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click', function() {
    var phrase = $(this).text() + " at " + Date.now();
    $('ul').append('<li>'+phrase+'</li>');
  })
})

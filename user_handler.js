var CurrentUsername = "NOT SET";

$(document).ready(function(){

});


function grabUsername(){
  $.get( "usernamegrabber.php", function( data ) {
    CurrentUsername = data.currentUsername;
  }, "json" );
}

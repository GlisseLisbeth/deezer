var app_id = "478042";
var app_secret = "0ef8d94efedd5e88b57946e87d480501";
var my_url = "https://glisselisbeth.github.io/deezer/index.html"

$.get( "https://connect.deezer.com/oauth/auth.php?app_id="+app_id+"&redirect_uri="+my_url+"&perms=basic_access,email", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
    console.log(data);
  });
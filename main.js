function myMap() {
var myCenter = new google.maps.LatLng(44.053442, 12.5046472);
var mapProp = {center:myCenter, zoom:7, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}


$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
})

//Add smooth scrolling to all link in navbar + footer link
$(document).ready(function(){
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } // end if

  });
})

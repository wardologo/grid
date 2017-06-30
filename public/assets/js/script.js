$(document).ready(function() {
  window.sr = ScrollReveal();
  sr.reveal('.about-block');
  var html1 = ""
  var html2 = "To setup electrical utilities in your name, you need:<ul><li> Valid identification with photo </li><li> Social Security Number </li><li> Residential contract: purchase or rent </li><li> Residential address </li><li> Number of electric meter<ul><li> <i> *Note: If you live in a property that is divided in different units, you must look for the number corresponding to <b> your </b> particular unit. </i> </li></ul><li> Service deposit<ul><li> Rented unit: $150.00</li><li> Purchased unit: $200.00</li></ul></li></li></ul>"
  var html3 = "To setup electrical utilities for someone else, you need:<ul><li> Valid identification with photo </li><li> Social Security Number </li><li> Residential contract: purchase or rent </li><li> Residential address </li><li> Number of electric meter<ul><li> <i> *Note: If you live in a property that is divided in different units, you must look for the number corresponding to <b> your </b> particular unit. </i> </li></ul><li> Service deposit<ul><li> Rented unit: $150.00</li><li> Purchased unit: $200.00</li></ul></li><li> Valid identification with photo of the owner of the property (original or copy).</li><li> Social security card of the owner of the property (original or copy).</li><li>Letter of authorization from the owner of the property (original or copy). The letter must include the following:<ul><li>Full name of the owner of the property</li><li>Your full name</li><li> The address of the property </li><li> Statement that authorizes you to carry out the setup on behalf of the actual owner of the property</li><li> Signature of the owner of the property </li></ul></li></ul>"
  var html4 = "For further information about the Electrical Energy Authority, please visit: <a href='http://www.aeepr.com/'target='_blank';> Click here </a>"

  $('#aee-link1').on('click', function() {
    $('#content').html(html1);
  });

  $('#aee-link2').on('click', function() {
    $('#content').html(html2);
  });

  $('#aee-link3').on('click', function() {
    $('#content').html(html3);
  });

  $('#aee-link4').on('click', function() {
    $('#content').html(html4);
  });
})

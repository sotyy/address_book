// Back-end logic
function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, county){
  this.street = street;
  this.city = city;
  this.county = county;
}


//User Interface Logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-county">County</label>' +
                                   '<input type="text" class="form-control new-county">' +
                                 '</div>' +
                               '</div>');
  });
});

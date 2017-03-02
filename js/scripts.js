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

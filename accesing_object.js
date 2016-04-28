//literal notation
var hotel = {
	name: 'Quay',
	rooms: 40,    //properties
	booked: 25,
	checkAvailability: function() {       //method
		return this.rooms - this.booked;
	}
};

//accessing an object and dot notation
//i can access a property or method of an object using dot notation or square brackets

var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();

var hotelName = hotel['name'];
var roomsFree = hotel['checkAvailability']();
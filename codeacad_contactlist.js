var friends = {};
friends.bill = {};
friends.steve = {};

friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "773-773-7733";
friends.bill.address = ['One Microsoft Way', 'Redmond', 'WA', '98052'];

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "206-206-2006",
    address: ['Two Apple Ave', 'Chicago', 'IL', '60052']
};


var search = function(name){
    for (var key in friends){
        if (name  === friends[key].firstName){
            console.log(friends[key]);
            return friends[key];
        }
    }
};
search('Steve');

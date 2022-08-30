var customerList = [
    {
        "id": "dhkasd893",
        "name": "Person 1",
        "amount": 345
    },
    {
        "id": "sancl89",
        "name": "Person 2",
        "amount": 866
    },
    {
        "id": "nlcjdof893",
        "name": "Person 3",
        "amount": -74
    },
    {
        "id": "asfml23",
        "name": "Person 4",
        "amount": -2
    }
]

for(var i=0;i<customerList.length;i++){
    var currentCust = "<a href='#'><div><h4>Name: "+customerList[i].name+"</h4><h5>Amount: "+customerList[i].amount+"</h5></div></a>"
    $("#allCustList").append(currentCust);
}
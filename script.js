var cashFlow = [5490, 2089]


var topContributer = {
    "in":[
        {
            "id": "dhkasd893",
            "name": "Person 1",
            "amount": 345
        },
        {
            "id": "sancl89",
            "name": "Person 2",
            "amount": 866
        }
    ],
    "out":[
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
}



var customerDetail = [
    {
        "id": "63090f35991c5a12d6b5a54d",
        "accountCreateTimeStamp": "2022-08-26T23:51:41.0862876+05:30",
        "name": "Abhiram Anil",
        "phoneNumber": "9985739584",
        "allPaid": false,
        "totalRemaining": 200,
        "paymentStatusList": [
            {
                "id": "0",
                "txnTimeStamp": "2022-08-26T23:52:14.0961998+05:30",
                "amount": 100,
                "paid": true,
                "remaining": 0,
                "disableTxn": false,
                "note": "final note",
                "lastUpdateTxnTimeStamp": "2022-08-26T23:56:33.8743059+05:30"
            },
            {
                "id": "1",
                "txnTimeStamp": "2022-08-26T23:58:08.8112896+05:30",
                "amount": 143,
                "paid": true,
                "remaining": 0,
                "disableTxn": false,
                "note": null,
                "lastUpdateTxnTimeStamp": "2022-08-26T23:59:23.0172491+05:30"
            },
            {
                "id": "2",
                "txnTimeStamp": "2022-08-27T00:23:24.5013382+05:30",
                "amount": 230,
                "paid": false,
                "remaining": 200,
                "disableTxn": false,
                "note": "test",
                "lastUpdateTxnTimeStamp": "2022-08-27T00:23:24.5013382+05:30"
            }
        ]
    }
]

$("#in").append(cashFlow[0]);
$("#out").append(cashFlow[1]);

var inCusts = "";
var inTopCusts = topContributer.in;
var outTopCusts = topContributer.out;
generateInCust()

$("#inClick").click(function (e) { 
    e.preventDefault();
    $("#contributerList").text(inCusts);
    generateInCust()
});

$("#outClick").click(function (e) { 
    e.preventDefault();
    $("#contributerList").text(inCusts);
    generateOutCust()
});

function generateInCust() {
    for(var i=0;i<inTopCusts.length;i++){
        var currentCust = "<div><h4>Name: "+inTopCusts[i].name+"</h4><h5>Amount: "+inTopCusts[i].amount+"</h5></div>"
        $("#contributerList").append(currentCust);
    }
}

function generateOutCust() {
    for(var i=0;i<outTopCusts.length;i++){
        var currentCust = "<div><h4>Name: "+outTopCusts[i].name+"</h4><h5>Amount: "+outTopCusts[i].amount+"</h5></div>"
        $("#contributerList").append(currentCust);
    }
}


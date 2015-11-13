window.onload = function () {
    console.log("Start Login Window");
    var btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', function (event) {

        var bizagiUrl = document.getElementById('txtBizagiUrl').value + '/Rest/Authentication/User';
        var userName = document.getElementById('txtUsername').value;
        var password = document.getElementById('txtPassword').value;

        var params = JSON.stringify({ user: userName ,  password : password  , domain : 'domain' , loginOption : 'alwaysAsk' } );
        CallRestServices.makeCorsRequest('POST' , bizagiUrl , params);

        console.log("The user need to start " + bizagiUrl);
    });
};


var CallRestServices = {
    createCORSRequest: function (method, url , params) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url, true);

            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        } else {
            xhr = null;
        }
        return xhr;
    },
    makeCorsRequest: function (type, url , params) {

        var xhr = this.createCORSRequest(type, url , params);
        if (!xhr) {
            alert('CORS not supported');
            return;
        }

        xhr.onload = function () {
            var objNotification = JSON.parse(xhr.responseText);
            doNotification(objNotification);

        };

        xhr.onerror = function (e) {
            alert('Woops, there was an error making the request.' + e.toString());
        };

        xhr.send(params);
    }
}
}







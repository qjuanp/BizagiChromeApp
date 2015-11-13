window.onload = function () {
    console.log("Start Login Window");
    var btnLogin = document.querySelector('#btnLogin');
    btnLogin.addEventListener('click', function (event) {

        var bizagiUrl = document.getElementById('txtBizagiUrl').value;
        var userName = document.getElementById('txtUsername').value;
        var password = document.getElementById('txtPassword').value;

        chromeStorage.set('bizagiUrl', bizagiUrl);

        var params = "user=" + userName + "&password=" + password + "&domain=domain&loginOption=alwaysAsk";
        CallRestServices.makeCorsRequest(
            'POST',
            bizagiUrl + '/Rest/Authentication/User',
            params,
            { contentType: "application/x-www-form-urlencoded" },
            function (response) {
                if (response.status === "SUCCESS")
                    chromeStorage.set('enableNotifications', true);
            });

        console.log("The user need to start " + bizagiUrl);
    });
};
var CallRestServices = {
    createCORSRequest: function (method, url, params) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            xhr = new XDomainRequest();
            xhr.open(method, url, true);
        } else {
            xhr = null;
        }
        return xhr;
    },
    makeCorsRequest: function (type, url, params, options, callback, err) {

        var xhr = this.createCORSRequest(type, url, params);
        if (!xhr) {
            console.error('CORS not supported');
            return;
        }

        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);
            if (response.code === "UNKNOWN_ERROR") {
                if (err) err();
            }
            else
                callback(response);
        };

        xhr.onerror = function (e) {
            console.error('Woops, there was an error making the request.' + e.toString());
        };

        xhr.setRequestHeader("Content-type", options.contentType);
        xhr.send(params);
    }
}
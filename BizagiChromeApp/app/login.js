window.onload = function () {
	console.log("Start Login Window");
	var btnLogin = document.querySelector('#btnLogin');
	btnLogin.addEventListener('click', function (event) {

		var mainWin = chrome.app.window.get("mainwin");
		var bizagiUrl = document.getElementById('txtBizagiUrl').value;
		var userName = document.getElementById('txtUsername').value;
		var password = document.getElementById('txtPassword').value;
		
		

		console.log("The user need to start " + bizagiUrl);
		document.querySelector('#viewBizagiPage').setAttribute('src', bizagiUrl);
	});
}


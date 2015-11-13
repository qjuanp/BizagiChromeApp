function retrieveNotifications() {
	console.log("I want a Notification");

	chromeStorage.get('bizagiUrl')
		.then(function (result) {
			CallRestServices.makeCorsRequest(
				'GET',
				result.bizagiUrl + '/api/Fedex/GetNotifications',
				null,
				{ contentType: "application/json" },
				function (response) {
					if(response instanceof Array)
					response.forEach(function (element) {
						console.log(element);
						showNotification(element);
					}, this);
				});


			/*
					var idNotification1 = "IdNotification" + Math.floor((Math.random() * 100) + 1);
					/*var notificationModel = {
						id : idNotification1,
						title : "Assignment",
						description : "Case: " + Math.floor((Math.random() * 10) + 1) + "\n"
 +"Task: " + Math.floor((Math.random() * 10) + 1),
						url : "http://lifeandcode.io/" + idNotification1,
						notificationType : "Assignment",
					};*/
	
			/*var notificationModel = {
				id : idNotification1,
				title : "SLA",
				description : "Case: " + Math.floor((Math.random() * 10) + 1) + "\n"
	 +"Task: " + Math.floor((Math.random() * 10) + 1) + "\n"
	 +"State: Warning!",
				url : "http://lifeandcode.io/" + idNotification1,
				notificationType : "state_yellow",
			};
	
			var notificationModel = {
				id: idNotification1,
				title: "SLA",
				description: "Case: " + idNotification1 + "\n"
				+ "Task: " + Math.floor((Math.random() * 10) + 1) + "\n"
				+ "State: Warning!",
				url: "http://dev-jimmyc/BizAgiR110x/index.html?widget=activityform&idCase=601",
				notificationType: "state_red",
			};
	
			showNotification(notificationModel);*/
		});
}

function getNotifications() {
	chromeStorage.get('enableNotifications')
		.then(function (isEnabled) {
			if (isEnabled) retrieveNotifications();
		});
};
function getNotifications() {
	console.log("I want a Notification");
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
	};*/
	
	var notificationModel = {
		id : idNotification1,
		title : "SLA",
		description : "Case: " + idNotification1 + "\n"
					 +"Task: " + Math.floor((Math.random() * 10) + 1) + "\n"
					 +"State: Warning!",
		url : "http://lifeandcode.io/" + idNotification1,
		notificationType : "state_red",
	};
	
	showNotification(notificationModel);
};
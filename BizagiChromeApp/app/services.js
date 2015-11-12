function getNotifications() {
	console.log("I want a Notification");

	var notificationModel = {
		idNotification: "IdNotification" + Math.floor((Math.random() * 10) + 1),
		idWorkItem : 1,
		idCase : 2,
		idTask : 5,
		radNumber: "CO-123912",
		urlTask : "http://lifeandcode.io",
		taskName : "ACTIVIDAD PENDIENTE"
	};
	
	showNotification(notificationModel);
};
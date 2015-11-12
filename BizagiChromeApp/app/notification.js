var notifications = new Array();
chrome.notifications.onClicked.addListener(function (cNotificationId) {
	console.log("Clicked init, current elements"+notifications.length);
	
	var notificationModel = notifications.filter(function (obj) {
		return obj.id === cNotificationId;
	})[0];
	
	notifications = notifications.filter(function(obj){
		return obj.id !== cNotificationId;
	});
	
	console.log("Clicked finished, current elements"+notifications.length);
		
	onClickNotificationOpenUrl(notificationModel);
});

chrome.notifications.onClosed.addListener(function(cNotificationId){
	console.log("Closing, current elements"+notifications.length);
	
	notifications = notifications.filter(function(obj){
		return obj.id !== cNotificationId;
	});
	
	console.log("Closed, current elements"+notifications.length);
})

function onClickNotificationOpenUrl( notificationModel) {
	window.open(notificationModel.url);
}

function showNotification(notificationModel) {
	notifications.push(notificationModel);	
	buildNotification(notificationModel);
}

function buildNotification(notificationModel) {
	chrome.notifications.create(notificationModel.id, {
        type: 'basic',
        iconUrl: "img/notifications/" + notificationModel.notificationType + ".png",
        title: notificationModel.title,
        message: notificationModel.description,
		isClickable: true
	});
}
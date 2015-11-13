chrome.notifications.onClicked.addListener(function (notificationUrl) {
	console.log("Clicked init, current elements" );
	window.open(notificationUrl);
});

function onClickNotificationOpenUrl(notificationModel) {
	window.open(notificationModel.url);
}

function showNotification(notificationModel) {
	buildNotification(notificationModel);
}

function buildNotification(notificationModel) {
	chrome.notifications.create(notificationModel.url, {
        type: 'basic',
        iconUrl: "img/notifications/" + notificationModel.notificationType + ".png",
        title: notificationModel.title,
        message: notificationModel.description,
		isClickable: true
	});
}
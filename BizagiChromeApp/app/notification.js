function showNotification(notificationModel) {

	var notification = buildNotification(notificationModel);
	notification.show();
}

function buildNotification(notificationModel) {
	var options = {};

	options.tag = notificationModel.id;
	options.body = notificationModel.description;
	options.timeout = 4;

	options.icon = "img/notifications/" + notificationModel.notificationType + ".png";

	options.notifyClick = function (ctx) { onClickNotification(ctx, notificationModel); }
	
	return new Notify(notificationModel.title, options);
}

function onClickNotification(context, notificationModel) {
	window.open(notificationModel.url);
}
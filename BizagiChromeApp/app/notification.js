function showNotification(notificationModel){
	var notification = new Notify('Yo dawg!', {
		body: 'Hola! te han asignado el ' + notificationModel.radNumber,
		tag: notificationModel.idNotification,
		notifyClick: onClickNotification,
		/*notifyShow: onShowNotification,
		notifyClose: onCloseNotification,
		notifyError: onErrorNotification,*/
		timeout: 4
	});
	notification.show();
}


function onClickNotification(notification){
	window.open(notification.urlTask);
}
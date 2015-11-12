function showNotification(notificationModel){
	var notification = new Notify('Yo dawg!', {
		body: 'Hola! te han asignado el ' + notificationModel.radNumber,
		data: notificationModel,
		tag: notificationModel.idNotification,
		notifyClick: function(ctx){onClickNotification(ctx,notificationModel)},
		/*notifyShow: onShowNotification,
		notifyClose: onCloseNotification,
		notifyError: onErrorNotification,*/
		timeout: 4
	});
	notification.show();
}


function onClickNotification(context, notificationModel){
	window.open(notificationModel.urlTask+"/"+notificationModel.idNotification);
}
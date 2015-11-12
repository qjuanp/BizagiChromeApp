function showNotification(notificationModel){
	var notification = new Notify('Asignación', {
		body: 'Hola! te han asignado el ' + notificationModel.radNumber	
				
				+ '\nEsta es otra linea'
				+ '\nEsta es otra linea'
				+ '\nEsta es otra linea'
				+ '\nEsta es otra linea',
		icon: 'icon_128.png',
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
var interval = null;
(function () {
	if (!interval) {
		interval = window.setInterval(getNotifications, 5000);
	}
})();
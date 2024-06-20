document.addEventListener("DOMContentLoaded", function () {
	var menuIcon = document.getElementById("menu-icon");
	var menu = document.getElementById("menu");
	var menuClose = document.getElementById("menu-close");
	var menuItems = document.querySelectorAll(".menu-item");

	menuIcon.addEventListener("click", function () {
		console.log("open");
		menu.style.opacity = "1";
		menu.style.visibility = "visible";
	});

	menuClose.addEventListener("click", function () {
		console.log("close");
		menu.style.opacity = "0";
		menu.style.visibility = "hidden";
	});

	menuItems.forEach(function (item) {
		item.addEventListener("click", function () {
			console.log("close bc link");
			menu.style.opacity = "0";
			menu.style.visibility = "hidden";
		});
	});
});

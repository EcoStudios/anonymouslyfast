// Mobile menu

function menuClick(){
	if (document.getElementById("mobile_menu").innerHTML == "menu") {
		document.getElementById("mobile_navbar").style.visibility = "visible";
		document.getElementById("mobile_menu").innerHTML = "menu_open";
	} else {
		document.getElementById("mobile_navbar").style.visibility = "hidden";
		document.getElementById("mobile_menu").innerHTML = "menu";
	}
}
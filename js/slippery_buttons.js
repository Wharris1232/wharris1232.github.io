function change() {
	var element = document.getElementById("btn-1");
	element.style.top = Math.round(Math.random()*500) + "px";
	element.style.left = Math.round(Math.random()*1000) + "px";
	element.style.backgroundColor = "rgb(" + random_number() + "," + random_number() + "," + random_number() + ")";
	element.style.height = Math.round(Math.random()*50) + 30 + "px";
	element.style.width = Math.round(Math.random()*50) + 120 + "px";
	element.style.borderRadius = Math.round(Math.random()*100) + "%";
	element.style.color = "rgb(" + random_number() + "," + random_number() + "," + random_number() + ")";
	element.innerHTML = "You click me";
}

var random_number = function() {
	return Math.floor(Math.random()*256);
}
var latediv = document.getElementsByClassName("latediv")[0];

latediv.style.display = "none";

function timeOut() {
	setTimeout(function () {
		latediv.style.display = "inline";
	}, /* in ms = */ 5000);
}

timeOut();
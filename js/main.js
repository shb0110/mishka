const rasm = document.getElementById("rasm")
document.addEventListener(
	"mousemove",
	function (e) {
		rasm.style.left = e.pageX + "px";
		rasm.style.top = e.pageY + "px";
	}
)



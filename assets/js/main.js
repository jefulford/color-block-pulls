var one = $("#one"),
	two = $("#two"),
	three = $("#three"),
	four = $("#four"),
	five = $("#five");
function resetAll() {
	one.removeClass("expand");
	two.removeClass("expand");
	three.removeClass("expand");
	four.removeClass("expand");
	five.removeClass("expand");

	$(".one-content").addClass("hidden");
	$(".two-content").addClass("hidden");
	$(".three-content").addClass("hidden");
	$(".four-content").addClass("hidden");
	$(".five-content").addClass("hidden");

	$("#one span").addClass("hidden");
	$("#two span").addClass("hidden");
	$("#three span").addClass("hidden");
	$("#four span").addClass("hidden");
	$("#five span").addClass("hidden");

	$("#one i").removeClass("hidden");
	$("#two i").removeClass("hidden");
	$("#three i").removeClass("hidden");
	$("#four i").removeClass("hidden");
	$("#five i").removeClass("hidden");
}
function toggleBlock(element) {
	if (element.hasClass("expand")) {
		resetAll();
	} else {
		resetAll();
		$("." + String(element[0].id) + "-content").removeClass("hidden");
		$("#" + String(element[0].id) + " span").removeClass("hidden");
		$("#" + String(element[0].id) + " i").addClass("hidden");
		element.addClass("expand");
	}
}


one.on("click", function(){
	toggleBlock(one);
});
two.on("click", function () {
	toggleBlock(two);
});
three.on("click", function () {
	toggleBlock(three);
});
four.on("click", function () {
	toggleBlock(four);
});
five.on("click", function () {
	toggleBlock(five);
});
$("#HowWeWorkInfographic g").click(function(e) {
	$("#HowWeWorkInfographic g").attr("class", "");
	$(this).attr("class", "Active");
	$("#HowWeWorkInfoGraphicText").addClass("Active");
	ToggleText($(this).attr("id"));
});

$("#HowWeWorkInfographic g").keypress(function(e) {
	var code = e.keyCode || e.which;
	if (code == 32 || code == 13) {
		$("#HowWeWorkInfographic g").attr("class", "");
		$(this).attr("class", "Active");
		$("#HowWeWorkInfoGraphicText").addClass("Active");
		ToggleText($(this).attr("id"));
	}
});

$("#HowWeWorkInfoGraphicText a.Minor").click(function(e) {
	$("#HowWeWorkInfoGraphicText").removeClass("Active");
	if ($(window).width() < 1024) {
		$("#HowWeWorkInfographic g").attr("class", "");
	}
	
});

function ToggleText(TextElement) {
	$("#HowWeWorkInfoGraphicText div").fadeOut(250);
	var FromTop = $("#"+TextElement).position().top - 40;
	if ((FromTop + $("#"+TextElement+"Text").outerHeight()) > $("#HowWeWorkInfoGraphicText").outerHeight()){
		var FromTop = ($("#HowWeWorkInfoGraphicText").outerHeight() - ($("#"+TextElement+"Text").outerHeight()) - 40);
	}
	$("#"+TextElement+"Text").css("top", FromTop);
	setTimeout(function(){
		$("#"+TextElement+"Text").fadeIn();
		$("#"+TextElement+"Text").focus();
	},250); 
	
	
}
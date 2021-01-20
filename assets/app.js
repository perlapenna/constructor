$( document ).ready(function() {
	var $basePrice = "1490";
	$(".title-cost, .btn-cost").text($basePrice);

    $('#dev-engrave').on('input', function() {
    	var $val = $(this).val()
    	$("#engraving-container").text($val);
    	var $engraveLength = $("#engraving-container").text().length;
		if (($engraveLength >= 1) && ($engraveLength < 8)) {
        	$("#engraving-container").css({"font-size" : "1.35rem", "top" : "2px"});
    	}
    	else if (($engraveLength > 6) && ($engraveLength < 12)) {
    		$("#engraving-container").css({"font-size" : "1.125rem", "top" : "2px"});
    	}
    	else if (($engraveLength > 12) && ($engraveLength < 19)) {
    		$("#engraving-container").css({"font-size" : ".9rem", "top" : "5px"});
    	}
    	else if (($engraveLength < 1)) {
    		$("#engraving-container").text("Надпись");
    	}
	});

	$(".color-radio").click(function() {
   		if($(".color-radio").is(":checked")) {
   			$("#selected-color").text($(this).attr("dmn-name"));
   			$(".leather-layer").attr("src", "assets/img/12pm-leather-calfskin-"+$(this).attr("dmn-color")+".png");
   		}
	});

	$(".plate-radio").click(function() {
   		if($(".plate-radio").is(":checked")) {
   			$("#selected-plate").text($(this).attr("dmn-name"));
   			$(".plate-container").attr("src", "assets/img/plate-"+$(this).attr("dmn-color")+".png");
   			$(".title-cost, .btn-cost").text(parseInt($basePrice)+parseInt($(this).attr("dmn-price")));
   		}
	});


});
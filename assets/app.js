 $(window).on('load', function () {
 	$('.preloader').hide();

	var $base = "iPhone 12 Pro Max";
	var $model = "Minimalistic Plate";
	var $basePrice = "1490";
	var $leather = $(".color-radio:checked").attr("dmn-name");
	var $plate = $(".plate-radio:checked").attr("dmn-name");
	var $engraving = $("#engraving-container").text();
	var $font = $(".font-radio:checked").attr("dmn-font");

	$(".model-vendor").text($base);
	$(".model-name").text($model);
	$(".title-cost, .btn-cost").text($basePrice);
	var $total = $(".title-cost").text();

    $('#dev-engrave').on('input', function() {
    	var $val = $(this).val()
    	$("#engraving-container").text($val);
    	var $engraveLength = $("#engraving-container").text().length;
		if (($engraveLength >= 1) && ($engraveLength < 8)) {
        	$("#engraving-container").css({"font-size" : "1.25rem", "top" : "2px"});
    	}
    	else if (($engraveLength > 6) && ($engraveLength < 12)) {
    		$("#engraving-container").css({"font-size" : "1.125rem", "top" : "2px"});
    	}
    	else if (($engraveLength > 12) && ($engraveLength < 19)) {
    		$("#engraving-container").css({"font-size" : ".9rem", "top" : "5px"});
    	}
    	else if (($engraveLength < 1)) {
    		$("#engraving-container").text("Надпись");
    		$val = $("#engraving-container").text();
    	}
    	$engraving = $val;
	});

	$(".color-radio").click(function() {
   		if($(".color-radio").not(":checked")) {
   			if ( $(this).attr('dmn-load') == 'false' ) {
   				$('.preloader').show();
   			}
   			$("#selected-color").text($(this).attr("dmn-name"));
   			$(".leather-layer").one("load", function() {
   				$('.preloader').hide();
   			}).attr("src", "assets/img/12pm-leather-calfskin-"+$(this).attr("dmn-color")+".png");
   			$(this).attr('dmn-load', 'true');
   			$leather = $(this).attr("dmn-name");
   		}
	});

	$(".plate-radio").click(function() {
   		if($(".plate-radio").not(":checked")) {
   			if ( $(this).attr('dmn-load') == 'false' ) {
   				$('.preloader').show();
   			}
   			$("#selected-plate").text($(this).attr("dmn-name"));
   			$(".plate-container").one("load", function() {
   				$('.preloader').hide();
   			}).attr("src", "assets/img/plate-"+$(this).attr("dmn-color")+".png");
   			$(".title-cost, .btn-cost").text(parseInt($basePrice)+parseInt($(this).attr("dmn-price")));
   			$(this).attr('dmn-load', 'true');
   			$total = $(".title-cost").text();
   			$plate = $(this).attr("dmn-name");
   		}
	});

	$(".font-radio").click(function() {
   		if($(".font-radio").is(":checked")) {
   			$("#selected-font").text($(this).attr("dmn-name"));
   			$("#engraving-container").css({"font-family" : $(this).attr("dmn-font")});
   			$font = $(this).attr("dmn-font");
   		}
	});

	function updateJson() {
		caseObject = {
			base: $base,
			model: $model,
			leather: $leather,
			plate: $plate,
			engraving: $engraving,
			font: $font,
			total: $total
		}
		return caseObject;
	}

	$(".btn-buy").click(function() {
		$(".objectContainer").text(JSON.stringify(updateJson()));
	});


 });

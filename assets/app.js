 $(window).on('load', function () {
 	function preloader(state){$preloader = $('.preloader');if (state == 1) {$preloader.show(); $("body").css("overflow-y", "hidden");}else if (state == 0) {$preloader.hide(); $("body").css("overflow-y", "visible");}}preloader(0);

	modelObject = {
	  "name":"Minimalistic Plate",
	  "price":1490,
	  "imagePath":"assets/img/",
	  "leather": [
	    {"type":"leather-calfskin", "color":"black", "name":"Черная", "price":"0", "domcolor":"#323232", "state":"checked", "load":"true"},
	    {"type":"leather-calfskin", "color":"blue", "name":"Темно-синяя", "price":"0", "domcolor":"#404561", "state":"", "load":"false"},
	    {"type":"leather-calfskin", "color":"lilac", "name":"Лиловая", "price":"0", "domcolor":"#bbb5c7", "state":"", "load":"false"},
	    {"type":"leather-calfskin", "color":"olive", "name":"Оливковая", "price":"0", "domcolor":"#505d4c", "state":"", "load":"false"}
	  ],
	  "plate": [
	  	{"type":"plate", "color":"gold-polished", "name":"Латунь", "price":"0", "domgradient":"#f3cd52,#6b5718,#fffde9", "state":"checked", "load":"true"},
	  	{"type":"plate", "color":"silver-polished", "name":"Серебро", "price":"300", "domgradient":"#ececec,#676767,#fbfbfb", "state":"", "load":"false"}
	  ],
	  "font": [
	  	{"type":"font", "index":"font-haas", "family":"Neue Haas Unica", "name":"Шрифт Neue Haas Unica", "icon":"font-montserat.svg", "price":"0", "state":"checked", "load":"true"},
	  	{"type":"font", "index":"font-academic", "family":"Academic", "name":"Шрифт Academic", "icon":"font-academic.svg", "price":"0", "state":"", "load":"false"},
	  	{"type":"font", "index":"font-snell", "family":"Snell", "name":"Шрифт Snell", "icon":"font-snell.svg", "price":"0", "state":"", "load":"false"},
	  	{"type":"font", "index":"font-kholodos", "family":"Kholodos", "name":"Шрифт Kholodos", "icon":"font-kholodos.svg", "price":"0", "state":"", "load":"false"},
	  	{"type":"font", "index":"font-nexa", "family":"Nexa", "name":"Шрифт Nexa", "icon":"font-nexa.svg", "price":"0", "state":"", "load":"false"},
	  	{"type":"font", "index":"font-click", "family":"Click", "name":"Шрифт Click", "icon":"font-click.svg", "price":"0", "state":"", "load":"false"},
	  	{"type":"font", "index":"font-future", "family":"Future", "name":"Шрифт Future", "icon":"font-future.svg", "price":"0", "state":"", "load":"false"}
	  ]
	}

	 function init() {

	 	modelObject.leather.forEach(function(item) {
	 		var $endpoint = $("#tab-leather .color-choose form");
	 		var $mount = $('<input data-image="'+item.color+'" type="radio" class="color-radio" id="'+item.color+'" name="color" dmn-type="'+item.type+'" dmn-color="'+item.color+'" dmn-name="'+item.name+'" dmn-price="'+item.price+'" dmn-load="'+item.load+'" '+item.state+'><label for="'+item.color+'"><span style="background: '+item.domcolor+';"></span></label>');
	 		$endpoint.append($mount);
	 	});

	 	modelObject.plate.forEach(function(item) {
	 		var $endpoint = $("#tab-plate .plate-choose form");
	 		var $mount = $('<input data-image="'+item.color+'" type="radio" class="plate-radio" id="'+item.color+'" name="color" dmn-color="'+item.color+'" dmn-name="'+item.name+'" dmn-price="'+item.price+'" dmn-load="'+item.load+'" '+item.state+'><label for="'+item.color+'"><span style="background: linear-gradient(-45deg,'+item.domgradient+');"></span></label>');
	 		$endpoint.append($mount);
	 	});

	 	var $model = modelObject.name;
	 	var $imagePath = modelObject.imagePath;
	 	var $basePrice = modelObject.price;
		var $base = "iPhone 12 Pro Max";
		var $basePrifix = "12pm";
		var $leatherType = $(".color-radio:checked").attr("dmn-type");
		var $leatherName = $(".color-radio:checked").attr("dmn-name");
		var $leatherColor = $(".color-radio:checked").attr("dmn-color");
		var $plateName = $(".plate-radio:checked").attr("dmn-name");
		var $plateColor = $(".plate-radio:checked").attr("dmn-color");
		var $engraving = $("#engraving-container").attr("dmn-placeholder");
		var $font = $(".font-radio:checked").attr("dmn-font");
		var $total = $(".title-cost").text();

		var $layerLeather = $(".color-radio");
		var $layerPlate = $(".plate-radio");
		var $layerFont = $(".font-radio");
		var $layerEngraving = $('#dev-engrave');

		$(".product-base").attr("src", $imagePath+$basePrifix+"-base.png");
		$(".leather-layer").attr("src", $imagePath+$basePrifix+"-"+$leatherType+"-"+$leatherColor+".png");
		$(".plate-container").attr("src", $imagePath+"plate-"+$plateColor+".png");
		$("#engraving-container").text($engraving);
		$(".model-vendor").text($base);
		$(".model-name").text($model);
		$(".title-cost, .btn-cost").text($basePrice);

		function update(layer, payload) {
		
			if (layer == "leather") {
				if($(".color-radio").not(":checked")) {
		   			if ( payload.attr('dmn-load') == 'false' ) {preloader(1);}
		   			$("#selected-color").text(payload.attr("dmn-name"));
		   			$(".leather-layer").one("load", function() {preloader(0);}).attr("src", $imagePath+$basePrifix+"-"+$leatherType+"-"+payload.attr("dmn-color")+".png");
	 	  			payload.attr('dmn-load', 'true');
	 	  			$leatherName = payload.attr("dmn-name");
	 	  		}
			}

			else if (layer == "plate") {
				if($(".plate-radio").not(":checked")) {
		   			if ( payload.attr('dmn-load') == 'false' ) {preloader(1);}
		   			$("#selected-plate").text(payload.attr("dmn-name"));
		   			$(".plate-container").one("load", function() {preloader(0);}).attr("src", $imagePath+"plate-"+payload.attr("dmn-color")+".png");
		   			$(".title-cost, .btn-cost").text(parseInt($basePrice)+parseInt(payload.attr("dmn-price")));
		   			payload.attr('dmn-load', 'true');
		   			$total = $(".title-cost").text();
		   			$plate = payload.attr("dmn-name");
	   			}
			}

			else if (layer == "font") {
				if($(".font-radio").not(":checked")) {
		   			if ( payload.attr('dmn-load') == 'false' ) {preloader(1);}
		   			$("#selected-font").text(payload.attr("dmn-name"));
		   			$("#engraving-container").css({"font-family" : payload.attr("dmn-font")});
		   			payload.attr('dmn-load', 'true');
		   			function hidePreloader() {preloader(0);}setTimeout(hidePreloader, 500);
		   			$font = payload.attr("dmn-font");
	   			}
			}

			else if (layer == "engraving") {
				var $val = payload.val()
		    	$("#engraving-container, #selected-engraving").text($val);
		    	var $engraveLength = $("#engraving-container").text().length;
				if (($engraveLength >= 1) && ($engraveLength < 8)) {$("#engraving-container").css({"font-size" : "1.25rem", "top" : "2px"});}
		    	else if (($engraveLength > 6) && ($engraveLength < 12)) {$("#engraving-container").css({"font-size" : "1.125rem", "top" : "2px"});}
		    	else if (($engraveLength > 12) && ($engraveLength < 19)) {$("#engraving-container").css({"font-size" : ".9rem", "top" : "5px"});}
		    	else if (($engraveLength < 1)) {$("#engraving-container, #selected-engraving").text("Надпись");$val = $("#engraving-container").text();}
		    	$engraving = $val;
			}
		}

		$layerLeather.click(function() {update("leather", $(this));});
		$layerPlate.click(function() {update("plate", $(this));});
		$layerFont.click(function() {update("font", $(this));})
		$layerEngraving.on("input", function() {update("engraving", $(this))});
	 }

	init();

 });
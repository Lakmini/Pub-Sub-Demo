$('document').ready(function() {
	$("#fruitList").change(function() {
		//get selected option of the selector
		var selection = $("#fruitList option:selected").text();
		//publish the selected option
		gadgets.Hub.publish('select', {
			msg : selection
		});

	});

});


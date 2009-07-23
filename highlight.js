$(document).ready(function(){
	var highlightSelector = "[highlightgroup]";
	var highlightTag	= "highlightgroup";
	var group = $(highlightSelector).attr(highlightTag);
	$("[" + group + "]").live("click", function(){
		$("[" + group + "]").removeClass("highlight");
		$(this).addClass("highlight");
		});
});
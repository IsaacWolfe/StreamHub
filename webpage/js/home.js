$(document).ready(function() {
		$("#add-streamer").click(function() {
				$(this).attr({
						"src": "./photos/home.png",
						"alt": "Homepage button"
				});
				$("input").attr("placeholder","Type in Streamers name to search and add them");
				$(".streamers").slidedown();
		});
});

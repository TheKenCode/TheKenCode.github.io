$(document).ready(function(){
	$('#submit').click(function(){
		var searchKey = {
			q: $("#search").val();
		};

		console.log("Searching for " + searchKey);
		$.ajax({
			url: "http://search.twitter.com/search.json?" + $.param(searchKey),
			dataType: 'jsonp',
			success: function(data){
				console.log("success");
				for(item in data['results']){
					$('#twitter').append(
					'<li>' + data['results'][item]['profile_image_url'] + "</li>"
					);
				};
			}

		});
	});
	
	
});
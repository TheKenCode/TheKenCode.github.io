$(document).ready(function(){
	$('#submit').click(function(){
		var searchKey = $("#search").val();
		
		$.ajax({
			url: "http://search.twitter.com/search.json?" + $.param(searchKey),
			dataType: 'jsonp',
			success: function(data){
				for(item in data['results']){
					$('#twitter').append(
					'<li>' + data['results'][item]['profile_image_url'] + "<li>"
					);
				}
			}

		});
	});
	
	
	
});
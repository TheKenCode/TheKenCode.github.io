$(document).ready(function(){
	$('#submit').click(function(){
		var searchKey = {
			q: $("#search").val()
		};

		//console.log("Searching for " + searchKey);
		$.ajax({
			url: "https://api.instagram.com/v1/tags/search?q="+ $("#search").val() + "&client_id=27292a5037854cd2b819fb12fb114642", //$.param(searchKey),
			dataType: 'jsonp',
			success: function(data){
				console.log("success");
				for(item in data['results']){
					$('#twitter').append(
					
					'<li>' + data['results'][item] + "</li>"
					
					);
				};
			}

		});
	});
	
	
});
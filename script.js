$(document).ready(function(){
	$('#submit').click(function(){
		var searchKey = {
			q: $("#search").val()
		};
		//27292a5037854cd2b819fb12fb114642
		//9166072075b447239abdafc592fb52ab
		//https://thekencode.github.io
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
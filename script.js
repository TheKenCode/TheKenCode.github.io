$(document).ready(function(){
	$('#submit').click(function(){
		
		window.location.replace("https://api.instagram.com/oauth/authorize/?client_id=27292a5037854cd2b819fb12fb114642&redirect_uri=https://thekencode.github.io&response_type=code");
		
		var searchKey = {
			q: $("#search").val()
		};
		
		//27292a5037854cd2b819fb12fb114642
		//9166072075b447239abdafc592fb52ab
		//https://thekencode.github.io
		//Should be getting the access token

		var access_token = document.URL;
		
		for(var i = 0; i < access_token.length; i++){
			if(access_token.charAt(i) == '=' && access_token.charAt(i + 1) >= '0'){
				access_token = access_token.substring(i + 1, access_token.length);
				break;
			}
		};
		
		console.log(access_token);
		
		gettingSearch("bowery", access_token);
		
	});
	function gettingSearch(var search, var access_token){
		$.ajax({
			url: "https://api.instagram.com/v1/tags/search?q="+ search + "&access_token=" + access_token,
			dataType: 'jsonp',
			success: function(data){
				console.log(data);
			}
		});	
	}
	function searchHistory(){
		console.log("History: ");
		$.ajax({
			type: 'POST',
			url: 'searchHistroy.txt.txt',
			data: {"Search": $("#search").val()},
			success: function(data){
				console.log(data);
			}
			
		});
		
	}
});
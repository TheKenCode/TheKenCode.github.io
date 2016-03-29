$(document).ready(function(){
	var haveKey = false;
	$('#submit').click(function(){
		haveKey =  false;
		
		if(document.URL != "https://thekencode.github.io/" && document.URL != "http://thekencode.github.io/"){
			haveKey = true;
			console.log("changed");
			for(var i = 0; i < document.URL.length; i++){
				if(document.URL.charAt(i) != '#' && i == document.URL.length - 1){
					console.log("Getting Token");
					gettingToken("token");
				}
			};
		}
		
		if(haveKey == false){
			console.log("Getting Code");
			gettingToken("code");
		}
		
		var searchKey = $("#search").val();

		var access_token = document.URL;
		
		for(var i = 0; i < access_token.length; i++){
			if(access_token.charAt(i) == '=' && access_token.charAt(i + 1) >= '0'){
				access_token = access_token.substring(i + 1, access_token.length);
				break;
			}
			else if(i == access_token.length - 1){
				access_token = "";
				break;
			}
		};
		
		console.log(access_token);
	});
	function gettingToken(type){
		window.location.replace("https://api.instagram.com/oauth/authorize/?client_id=27292a5037854cd2b819fb12fb114642&redirect_uri=https://thekencode.github.io&response_type=" + type);
	}
	function gettingSearch(search, access_token){
		$.ajax({
			url: "https://api.instagram.com/v1/tags/" + search + "?access_token=" + access_token,
			dataType: 'jsonp',
			success: function(data){
				console.log(data);
				haveKey = false;
			},
			error: function(){
				window.location.replace("https://api.instagram.com/oauth/authorize/?client_id=27292a5037854cd2b819fb12fb114642&redirect_uri=https://thekencode.github.io&response_type=code");
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
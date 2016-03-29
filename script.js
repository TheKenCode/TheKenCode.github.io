$(document).ready(function(){
	var haveKey = false;
	gettingCodeAndToken();
	$('#submit').click(function(){
		haveKey =  false;
		
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
		gettingSearch(searchKey, access_token);
	});
	function gettingCodeAndToken(){
		if(document.URL != "https://thekencode.github.io/" && document.URL != "http://thekencode.github.io/"){
			haveKey = true;
			console.log("changed");
			var containsToken = false;
			for(var i = 0; i < document.URL.length; i++){
				if(document.URL.charAt(i) == '#'){
					containsToken = true;
				}
			};
			
			if(containsToken == false){
				console.log("Getting Token");
				gettingToken("token");
			}
		}
		
		if(haveKey == false){
			console.log("Getting Code");
			gettingToken("code");
		}
	};
	function gettingToken(type){
		window.location.replace("https://api.instagram.com/oauth/authorize/?client_id=27292a5037854cd2b819fb12fb114642&redirect_uri=https://thekencode.github.io&scope=public_content&response_type=" + type);
	}
	function gettingSearch(search, access_token){
		$.ajax({
			url: "https://api.instagram.com/v1/tags/" + search + "?access_token=" + access_token + "&scope=public_content",
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
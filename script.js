$(document).ready(function(){
	if(document.URL != "thekencode.github.io"){
		$(".link").hide();
		$("#submit").show();
	}
	$('#submit').click(function(){
		var searchKey = {
			q: $("#search").val()
		};
		
		//27292a5037854cd2b819fb12fb114642
		//9166072075b447239abdafc592fb52ab
		//https://thekencode.github.io
		
		var access_token = document.URL;
		for(var i = 0; i < access_token.length; i++){
			if(access_token.charAt(i) == '=' && access_token.charAt(i + 1) >= '0'){
				access_token = access_token.substring(i + 1, access_token.length);
				break;
			}
		};
		
		console.log(access_token);
		
		$.ajax({
			url: "https://api.instagram.com/v1/tags/search?q="+ $("#search").val() + "&access_token=" + access_token,
			dataType: 'jsonp',
			success: function(data){
				console.log(data);
			}

		});
	});
	
	
});
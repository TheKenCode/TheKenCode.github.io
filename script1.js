$(document).ready(function(){
	var Search = "The Hunger Games";
	var index = "Books";
	var stamp = new Date().getDate();
	console.log(stamp);
	ajaxRequest(keyWord(Search), index, stamp, "");
	
	function ajaxRequest(search, searchIndex, timeStamp, signature){
		var accessId = 'AKIAJPQSAOBBHUQRL5AQ';
		var associateId = 'thekencodegit-20';
		
		
		$.ajax({
			url: 'https://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=' 
			+ accessId 
			+ '&AssociateTag=' 
			+ associateId
			+ '&Operation=ItemSearch&Keywords='
			+ search
			+ '&SearchIndex='
			+ searchIndex
			+ '&Timestamp='
			+ timeStamp 
			+ '&Signature='
			+ signature,
			dataType: 'xml',
			crossDomain: true,
			success: function(data){
				console.log(data);
			}
		});
	}
	function keyWord(word){
		var array = word.split(" ");
		var searchWord = "";
		for(var i = 0; i < array.length; i++){
			if(i < array.length - 1){
				searchWord = searchWord + array[i] + "%20";
			}
		};
		return searchWord;
	};
	
	
});
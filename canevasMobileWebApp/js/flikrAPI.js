function _imageURL(image,size){
	return "http://farm"+image.farm+".static.flickr.com/"+image.server+"/"+image.id+"_"+image.secret+size+".jpg";
}

function getImageURL(image,size){
	return _imageURL(image,'');
}

function getSmallImageURL(image) {
	return _imageURL(image,'_s');
}

function getMediumImageURL(image) {
	return _imageURL(image,'_m');
}

function getFlikrApiURL(params) {
	var defaultParams = {
		format: 'json',
		jsoncallback: '?',
		api_key: 'ebf544d71ef2dc3c22024ff5eec46aa9', // <---------------------------
		method: 'flickr.photos.search',
		text: 'cats',
		per_page: 1
	};

	// overload default options with ones that have been passed if any
	params = $.extend(defaultParams, params);
	
	var apiurl = "https://api.flickr.com/services/rest/?";
	$.each(params,function(key,value){	
		apiurl += '&'+key+'='+value;
	});
	
	return apiurl;
}

function getFlikrApiURLForTextAndNumber(text,numberOfImages) {
	return getFlikrApiURL({text: text, per_page: numberOfImages});
}

function getFlikrApiURLForText(text) {
	return getFlikrApiURL({text: text});
}
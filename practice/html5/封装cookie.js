var cookie = {
	setCookie: function(key, value, day){
		var str = key + '=' + value + ';'
		if(day){
			var now = new Date();
			now.setDate(now.getDate() + day);
			str +='expires' + now;
		}
		document.cookie = str;
	},
	getCookie: function(key){
		var str = document.cookie;
		var arr = str.split('; ');
		for(var i=0;i<arr.length; i++){
			var str2 = arr[i];
			var arr2 = str2.split('=');
			if(arr2[0] == key){
				return arr2[1];
			}
		}
	},
	delCookie: function(key){
		setCookie(key, '', -1);
	}
};
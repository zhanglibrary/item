define(function(){
	function sortArray(arr){
		return arr.sort(function(a, b){
			return a-b;
		});
	}
	return sortArray;
});
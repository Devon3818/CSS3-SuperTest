define(function(require,exports){


	window.bBtn = true;
	
	window.onhashchange = function(){
		if(window.bBtn){
			window.location.reload();
		}
	};
	
	require('show.js').show();
	
	

});
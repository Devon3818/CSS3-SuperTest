define(function(require,exports){

	function hide(){
		
		var oWrap = document.getElementById('wrap1');
		var oDiv = oWrap.getElementsByTagName('div');
		var oDd = document.getElementsByClassName('dd');
		
		for(var i=0; i<oDd.length; i++){
			oDd[i].onclick = function(){
				
				var hash = this.dataset.hash;
				
				alert(hash);
				
				window.bBtn = false;
				
				switch(window.location.hash.substring(1) || 'con-1'){
					case 'con-1':
						require('oWrap1out.js').init();
					break;
					case 'con-2':
						require('oWrap2out.js').init();
					break;
					case 'con-3':
						require('oWrap3out.js').init();
					break;
					case 'con-4':
						require('oWrap4out.js').init();
					break;
				}
			}
		}
		
	};
	
	exports.hide = hide;

})
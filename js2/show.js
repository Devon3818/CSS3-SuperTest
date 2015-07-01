define(function(require,exports){

	function show(){
	
		var firstHash = window.location.hash.substring(1) || 'index';
		
	
		
		
		if(firstHash == 'index'){
			
			//alert(firstHash);
			
			require('index.js').init();
		}
		
			var Hwrap = document.getElementsByClassName('wrap');
			//alert(Hwrap.length);
			var oDd = document.getElementsByClassName('dd');
			
			for(var i=0; i<Hwrap.length; i++){
				
				Hwrap[i].style.display = 'none';
				
				if(firstHash == oDd[i].dataset.hash){
					Hwrap[i].style.display = 'block';
					
					switch(firstHash){
						
						case 'con-1':
							require('oWrap1.js').init();
						break;
						case 'con-2':
							require('oWrap2.js').init();
						break;
						case 'con-3':
							require('oWrap3.js').init();
						break;
						case 'con-4':
							require('oWrap4.js').init();
						break;
					}
				}
			
			}
		
		//require('oWrap1.js').init();
	
	};
	
	exports.show = show;

});
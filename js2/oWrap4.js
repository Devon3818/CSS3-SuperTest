define(function(require,exports){

	function init(){
	
		var oBack= document.getElementById('back4');
		var wrap0 = document.getElementById('wrap0');
		wrap0.style.display = 'none';
	
	
	
		var wrap4 = document.getElementById('wrap4');
		
		
		wrap4.style.opacity = 1;
		wrap4.style.transition = 'opacity 500ms';
		
		wrap4.addEventListener('transitionend',fnEnd1,false);
	
		function fnEnd1(e){
	
			this.removeEventListener('transitionend',fnEnd1,false);
	
			//-------------------------------------------
			
			var oW4img = document.getElementsByClassName('w4-img');
			var oP = document.getElementsByClassName('w4-p');
			var pp = document.getElementsByClassName('pp');
			var itimer = 0;
			var iNow = 0;
			var timer = null;
			
			
			setTimer(iNow);
			
			
			function setTimer(iNow){
				
				if(iNow < 5){
				
					setTimeout(function(){
						toMove(iNow);
						iNow ++;
						
						setTimer(iNow);
						//alert(123);
				
					},500);
				
				};
				
			};
			
			
			for(var i=0; i<oW4img.length;i++){
				
				oW4img[i].index = i;
				
			};
			
			
			function toMove(iNow){
				
				//setInterval(fn(iNow),3000);
				var oImgw = oW4img[iNow];
				clearInterval(oImgw.timer);
				var iImg = 1;
				
				function fn(){
					if(iImg < 3){
						iImg++;
					}else{
						iImg = 1
					};
					
					oImgw.style.transition = 'opacity 500ms';
					oImgw.style.opacity = '0.1';
					oImgw.addEventListener('transitionend',fnEnd,false);
					
					//oImgw.src = './img2/c'+ iImg +'-'+ (oImgw.index+1) +'.png';
					
				};
				
				function fnEnd(e){
					this.removeEventListener('transitionend',fnEnd,false);
					this.style.opacity = '1';
					this.src = './img2/c'+ iImg +'-'+ (this.index+1) +'.png';
				};
				
				
				fn();
				oImgw.timer = setInterval(fn,4000);
				
			};
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			//-------------------------------------------
			
			
			
			oBack.onclick = function(){
				
				
				wrap4.style.opacity = 0;
				wrap4.addEventListener('transitionend',fnEnd2,false);
				
				function fnEnd2(e){
				
					this.removeEventListener('transitionend',fnEnd2,false);
					window.location.hash = 'index';
					require('show.js').show;
				
				};
			
			};
		
		};
	
	};
	
	exports.init = init;

})
define(function(require,exports){

	function init(){
	
		
		var oWrap = document.getElementById('wrap0');
		var oDiv = oWrap.getElementsByTagName('div');
		var iNow = 0;
		var iNow2 = null;
		var timer = null;
		var hash = null;
		var oDivLen = oDiv.length;
		//alert(oWrap);
		
		//oWrap.style.display = 'block';
		oWrap.style.transition = 'opacity 3s';
		oWrap.style.opacity = '1';
		
		
		
		function setTime(iNow){
		
			
			if(iNow < oDivLen){
				setTimeout(function(){
					toMove(iNow);
					iNow++;
					setTime(iNow);
				},500);
			};
		};
		
		setTime(iNow);
		
		function toMove(iNow){
		
			var oDiv2 = oDiv[iNow];
			
			oDiv2.iNow2 = 1;
			clearInterval(oDiv2.timer);
			function fn(){
				oDiv2.style.transition = "top 2s cubic-bezier(0.500, -0.600, 0.555, 1.650)";
				oDiv2.style.MozTransition = "top 2s cubic-bezier(0.500, -0.600, 0.555, 1.650)";
				oDiv2.style.WebkitTransition = "top 2s cubic-bezier(0.500, -0.600, 0.555, 1.650)";
				oDiv2.style.oTransition = "top 2s cubic-bezier(0.500, -0.600, 0.555, 1.650)";
				oDiv2.style.top = -588*5 + (oDiv2.iNow2*-588) + "px";
				oDiv2.addEventListener('transitionend',function(){
					this.style.transition = 'none';
					this.style.MozTransition = 'none';
					this.style.WebkitTransition = 'none';
					this.style.oTransition = 'none';
					this.style.top = (oDiv2.iNow2-1)*-588 + 'px';
				},false);
				
				oDiv2.removeEventListener('transitionend',function(){
					this.style.transition = 'none';
					this.style.MozTransition = 'none';
					this.style.WebkitTransition = 'none';
					this.style.oTransition = 'none';
					this.style.top = (oDiv2.iNow2-1)*-588 + 'px';
				},false);
				
				
				if(oDiv2.iNow2<4){
					oDiv2.iNow2++;
					//alert(oDiv2.iNow2);
				}else{
					oDiv2.iNow2 = 1;
				};
			}
			fn();
			oDiv2.timer = setInterval(fn,7000);
		};
		
		
		//新增加
		  for(var i=0; i<oDiv.length; i++){
			
			oDiv[i].onclick = function(){
			
				
				//require('hide.js').hide;
				hash = this.dataset.hash;
				//alert(hash);
				//window.location.hash = hash;
				//require('show.js').show;
				
				oWrap.style.transition = 'opacity 500ms';
				
				oWrap.style.opacity = 0;
				oWrap.addEventListener('transitionend',fnEnd,false);
				
				function fnEnd(e){
					
							
					this.removeEventListener('transitionend',fnEnd,false);
					window.location.hash = hash;
					require('show.js').show;
							
				};
				
			};
			oDiv[i].onmouseover = function(){
			
				for(var j=0; j<oDiv.length; j++){
					oDiv[j].style.opacity = 0.6;
				}
				this.style.opacity = 1;
			}
			oDiv[i].onmouseout = function(){
			
				for(var j=0; j<oDiv.length; j++){
					oDiv[j].style.opacity = 1;
				}
				
			}
		
		};
		
	
	};
	
	exports.init = init;
	
});
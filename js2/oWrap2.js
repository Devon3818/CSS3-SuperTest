define(function(require,exports){

	function init(){
		
		var oBack= document.getElementById('back2');
		var wrap0 = document.getElementById('wrap0');
		wrap0.style.display = 'none';
		
		
		
		
		var wrap2 = document.getElementById('wrap2');
		
		wrap2.style.transition = 'opacity 500ms';
		wrap2.style.opacity = 1;
		
		wrap2.addEventListener('transitionend',fnEnd1,false);
		
		
		
		function fnEnd1(e){
		
		
			this.removeEventListener('transitionend',fnEnd1,false);
		
			//------------------------------------
			
			
			var oLeft = document.getElementById('left');
			var oRight = document.getElementById('right');
			var oLi = document.getElementById('li1');
			var  oUl = document.getElementById('ul-1');
			var oLia = oUl.getElementsByTagName('li');
			var iNow = 0;
			var oLd = 0;
			var oLiWidth = oLi.offsetWidth;
			var sm = document.getElementsByClassName('sm');
			var Index = null;
			//alert(sm.length);
			
			 for(var i=0; i<sm.length; i++){
				sm[i].Index = i;
			};
			
			oLeft.onclick = function(){
				if(iNow == 14){
					iNow = 0;
					oLd = iNow;
					toLeft();
					move();
				}else{
					iNow ++;
					oLd = iNow;
					toLeft();
					move();
				}
				
				
			};
			oRight.onclick = function(){
				if(iNow == 0){
					iNow = 14;
					toLeft();
					move();
				}else{
					iNow --;
					toLeft();
					move();
				}
				
			};
			
			function move(){
			
				oUl.style.transition = 'left 500ms cubic-bezier(0.975, -0.330, 0.600, 0.985)';
				oUl.style.left = -1 * oLiWidth * iNow;
			}
			
			toLeft();
			
			function toLeft(){
				for(var i=0; i<sm.length; i++){
					
					sm[i].style.transition = 'all 500ms';
					
					var min = Math.abs(iNow - i);
					var ZIndex = 50;
					
					//alert(min);
					if( i < iNow){
						sm[i].style.zIndex = ZIndex + i;
						if(min < 6){
							sm[i].style.left = i*50 +'px';
							sm[i].style.transform = 'scale('+ (1-min*0.1) +','+ (1-min*0.1) +')';
						}else{
							
							sm[i].style.transform = 'scale(0.5,0.5)';
						}
					}else if( i > iNow){
						
						
						sm[i].style.zIndex = ZIndex - i;
						sm[i].style.left = i*50 + 50 + 'px';
						
						//alert(min);
						if( min < 6){
							sm[i].style.transform = 'scale('+ (1-min*0.1) +','+ (1-min*0.1) +')';
						}else{
							sm[i].style.transform = 'scale(0.5,0.5)';
						}
					}else{
						sm[i].style.transform = 'scale(1,1)';
						sm[i].style.zIndex = '500';
						sm[i].style.left = i*50 + 20 +'px';
					};
					
				};
			};
			
			for(var i=0; i<sm.length; i++){
				var index;
				sm[i].index = i;
				sm[i].onmouseover = function(){
					//alert(12);
					iNow = this.index;
					//alert(this.index);
					toLeft();
				};
			};
			
			for(var i=0; i<sm.length; i++){
				var index;
				sm[i].index = i;
				sm[i].onmouseout = function(){
					//alert(12);
					iNow = oLd;
					//alert(this.index);
					toLeft();
				};
			};
			
			for(var i=0; i<sm.length; i++){
				var index;
				sm[i].index = i;
				sm[i].onclick = function(){
					//alert(12);
					iNow = this.index;
					oLd = iNow;
					//alert(this.index);
					toLeft();
					move();
				};
			};
			
			
			
			//------------------------------------
			
			
			
			
			
			
			oBack.onclick = function(){
			
				wrap2.style.opacity = 0;
				
				wrap2.addEventListener('transitionend',fnEnd2,false);
				
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
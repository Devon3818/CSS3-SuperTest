define(function(require,exports){

	function init(){
		var oBack= document.getElementById('back');
		var wrap0 = document.getElementById('wrap0');
		wrap0.style.display = 'none';
		var wrap1 = document.getElementById('wrap1');
		
		wrap1.style.opacity = 1;
		wrap1.style.transition = 'opacity 500ms';
		
		wrap1.addEventListener('transitionend',fnEnd1,false);
		
		function fnEnd1(e){
		
			//------------------------------
			
			this.removeEventListener('transitionend',fnEnd1,false);
			
			var oBtn = document.getElementsByClassName('btn');
			var oWrapw = document.getElementsByClassName('wrap-w');
			var oTitle = document.getElementsByClassName('title');
			var oCont = document.getElementsByClassName('cont');
			var oXiezi = document.getElementsByClassName('xiezi');
			var index;
			var iNow = 1;
			
			
			oWrapw[0].style.transition = 'opacity 500ms';
			oWrapw[0].style.opacity = 1;
			oWrapw[0].style.left = '346px';
			oTitle[0].style.top = '64px';
			oCont[0].style.top = '156px';
			oXiezi[0].style.top = '330px';
			oTitle[0].style.opacity = 1;
			oCont[0].style.opacity = 1;
			
			
			
			oBtn[0].style.transform = 'scale(2,2)';
			
			for(var i=0; i<oBtn.length; i++){
				
				
				
				oBtn[i].index = i;
					
				oBtn[i].onmouseover = function(){
					
					
					for(var j=0; j<oBtn.length;j++){
						oBtn[j].style.transform = 'scale(1,1)';
					};
					
					this.style.transform = 'scale(2,2)';
					
					if(this.index != iNow -1){
						//alert(iNow);
						var _index = this.index; 
						iNow -=1;
						oWrapw[iNow].style.transition = 'all 300ms';
						oWrapw[iNow].style.transform = 'scale(0,0)';
						
						oWrapw[iNow].addEventListener('transitionend',fnEnd,false);
						
						
						iNow = this.index + 1;
						
					}
					
					
					function fnEnd(e){
						
						//alert(_index);
						this.removeEventListener('transitionend',fnEnd,false);
						for(var j=0; j<oBtn.length; j++){
							oWrapw[j].style.transition = 'none';
							oWrapw[j].style.opacity = 0;
							oWrapw[j].style.left = '-900px';
							oTitle[j].style.opacity = 0;
							oTitle[j].style.top = '264px';
							oCont[j].style.opacity = 0;
							oCont[j].style.top = '356px';
							oXiezi[j].style.top = '720px';
							oWrapw[j].style.transform = 'scale(1,1)';
						};
						
						
						oWrapw[_index].style.opacity = 1;
						oWrapw[_index].style.left = '346px';
						oTitle[_index].style.top = '64px';
						oCont[_index].style.top = '156px';
						oXiezi[_index].style.top = '330px';
						
						
						oTitle[_index].style.opacity = 1;
						oCont[_index].style.opacity = 1;
						
						
						oTitle[_index].style.transition = 'all 400ms';
						oCont[_index].style.transition = 'all 400ms';
						oXiezi[_index].style.transition = 'top 400ms';
						
						
						
						
					
					};
					
					/* for(var j=0; j<oBtn.length; j++){
						oWrapw[j].style.opacity = 0;
						oWrapw[j].style.left = '-900px';
						oTitle[j].style.opacity = 0;
						oCont[j].style.opacity = 0;
					}
					
					
					
					oWrapw[this.index].style.opacity = 1;
					oWrapw[this.index].style.left = '346px';
					oTitle[this.index].style.top = '64px';
					oCont[this.index].style.top = '156px';
					oXiezi[this.index].style.top = '330px';
					
					
					oTitle[this.index].style.opacity = 1;
					oCont[this.index].style.opacity = 1;
					
					
					oTitle[this.index].style.transition = 'all 400ms';
					oCont[this.index].style.transition = 'all 400ms';
					oXiezi[this.index].style.transition = 'top 400ms'; */
					
				
					
					
				};
				
			}
			
			
			
			
			//-----------------------------------
			
			
			oBack.onclick = function(){
				wrap1.style.opacity = 0;
				wrap1.addEventListener('transitionend',fnEnd2,false);
				
				function fnEnd2(e){
					
					this.removeEventListener('transitionend',fnEnd2,false);
					window.location.hash = 'index';
					require('show.js').show;
					
				};
				
				
			
			}
		
		};
	};
	
	exports.init = init;

})
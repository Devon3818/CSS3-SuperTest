define(function(require,exports){

	function init(){
	
		var oBack= document.getElementById('back3');
		var wrap0 = document.getElementById('wrap0');
		wrap0.style.display = 'none';
		
		
		
		var wrap3 = document.getElementById('wrap3');
		
		wrap3.style.opacity = 1;
		wrap3.style.transition = 'opacity 500ms';
		
		wrap3.addEventListener('transitionend',fnEnd1,false);
		
		
		
		
		function fnEnd1(e){
		
	
			this.removeEventListener('transitionend',fnEnd1,false);
	
			
			//--------------------------------------------------
			
			
			var oShort = document.getElementById('short');
			var oTable1 = document.getElementById('table-1');
			var oImgList = document.getElementById('img-list');
			 
			var listImg = oShort.getElementsByTagName('img')[0];
			var oImgC = oImgList.getElementsByTagName('div');
			var oImgcImg = document.getElementsByClassName('iimg');
			var oUl = document.getElementById('t-ul');
			var oLi = oUl.getElementsByTagName('li');
			var timer = null;
			var iNow = 0;
			var iMg = 1;
			var settime = 100;
			var _zIndex = 4;
			
			
			//alert(oImgcImg.length);
			
			oShort.style.left = '52px';
			oTable1.style.left = '0px';
			
			/* oImgC[0].style.top = '78px';
			oImgC[1].style.left = '830px';
			oImgC[2].style.top = '294px'; */
			
			for(var i=0; i<oImgC.length;i++){
				
				
				
				
				oImgC[i].onmouseover = function(){
					
					for(var j=0; j<oImgC.length; j++){
						oImgC[j].style.transform = 'scale(1,1)';
					};
					
					
					_zIndex++;
					this.style.transition = 'all 200ms cubic-bezier(0.480, -0.600, 0.605, 1.650)';
					this.style.zIndex = _zIndex;
					this.style.transform = 'scale(1.2,1.2)';
					
				};
				
				
				oImgC[i].onmouseout = function(){
					this.style.transform = 'scale(1,1)';
				};
				
			};
			
			
			for(var i=0; i<oLi.length; i++){
				oLi[i].index = i;
				oLi[i].onmouseover = function(){
					clearInterval(timer);
					iMg = this.index;
					fn();
					this.style.transition = 'all 400ms';
					this.style.transform = 'scale(1.2,1.2)';
				};
				oLi[i].onmouseout = function(){
					moveImg();
					this.style.transform = 'scale(1,1)';
				};
			};
			
			
			moveImg();
			function moveImg(){
				
				timer = setInterval(fn,3500);
				
			};
			
			
			
			
			
			function fn(){
				
					
				
					if(iMg > 2){
						iMg = 1;
					}else{
						iMg++;
					};
					for(var i=0; i<oImgcImg.length; i++){
						oImgcImg[i].style.transition = 'opacity 400ms';
						oImgcImg[i].style.opacity = 0;
					};
					//alert(iMg);
					listImg.style.transition = 'opacity 400ms';
					listImg.style.opacity = '0'
					listImg.addEventListener('transitionend',fnEnd,false);
					
					function fnEnd(e){
						
						this.removeEventListener('transitionend',fnEnd,false);
						this.src = './img2/b'+ iMg +'.png';
						listImg.style.opacity = '1';
						
						for(var i=0; i<oImgcImg.length; i++){
						oImgcImg[i].src = './img2/b'+ iMg + '-' + (i+1) + '.png'
						oImgcImg[i].style.opacity = 1;
						};
						
					};
					
					//listImg.src = './img2/b'+ iMg +'.png';
				
				
			};
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			//alert( document.body.clientWidth);
			
			move();
			function move(){
				
				if(iNow < 3){
					setTimeout(function(){
						
						setTime(iNow);
						iNow++;
						move();
						settime += 60;
					},settime);
				};
				
			};
			
			function setTime(iNow){
				if(iNow == 0){
					oImgC[0].style.top = '78px';
				};
				if(iNow == 1){
					oImgC[1].style.left = '830px';
				};
				if(iNow == 2){
					oImgC[2].style.top = '294px';
				};
			};
			
			
			
			//--------------------------------------------------
			
			oBack.onclick = function(){
				
				wrap3.style.opacity = 0;
				wrap3.addEventListener('transitionend',fnEnd2,false);
				
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
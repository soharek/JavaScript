document.addEventListener("DOMContentLoaded", function (event) {

    var picTable =[];
    var picIterator=0;
	var rightArrow = document.querySelector(".ion-ios-arrow-right"); 
	var leftArrow = document.querySelector(".ion-ios-arrow-left");
	var sliderBarIcons = document.querySelectorAll(".ion-ios-basketball-outline");
	
	console.log(window);

// code for arrows
	for(var i =1;i<11;i++){
    	picTable[i]=i+".jpg";
    }

    picTable[0] = "main.jpeg";

    console.log(picTable.length,"length")

	rightArrow.addEventListener("click", function(){
	    picIterator++;
	    if(picIterator==picTable.length){
	    	picIterator=0;
	    }

	    var headerImg = document.querySelector('.slider-foto');
	    headerImg.setAttribute("src",picTable[picIterator]);
	    
	})

	leftArrow.addEventListener("click", function(){
	   
	    picIterator--;
	    console.log(picIterator)
	    if(picIterator<0){
	    	picIterator=picTable.length-1;
	    }

	    var headerImg = document.querySelector('.slider-foto');
	    headerImg.setAttribute("src",picTable[picIterator]);
	    
	});

//code for slider icons

	for (var i = 0; i < sliderBarIcons.length; i++) {

		sliderBarIcons[i].setAttribute('value',i);
		
		sliderBarIcons[i].addEventListener("mouseover", function(event){
			this.setAttribute('class',"ion-ios-basketball");
		});

		sliderBarIcons[i].addEventListener("mouseout", function(event){
			this.setAttribute('class',"ion-ios-basketball-outline");
		});

		sliderBarIcons[i].addEventListener("click", function(){
			temp = this.getAttribute('value');
			var headerImg = document.querySelector('.slider-foto');
			var temp2 = headerImg.getAttribute('src');
			console.log(temp2);
			headerImg.setAttribute("src",picTable[temp]);
			temp2 = headerImg.getAttribute('src');
			picIterator=temp;
			console.log(temp,picIterator,temp2);


		});

	}
	    
	    
	    
});


// ion-ios-basketball
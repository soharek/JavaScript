        document.addEventListener("DOMContentLoaded", function (event) {

        var calculator ={

        digits: document.querySelectorAll(".cyfra"),
        operators: document.querySelectorAll(".operation"),
        display: document.getElementById("display"),
        clear: document.querySelector(".clear"),
        result: document.querySelector(".result"),
       
        
        initDigits: function(){
            for(var i =0;i<this.digits.length;i++){
                this.addEventToDigit(this.digits[i],this.display)
            }                
        },
            
        addEventToDigit: function(digitTd, displayPlace){
            digitTd.addEventListener("click",function(){
                if(displayPlace.innerHTML==0){
                    displayPlace.innerHTML="";
                }
                displayPlace.innerHTML +=digitTd.innerHTML;
                
            })
        },
            
        initOperators: function(){
            for(var i =0;i<this.operators.length;i++){
                this.addEventToOperator(this.operators[i],this.display)  
            }
        },
        
        
        addEventToOperator:function(operatorTD,displayPlace){
            operatorTD.addEventListener("click", function(){

            	
            	var temp = displayPlace.innerHTML[displayPlace.innerHTML.length-1];
            	
            	if(isNaN(temp)){
            		
            		displayPlace.innerHTML = displayPlace.innerHTML.slice(0, -1);
            	}

            	displayPlace.innerHTML +=operatorTD.innerHTML;

                    
                                                      
            })
        },            
        
            initClear: function(){
            calculator.clear.addEventListener("click", function(){
                calculator.display.innerHTML = 0;
                                
            })
        },
        
            initResult: function(){
                calculator.result.addEventListener("click",function(){
                display.innerHTML = eval(display.innerHTML);
                })
                                
        },


            
           
              initAll: function(){
              	calculator.initDigits();
            	calculator.initOperators();
            	calculator.initClear();
            	calculator.initResult();
              }          

//end of object
        }
        
        calculator.initAll();
        
        
        
        });
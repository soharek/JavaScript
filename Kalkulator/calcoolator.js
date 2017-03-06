document.addEventListener("DOMContentLoaded", function (event) {

    var calcoolator = {
        
        digits: document.querySelectorAll(".digit"),
        operations: document.querySelectorAll(".operation"),
        clear: document.querySelector(".clear"),
        display: document.querySelector(".display"),
        result: document.querySelector(".result"),
        inverse: document.querySelector(".inverse"),
        dot: document.querySelector(".dot"),
        brackets: document.querySelector(".brackets"),
        bracketOpen:false,
        dotAvailable: true,
        
      initDigits: function(digits){
            for(var i =0;i<digits.length;i++){
                this.addEventToDigit(digits[i])
             }            
        },

        addEventToDigit: function(digit){
            digit.addEventListener("click",function(){
                if(calcoolator.display.innerHTML==="0"){
                    calcoolator.display.innerHTML="";
                }
                calcoolator.display.innerHTML += digit.innerHTML;

            })
        },

        initOperators: function(operators){
            for(var i =0;i<operators.length;i++){
                this.addEventToOperator(operators[i])
             }
        },

        addEventToOperator: function(operator){
            operator.addEventListener("click",function(){

                var temp = calcoolator.display.innerHTML[calcoolator.display.innerHTML.length-1];

                if((temp=="+" || temp=="-" || temp=="*" || temp=="/" || temp==".")){

                    calcoolator.display.innerHTML = calcoolator.display.innerHTML.slice(0, -1);
                }

                calcoolator.display.innerHTML +=operator.innerHTML;
                calcoolator.dotAvailable=true;

            })
                     
        },


        
        initDot: function(){
            this.dot.addEventListener("click",function(){
                var temp = calcoolator.display.innerHTML[calcoolator.display.innerHTML.length-1];
                console.log(temp);
                if(!isNaN(temp) && calcoolator.dotAvailable==true){
                    calcoolator.display.innerHTML+=calcoolator.dot.innerHTML;
                    calcoolator.dotAvailable=false;
                }
                 
            })
        },
        
        initInverse: function(){
            this.inverse.addEventListener("click", function(){
                calcoolator.display.innerHTML =Number(calcoolator.display.innerHTML)*(-1);
                
            })
        },
        
        initClear: function(){
            this.clear.addEventListener("click", function(){
                calcoolator.display.innerHTML=0;
                calcoolator.bracketOpen = false;
                calcoolator.dotAvailable = true;
               
            })
        },
        
        initResult: function () {
            this.result.addEventListener("click",function() {
                var a = calcoolator.display.innerHTML;
                calcoolator.display.innerHTML = solveEquastion(a);
            })
        },
        
        initBrackets: function (){
            this.brackets.addEventListener("click",function() {
                if(calcoolator.bracketOpen==false){
                    if(calcoolator.display.innerHTML=="0")
                        calcoolator.display.innerHTML="";
                    
                    calcoolator.display.innerHTML+="(";
                    calcoolator.bracketOpen=true;
                }
                else{
                    calcoolator.display.innerHTML+=")";
                    calcoolator.bracketOpen=false;
                }
            })
        }


    };
    
    
    calcoolator.initDot();
   // calcoolator.initInverse();
    calcoolator.initClear();
    calcoolator.initDigits(calcoolator.digits);
    calcoolator.initOperators(calcoolator.operations);
    calcoolator.initResult();
    calcoolator.initBrackets();

});
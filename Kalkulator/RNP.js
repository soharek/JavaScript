Array.prototype.isEmpty = function () {
    if(this.length===0) return true;
    else{
        return false;
    }
};

Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};




function solveEquastion(equastion) {
    return countRPN(toRPN(splitToOperators(equastion)));
}
//234*+
function countRPN(arrayRPN) {

    var stack = [];
    for(var i = 0; i< arrayRPN.length;i++){



        if(!isNaN(arrayRPN[i])){
            stack.push(arrayRPN[i]);

        }
        else{
            var operator = arrayRPN[i];
            var a = Number(stack.pop());
            var b = Number(stack.pop());
            stack.push(basicOperation(a,b,operator));
            }
    }

    var result = stack[0];

    return result;
}

function toRPN(equastion) {

    var stack = [];
    var result = [];



    for (var i = 0; i < equastion.length; i++) {

        console.log("kolejne iteracje",stack,stack.length,stack[stack.length-1]);

        if(equastion[i]===")"){

            do{

                if(stack[stack.length-1]==="("){
                    stack.pop();
                    break;
                }

                temp = stack.pop();
                result.push(temp);

            }while(!stack.isEmpty());

            continue;
        }

        if (isNaN(equastion[i]) == false) {
            result.push(equastion[i]);
            continue;

        }

         if (isNaN(equastion[i]) && stack.length === 0) {

            stack.push(equastion[i]);
            continue;
        }

        if(equastion[i]==="("){

            stack.push(equastion[i]);
            continue;
        }


        if ((equastion[i] === "+" || equastion[i] === "-") && stack.length >0) {

            if(stack[stack.length-1]=="(")
            {
                stack.push(equastion[i]);
                continue;
            }
            do{

                 if(stack[stack.length-1]==="(")
                    break;

                temp = stack.pop();
                result.push(temp);

            }while(!stack.isEmpty());

            stack.push(equastion[i]);

            continue;
        }

        if (stack.length >0
            && (equastion[i] === "*" || equastion[i] === "/")
            && (stack[stack.length-1]==="+" || stack[stack.length-1]==="-")
            || stack[stack.length-1]==="("){

            stack.push(equastion[i]);

            continue;
        }

        if (stack.length >0
            && (equastion[i] === "*" || equastion[i] === "/")
            && (stack[stack.length-1]==="*" || stack[stack.length-1]==="/")){

            do{
                if(stack[stack.length-1]==="(")
                    break;

                temp = stack.pop();
                result.push(temp);


            }while(stack[length-1]==="+" || stack[length-1]==="+");

            stack.push(equastion[i]);
            //continue;
        }

    }
        do{
            temp = stack.pop();
            result.push(temp);
        }while(!stack.isEmpty());

        return result;

}

function splitToOperators(expression) {

    var temp = "";
    var result = [];
    for (var i = 0; i < expression.length; i++) {
        if (i == 0 && expression[i] == "-") {
            temp += expression[i];
            continue;
        }
        //próba ogarnięcia liczb ujemnych
        if(isOperator(expression[i])==true && expression[i-1]=="("){
            temp+=expression[i];
            continue;
        }

        if (isOperator(expression[i]) == true) {
           result.push(temp);

            temp = "";
            result.push(expression[i]);
        }
        else {
            temp += expression[i];
        }
    }


    result.push(temp);

    result.clean("");

    return result;
}

function isOperator(char) {
    if (char == "+" || char == "-" || char == "*" || char == "/" || char == "(" || char == ")") return true;

    return false;
}

function basicOperation(a, b, operator) {

    switch (operator){
        case "*": return a*b;
        case "/": return b/a;
        case "-": return b-a;
        case "+": return a+b;

    }

}

var a = (splitToOperators("(-2+2)*5"));
console.log("A:",a);

var b =toRPN(a);
console.log("b:",b);

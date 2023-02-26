let expression = "";
let result = document.querySelector('.input-box');
Array.from(document.querySelectorAll('.btn')).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
                result.value = eval(expression);

        } else if (e.target.innerHTML == '%') {
            try{
                expression = Number(eval(expression))/100;
                result.value = expression;
            } catch(err){
                result.value = "invalid input";
            }

        } else if (e.target.innerHTML == 'AC') {

            expression = "";
            result.value = expression;

        } else if (e.target.innerHTML == 'backspace') {

            expression = expression.slice(0,-1);
            result.value = expression;

        }
         else {
            
            expression = expression + e.target.innerHTML.replace(/x/g, '*');
            result.value = expression.replace(/\*/g, 'x');
        }
    })
})
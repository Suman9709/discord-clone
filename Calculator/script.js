const btns = document.querySelectorAll('.btns');
let displayarea = document.getElementById("display");
let expression = "";
btns.forEach(element => {
   element.addEventListener('click' , function(){
    expression += (element.innerHTML);
    displayarea.value = expression;
   }) 
});
const equal = document.getElementById("equal");
equal.addEventListener('click' , function(){
    displayarea.value = eval(expression);
})
const clr = document.getElementById("C");
clr.addEventListener('click', function(){
    displayarea.value = "";
    expression = "";
})

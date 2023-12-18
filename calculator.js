let no1 = 0.0,
    no2 = 0.0,
    op = '+';

function operate(no1,no2,op){
    switch(op){
        case '+':
            add(no1,no2);
            break;
        case '-':
            subtract(no1,no2);
            break;
        case 'x':
            multiply(no1,no2);
            break;
        case '/':
            divide(no1,no2);
            break;
    }
}




function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
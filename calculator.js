let no1 = 0.0,
    no2 = 0.0,
    op = '+',
    onscreen = '',
    result = 0;



let screen = document.querySelector('.screen');

let buttons = document.querySelectorAll('.number');

buttons.forEach(element => {
    element.addEventListener('click',() =>{
        fillscreen(element.textContent);
    });
});

let equal = document.querySelector('.equal');
equal.addEventListener('click',() =>{
    operate(no1,no2,op);
    fillscreen(result);
})




function fillscreen(no){
    onscreen = onscreen + no;
    if(screen.firstChild){
        const span = screen.firstChild;
        screen.removeChild(span);
    }

    const span = document.createElement('span');
    span.textContent = onscreen;
    // span.style.cssText = 'color: blue; background: white;';     
    screen.appendChild(span);

}

function operate(no1,no2,op){
    switch(op){
        case '+':
            result = add(no1,no2);
            break;
        case '-':
            result = subtract(no1,no2);
            break;
        case 'x':
            result = multiply(no1,no2);
            break;
        case '/':
            result = divide(no1,no2);
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




Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
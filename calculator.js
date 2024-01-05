let no1 = 0.0,
    no2 = 0.0,
    op = '',
    onscreen = '',
    result = 0.0;



let screen = document.querySelector('.screen');

let buttons = document.querySelectorAll('.number');

buttons.forEach(element => {
    element.addEventListener('click',() =>{
        fillscreen(element.textContent);
    });
});

let action = document.querySelectorAll('.action');

action.forEach(element =>{
    element.addEventListener('click',() =>{
        //take the operator
        op = element.textContent;
        //saving first no.
        no1 = parseFloat(onscreen);
        //clearing the screen
        if(screen.firstChild){
            const span = screen.firstChild;
            screen.removeChild(span);
        }
        onscreen = '';
    })
})



let equal = document.querySelector('.equal');

equal.addEventListener('click',() =>{
    no2 = parseFloat(onscreen);
    onscreen = '';
    operate(no1,no2,op);
    fillscreen(result);
})


let clr = document.querySelector('.clr');
clr.addEventListener('click',() =>{
    no1 = 0.0,
    no2 = 0.0,
    op = '',
    onscreen = '',
    result = 0.0;
    
    //clearing the screen
    if(screen.firstChild){
        const span = screen.firstChild;
        screen.removeChild(span);
    }
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
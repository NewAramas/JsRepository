// --первая задача--//
function mid(a,b){
    return ((a+b)/2)
}

// --вторая задача--//
function pow(x,n){
    var result=x;
    for(var i=1; i<n; i++){
        result=result*x;
    }
    return result;
}
// или все намного проще, используя встроенную функцию "Math"
function pow(x, n) {
    return Math.pow(x, n);
}
// --третья задача--//
let Func = () => {
    let a = +prompt('a?', '');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2 :
        case 3:
            alert('2,3');
            break;
        default:
            alert('Я таких значений не знаю');
    }
};
// --четвертая задача--//
function loopFor(x1,x2) {
    for(i=x1; i<=x2; i++){
        if (i%2){
            console.log(i);
        }
    }
}
loopFor(2,10);
//
function loopWhile(x1,x2){
    while (x1<=x2){
        if (x1%2!==0) {
            console.log(x1);
        }x1++;
    }
}
loopWhile(2,10);
//
function loopDoWhile(x1,x2) {
    do {
        if (x1 % 2 !== 0) {
            console.log(x1);
        }x1++;
    }
    while (x1<=x2);
}
loopDoWhile(2,10);

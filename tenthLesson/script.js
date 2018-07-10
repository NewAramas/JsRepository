// 1 задача
function count(str,I) {
    var result = 0;
    for (var resInd = -1; resInd <= str.length; resInd++) {

        if (~str.indexOf(I, resInd)) {
            resInd = str.indexOf(I, resInd);
            result++;
        }
    }
    if (result==0){
        alert("Совпадений не найдено")
    }else {
        alert("Количество символов " + I + " в строке '" + str + "': " +result);
    }
}
// 2 задача
function powX(x,n){
    x=Math.round(x);
    n=Math.round(n);
    var result=x;
    for(var i=1; i<n; i++){
        result=result*x;
    }
    return result;
}

// 3 задача
function checkingComb(str, comb){
    str=str.toLowerCase();
    comb=comb.toLowerCase();
    if( str.indexOf(comb)>=0){
        alert("true");
    }else
        alert("false");
}
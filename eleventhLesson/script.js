//первая задача
function isInArray (arr, el){
    if( arr.indexOf(el)!==-1){
        console.log('true');
    }else {console.log('false');}
}
isInArray([1, 2, 3 , `4`, `hello`],`hello`);
isInArray([1, 2, 3 , `4`, `hello`], 4);
//
//--Вторая задача--//
function modifyArr(arr, el, newEl) {
    var elementExist = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            elementExist = true;
            arr[i] = newEl;
        }
    }
    if (elementExist) {
        return arr;
    } else {
        return 'element ' + el + ' not found in array [' + arr + ']';
    }
}
console.log(modifyArr([1,2,3,4,5,3], 3, `hello`));
console.log( modifyArr([1,2,3,4,5], 6, `hello`));
console.log( modifyArr([1,2,3,4,5], 3, `hello`));

//--третяя задача--//
function transformString(str, el, newEl){
    var str1=str.toLowerCase();
    el1=el.toLowerCase();
    var len=el1.length;
    var arr=str.split(" ");
    var arr1=str1.split(" ");
    if( str1.indexOf(el1)>=0){
        var ind=arr1.indexOf(el);
        arr[ind]=newEl
        return arr.join(" ");
    }else
        return "element " +el+ " not found in string "+ str;
}

console.log(transformString(`my sUrNaMe is Ivanov`,`SURNAMES`, `name`));
console.log(transformString(`my naMe is Alex`,`name`, `coolName`));

//-- или второй вариант через replace--

function transformString(str, el, newEl) {
    var elementExist = false;
    var string = str.toLowerCase();
    var start = string.indexOf(el.toLowerCase());
    if (start !== -1) {
        elementExist = true;
        var result = str.replace(new RegExp(el, "ig"), newEl);
    }
    if (elementExist) {
        return result;
    } else {
        return 'element ' + el + ' not found in string ' + str;
    }

}
console.log(transformString(`my naMe is Alex`, `name`, `coolName`));
console.log(transformString(`my sUrNaMe is Ivanov`, `SURNAMES`, `name`));
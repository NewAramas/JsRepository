const infoAboutPersons = [{
    name: `Ivan`,
    sex: `M`,
    age: 21
},
    {
        name: `Olga`,
        sex: `W`,
        age: 19
    },
    {
        name: `Oleg`,
        sex: `M`,
        age: 27
    },
    {
        name: `Ann`,
        sex: `W`,
        age: 21
    },
    {
        name: `Alex`,
        sex: `M`,
        age: 30
    },
];
function middleAgeBySex(infoArray, sex){

    var arrAges = infoArray.filter((item) => item.sex == sex).map((item) => item.age);
    return arrAges.reduce((sum,current) => sum+current)/arrAges.length;

/////////////////// Another first method/////////////////////////////////////////////////////

    // var womenArr=infoArray.filter(function(item){
    //     return item.sex==sex;
    // });
    //
    // function middleAge(womenArr){
    //     var sum=0;
    //     womenArr.forEach(function (item) {
    //         sum += item.age;
    //     });
    //     return sum/womenArr.length;
    // }
    // return middleAge(womenArr);

////////////////////////////////////////////////////////////////////////

    // //////////////////Another method VIA FOR /////////////////////////////////////////////////////

    // var sum = 0;
    // var num = 0;
    // for (var i=0; i<infoArray.length; i++){
    //     if(infoArray[i].sex === sex){
    //         sum +=  infoArray[i].age;
    //         num++;
    //     }
    // }

////////////////////////Another method VIA FOR EACH /////////////////////////////////////////////////////

    // var sum = 0;
    // var num = 0;
    // infoArray.forEach(function (item) {
    //     if (item.sex === sex) {
    //         sum += item.age;
    //         num++;
    //     }
    // })
    //
    // return sum/num;

//////////////////////////////////////////////////////////////////////////////////////////////
}

var result=middleAgeBySex(infoAboutPersons, `W`);
alert(result);
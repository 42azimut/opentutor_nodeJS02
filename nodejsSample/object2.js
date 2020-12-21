// array, object


//error
// let i = if(true) {console.log(1)}
// let w = while(true) {console.log(1)}

// working....well
let fnc = function () {
    console.log(1+3);
};
console.log(fnc);
fnc();

// array배열에 원소로서 함수가 존재 가능!
let a = [fnc, 2, 'strong'];
a[0]();
console.log(a[2]);

// 오브젝트에 자료형만 가능한게 아님... 함수를 담아서 사용 가능!
let obj = {
    ff:fnc,
    num: [23, 34],
}
obj.ff();


//В программе объявлена переменная list, в которую записан массив. Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль.

let arr = [];
for(let val of list){
    if(val == false){
        break;
    }
    if(typeof val == "number"){
        arr.push(val);
    }

}

console.log(arr);
//В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.
let sum = 0;
function isSimple(number){
    if(number<2){
        return false
    }
    for(let i = 2; i< number;i++){
        if(number%i == 0){
            return false
        }
    }
    return true;
}
for(let val of list){
    if(isSimple(val)){
        sum += val
    }
}

console.log(sum);
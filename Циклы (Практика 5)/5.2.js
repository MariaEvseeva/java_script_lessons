// В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.


let word="мир";
let result = "";
for(let i = word.length-1; i>=0; i--){
    result+=word[i];
}
console.log(result)
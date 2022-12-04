// В программе объявлена переменная sentence со строковым значением. Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль.

// Метод строки split() использовать нельзя.

let word = "";
let arr = [];
for(let i = 0; i < sentence.length;i++){
    if(sentence[i] == " "){
        arr.push(word);
        word = "";
    }else{
        word += sentence[i];
    }
}
arr.push(word)
console.log(arr);
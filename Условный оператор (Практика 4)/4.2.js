// В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение переменной в число (parseInt) и в зависимости от полученного значения выполните следующее действие:

// если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
// если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
// в ином случае выведите в консоль значение числа

let price = "12 рублей";
if (isNaN(parseInt(price))) {
	console.log("Не число")
} else if (parseInt(price) <= 0) {
	console.log("Число не корректное")
} else {
	console.log(parseInt(price)) 
}



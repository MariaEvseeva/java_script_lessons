//В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль.



list_1.push(...list_2)
for (let i = 0; i < list_1.length; i++){
	list_1[i] = list_1[i]**2;
}
console.log(list_1)
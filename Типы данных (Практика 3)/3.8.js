// В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.

let name = "Анатолий";
let last_name = "Максимов";
let age = 32;
let obj = {
	name: name,
	last_name: last_name,
	age: age
};

console.log(obj);
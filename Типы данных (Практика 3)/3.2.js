// В программе заданы две переменные name и last_name, которые хранят имя и фамилию соответственно. Посчитайте общую длину имени и фамилии и выведите ее в консоль. Обратите внимание: в имени и фамилии по бокам могут быть пробельные символы — их считать не надо.

const name = "Всеволод";
const last_name = "\nСтарозубов";
console.log(name.trim().length + last_name.trim().length);
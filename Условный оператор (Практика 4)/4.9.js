// В дополнение к заданию 4.7 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!.

switch (sign) {
	case "*":
		console.log(a * b);
		break;
	case "-":
		console.log(a - b);
		break;
	case "/":
		console.log(b != 0?a / b:"Делить на 0 нельзя!");
		break;
	case "+":
		console.log(a + b);
		break;

}

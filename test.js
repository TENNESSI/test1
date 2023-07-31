function hello() {
	name = prompt("Как Вас зовут?")
	alert(`Привет, ${name}`)
}
function srsr(){
	a = confirm("Вы подтверждаете, что вам есть 18 лет")
	if (a == true) {
		hello()
	} else {
		alert("Пошел нахуй отсюда!!")
	}
}
srsr()

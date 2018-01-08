var a = prompt ("Wpisz wartość a"),
	b = prompt("Wpisz wartość b"),
	value = (a * a) - (2 * a * b) + (b * b);
alert("Wynik działania (a * a) - (2 * a * b) + (b * b) z następującymi wartościami: a = " + a + " i b = "+ b + " wynosi " + value + ".");
console.log("Wynik działania (a * a) - (2 * a * b) + (b * b) z następującymi wartościami: a = " + a + " i b = "+ b + " wynosi " + value + ".");

if (value > 0 ) {
	console.log("Wynik dodatni.");
} else if (value < 0 ) {
	console.log("Wynik ujemny.");
} else {
	console.log("Wynik równy zero.");
}


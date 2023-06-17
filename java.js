if (input1 < input3) {
    operacion = "El resultado de la multiplicación es: ";
    resultado = input1 * input2 * input3;
} else if (input2 === 0) {
    if (input1 > input2) {
        operacion = "El resultado de la resta es: ";
        resultado = input1 - input2 - input3;
    } else {
        operacion = "El resultado de la resta es: ";
        resultado = input2 - input1 - input3;
    }
}

document.getElementById("output").innerHTML = operacion + resultado;
}

function concatenar() {
var input1 = parseInt(document.getElementById("num1").value);
var input2 = parseInt(document.getElementById("num2").value);
var input3 = parseInt(document.getElementById("num3").value);
var resultado = "";

for (var i = 0; i < input1 * input2 + input3; i++) {
    resultado += input1 + "" + input2 + "" + input3 + " ";
}

document.getElementById("output").innerHTML = resultado;
}
&lt;/script&gt;
<label for="num2">Input 2:</label>
<input type="number" id="num2"><br>

<label for="num3">Input 3:</label>
<input type="number" id="num3"><br>

<button onclick="operacion()">Botón 1</button>
<button onclick="concatenar()">Botón 2</button>

<br>

<label for="output">Resultado:</label>
&lt;p id="output"&gt;&lt;/p&gt;
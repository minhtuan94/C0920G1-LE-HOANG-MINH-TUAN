
function addition() {
    let finish;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    finish = num1 + num2;
    document.getElementById("finish").innerText = finish;
}
function subtraction() {
    let finish;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    finish = num1 - num2;
    document.getElementById("finish").innerText = finish;
}
function multi() {
    let finish;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    finish = num1 * num2;
    document.getElementById("finish").innerText = finish;
}
function division() {
    let finish;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    finish = num1 / num2;
    document.getElementById("finish").innerText = finish;
}
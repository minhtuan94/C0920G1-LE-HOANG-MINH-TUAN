let result;

function convert() {
    let num = document.getElementById("num").value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    if (from === "VND" && to === "USD") {
        result = num / 23000;
    } else if (from === "USD" && to === "VND") {
        result = num * 23000;
    } else {
        result = num;
    }
    document.getElementById("result").innerText = result;

}
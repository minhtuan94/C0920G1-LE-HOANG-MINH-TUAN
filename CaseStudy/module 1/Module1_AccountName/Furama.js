let show;

function priceDown() {
    let paper = document.getElementById('paper').value;
    let birthday = document.getElementById('birthday').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let level = document.getElementById('level').value;
    let decrease = document.getElementById('decrease').value;
    let num = document.getElementById('num').value;
    let numDay = document.getElementById('numDay').value;
    let service = document.getElementById('service').value;
    let rentRoom = document.getElementById('rentRoom').value;
    let showvilla = document.getElementById('showvilla');
    let showroom = document.getElementById('showroom');
    let showhouse = document.getElementById('showhouse');
    console.log(decrease);
    if (service === "villa") {
        show = 500 * numDay * (1 - decrease / 100);
        showvilla.innerText = "Giá " + service + "\n" + show;
    } else if (service === "house") {
        show = 300 * numDay * (1 - decrease / 100);
        showhouse.innerText = "Giá " + service + "\n" + show;
    } else if (service === "room") {
        show = 100 * numDay * (1 - decrease / 100);
        showroom.innerText = "Giá " + service + "\n" + show;
    }
}


let show;
function numDay() {
    let inputMonth = document.getElementById('inputMonth').value;
    let showDate = document.getElementById('showDate');
    switch (parseInt(inputMonth)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            show = "Tháng có 31 ngày";
            break;
        case 2:
            show= "Tháng có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 11:
        case 9:
            show = "Tháng có 30 ngày";
            break;
    }
    showDate.innerText = show;
}
let show;
function hewe() {
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let bmi = weight.value / (height.value ^ 2);
    if (bmi<18.5) {
        show = 'Underweight';
    } else if (bmi < 25.0) {
        show = 'Normal';
    } else if (bmi < 30.0) {
        show = 'Overweight';
    } else {
        show = 'Obese';
    }
    document.getElementById('show').innerText=show;
}
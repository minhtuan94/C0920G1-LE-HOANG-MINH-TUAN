// let a = parseInt(prompt('Nhập vào một số: '));
// if (a<1) {
//     document.writeln("1");
// } else if(a<0){
//     document.writeln('-1');
// } else {
//     document.writeln('0');
// }
let show;
function result() {
    let num = document.getElementById('num').value;

    if (num<1) {
        show = 1;
    } else if(num<0){
        show = -1;
    } else {
        show = 0;
    }
    document.getElementById('show').innerText = show;
}

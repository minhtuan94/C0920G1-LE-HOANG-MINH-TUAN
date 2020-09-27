// Nhập dữ liệu từ bàn phím
// let year = parseInt(prompt("Enter a year"));
// // Phân loại và hiển thị kết quả
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + " is a leap year");
//         } else {
//             alert(year + " is NOT a leap year");
//         }
//     } else {
//         alert(year + " is a leap year");
//     }
// } else {
//     alert(year + " is NOT a leap year");
// }
// cách khác
// let year = parseInt(prompt("Enter a year"));
// let isLeapYear = false;
//
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             isLeapYear = true;
//         }
//     } else {
//         isLeapYear = true;
//     }
// }
//
// if (isLeapYear) {
//     alert(year + " is a leap year");
// } else {
//     alert(year + " is NOT a leap year");
// }
function result() {
    let num = document.getElementById('num').value;
    if (num % 4 == 0) {
        if (num % 100 == 0) {
            if (num % 400 == 0) {
                document.writeln(num + " là năm nhuận");
            } else {
                document.writeln(num + " không phải là năm nhuận");
            }
        } else {
            document.writeln(num + " là năm nhuận");
        }
    }else{
                document.writeln(num + " không phải là năm nhuận");
            }
        }

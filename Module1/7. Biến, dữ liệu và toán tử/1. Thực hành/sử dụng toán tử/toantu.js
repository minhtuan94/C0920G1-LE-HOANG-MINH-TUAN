//khai báo biến
let inputWidth;
let inputHeight;
//lấy dữ liệu nhập từ người dùng
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
//chuyển kiểu dữ liệu từ chuỗi sang số nguyên
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
//tính diện tích hình chữ nhật và hiển thị ra màn hình
let area = width * height;
document.write("The width is: " + inputWidth);
document.write("<br/>")
document.write("The height is: "+inputHeight);
document.write("<br/>")
document.write("The area is: " + area);
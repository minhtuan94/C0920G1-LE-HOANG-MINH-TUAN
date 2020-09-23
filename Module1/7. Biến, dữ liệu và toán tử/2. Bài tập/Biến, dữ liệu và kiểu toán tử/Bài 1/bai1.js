//khai báo biến và lấy dữ liệu nhập từ người dùng
let vatly = prompt('Nhập điểm vật lý');
let hoahoc = prompt('Nhập điểm hoa hoc');
let sinhhoc = prompt('Nhập điểm sinh học');
//chuyển đổi kiểu dl từ chuỗi sang số nguyên
let vl = parseInt(vatly);
let hh = parseInt(hoahoc);
let sh = parseInt(sinhhoc);
//tính điểm trung bình và tổng điểm
let dtb = (vl + hh + sh)/3;
let tong = vl + hh + sh;
document.writeln('Điểm trung bình là: ' + dtb);

document.writeln('Tổng điểm 3 môn: ' + tong);
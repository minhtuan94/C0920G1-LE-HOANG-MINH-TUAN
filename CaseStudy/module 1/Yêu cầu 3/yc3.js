let check = false;
function showinfo() {
    let names = document.getElementById('names').value;
    let paper = document.getElementById('paper').value;
        if (paper > 9999999 || paper < 1000000000) {
            document.getElementById('checkcmnd').innerText = "CMND đúng đinh dạng";
        }
    let birthday = document.getElementById("birthday").value;
        let email = document.getElementById("email").value;

    let address = document.getElementById("address").value;
    let typeService = document.getElementById("typeService").value;
    let typeRoom = document.getElementById("typeRoom").value;
    let typeCustomer = document.getElementById("typeCustomer").value;
    let discount = document.getElementById("discount").value;
    let quanlityInclued = document.getElementById('quanlityInclued').value;
    let renDays = document.getElementById("renDays").value;
    document.getElementById('hoten').innerText = names;
    document.getElementById('cmnd').innerText = paper;
    document.getElementById('ngaysinh').innerText = birthday;
    document.getElementById('thudientu').innerText = email;
    document.getElementById('diachi').innerText = address;
    document.getElementById('loaidichvu').innerText = typeService;
    document.getElementById('loaiphongthue').innerText = typeRoom;
    document.getElementById('loaikhachhang').innerText = typeCustomer;
    document.getElementById('giamgia').innerText = discount;
    document.getElementById('soluongdikem').innerText = quanlityInclued;
    document.getElementById('songaythue').innerText = renDays;
}
let check = false;
function showinfo() {

    let tempName = "";
    let names = document.getElementById('names').value;
    names = names.trim().toLowerCase();
    for (let i=0;i<names.length++;i++) {
        if (names.charAt(i)===" " && names.charAt(i+1)===" ") {
            continue;
        }
        if (i===0||names.charAt(i-1)===" ") {
            tempName+=names.charAt(i).toUpperCase();
            continue;
        }
        tempName+=names.charAt(i);
    }
    names = tempName;
    do {
        document.getElementById('checkcmnd').innerText = "CMND đúng đinh dạng";
        if (!isNaN(cmnd)) {
            cmnd = Number.parseFloat(cmnd);
        }
        if (!Number.isInteger(cmnd)) {
            alert("CMND không phải là số nguyên");

        }
        if (cmnd<10000000||cmnd>99999999) {
            alert("CMND không đúng định dạng")

        }
        check = true;
    } while (!check);
    check = false;



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
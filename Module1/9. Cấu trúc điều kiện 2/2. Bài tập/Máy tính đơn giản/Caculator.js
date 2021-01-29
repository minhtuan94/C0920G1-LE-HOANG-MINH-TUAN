let temp =false; //khai báo biến tạm bằng giá trị sai
function clearNumber() { //khi click vào nút C
    document.getElementById("num").value =""; //lấy giá trị của thẻ input bằng rỗng
}
function inputNumber(number) { //khi click vào nút bất kì
    if(temp) { //nếu biến tạm là đúng
        if (number === "+" || number === "-" || number === "*" || number === "/") { //nếu nút đó là các dấu toán tử
            document.getElementById("num").value += number;//chương trình sẽ viết tiếp dấu toán tử
        } else { //nếu nút đó là số
            document.getElementById("num").value = number;//chương trình sẽ xóa số cũ và thay bằng số hiện tại
        }
    } else { // nếu biến tạm là sai
        document.getElementById("num").value += number;//chương trình sẽ viết tiếp số
    }
    temp =false;//đặt biến sai
}
function calculator() { //khi click vào nút dấu bằng
    document.getElementById("num").value=(eval(document.getElementById("num").value));//thực hiện tính toán
    temp =true; //đặt biến đúng
}
// Lúc đầu khai báo biến temp là sai thì sẽ thực hiện nhánh else khi biến tạm là sai, lúc đó chương trình sẽ viết thêm số hoặc
//toán tử, khi người dùng click vào dấu bằng thì máy tính sẽ thực hiện tính toán, và chuyển lên nhánh if biến tạm là đúng
//khi đó nếu người dúng click và dấu toán tử thì máy tính viết thêm và tính khi người dùng click dấu bằng, còn nếu người dùng
//click số thì sẽ xóa số cũ và thay thế bằng số người dùng mới click
// Bước 2: Tạo biến imgObj để lưu ảnh
let imgObj = null;
// Bước 3: Sử dụng hàm getElementById () để nhận được một đối tượng DOM và sau đó gán nó cho biến imgObj.
imgObj = document.getElementById('myImage');
// Bước 4: Tạo hàm init () để khởi tạo imgObj mà chúng ta đã đặt vị trí và các thuộc tính còn lại.
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
// Bước 5: Tạo hàm moveRight () để tăng khoảng cách trái 10 pixel. Bạn cũng có thể đặt nó là một giá trị âm để di chuyển nó sang bên trái.
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';
}
// Bước 6: Gọi hàm init() khi trình duyệt được tải lần đầu
window.onload = init;


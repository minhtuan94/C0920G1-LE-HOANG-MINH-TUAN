// Bước 2: Xây dựng các hàm xử lý khi nhấn phím lên
function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
// Bước 3: Xây dựng các hàm xử lý khi nhấn phím xuống
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
// Bước 4: Xây dựng các hàm xử lý khi nhấn phím sang trái
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
// Bước 5: Xây dựng các hàm xử lý khi nhấn phím sang phải
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
// Bước 6: Xây dựng các hàm nhận các phím
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
// Bước 7: Xây dựng hàm doReady()
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
// Bước 8: Gọi hàm doReady()


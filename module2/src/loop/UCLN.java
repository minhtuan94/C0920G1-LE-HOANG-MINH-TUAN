package loop;

import java.util.Scanner;

public class UCLN {
    public static void main(String[] args) {
//        Bước 1: Khai báo hai biến số nguyên a, b và nhập giá trị cho a, b từ bàn phím

        int a;
        int b;
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a: ");
        a = input.nextInt();
        System.out.println("Enter b: ");
        b = input.nextInt();
//        Bước 2: Sử dụng hàm abs() để trả về giá trị tuyệt đối (phần dương) của a, b

        a = Math.abs(a);
        b = Math.abs(b);
//        Bước 3: Kiểm tra a, b có bằng 0 hay không

        if (a == 0 || b == 0)
            System.out.println("No greatest common factor");

//        Bước 4: Tìm ước số chung lớn nhất của a, b
//
//        Sử dụng vòng lặp kiểm tra trong khi a khác b thì
//
//        Nếu a < b: a = a – b
//
//        Còn lại b = b – a
//
//        Mã nguồn:

        while (a != b) {
            if (a > b)
                a = a - b;
            else
                b = b - a;
        }
//        Bước 5: Kết thúc vòng lặp. In ra ước số chung lớn nhất của a, b là a

        System.out.println("Greatest common factor: " + a);
        System.out.println("a= "+a+","+"b= "+b);
    }
}

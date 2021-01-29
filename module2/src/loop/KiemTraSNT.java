package loop;

import java.util.Scanner;

public class KiemTraSNT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("Nhập vào số lượng nguyên tố cần in ra");
            int num = sc.nextInt();
            int count = 0;
            int n = 2;
            while (count < num) {
                if (kiemTraSNT(n)) {
                    System.out.println("In ra số nguyên tố: " + n);
                    count++;
                }
                n++;
            }
        } while (true);
    }

    public static boolean kiemTraSNT(int a) {
        boolean check = true;
        if (a < 2) {
            check = false;
        }else {
            for (int i = 2; i <= Math.sqrt(a); i++) {
                if (a % i == 0) {
                    check = false;
                    break;
                }
            }
        }

        if (check) {
            return true;
        } else {
            return false;
        }
    }
}
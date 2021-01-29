package introduction_to_java.exercise;

import java.util.Scanner;

public class changemoney {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Nhập vào tiền USD");
        float USD = sc.nextFloat();

        System.out.println("Nhập vào tỉ giá");
        float rate = sc.nextFloat();

        float VND = rate * USD;
        System.out.println("Số tiền VND sau khi đã chuyển: " +VND);
    }
}
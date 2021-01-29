package introduction_to_java.exercise;

import java.util.Scanner;

public class showHello {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Nhập vào tên người muốn chào");
        String people = scanner.nextLine();

        System.out.println("Hello "+people);

    }
}

package loop;

import java.util.Scanner;

public class Showtype {
    public static void main(String[] args) {
        int choice;
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("Menu");
            System.out.println("1. Print the rectangle");
            System.out.println("2. Print the square triangle bottom left");
            System.out.println("3. Print the square triangle top left");
            System.out.println("0. Exit");
            System.out.println("Enter your choice: ");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    hcn();
                    break;
                case 2:
                    tgv_bottomleft();
                    break;
                case 3:
                    tgv_topleft();
                    break;
                default:
                    System.out.println("No choice");
            }
        } while (choice!=0);
    }
    public static void hcn() {
        for (int i=0;i<3;i++) {
            for (int j=0;j<7;j++) {
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
    public static void tgv_bottomleft() {
        for (int i=0;i<5;i++) {
            for (int j=0;j<=i;j++) {
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
    public static void tgv_topleft() {
        for (int i=0;i<6;i++) {
            for (int j=0;j<6-i;j++) {
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }
}

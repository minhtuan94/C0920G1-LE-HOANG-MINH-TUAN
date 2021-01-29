package loop;

import java.util.Scanner;

public class AppMoney {
    public static void main(String[] args) {
//        Số_tiền_lãi = Số_tiền_gửi *  tỉ_lệ_lãi_suất (% năm) / 12 * số_tháng_gửi
        double money;
        int month;
        double interset_rate;

        Scanner input = new Scanner(System.in);

//        Nhập số tiền gửi

        System.out.println("Enter investment amount: ");
        money = input.nextDouble();

//        Nhập số tháng gửi

        System.out.println("Enter number of months: ");
        month = input.nextInt();

//        Nhập lãi suất

        System.out.println("Enter annual interest rate in percentage: ");
        interset_rate = input.nextDouble();

        double total_interset = 0;
        for(int i = 0; i < month; i++){
            total_interset += money * (interset_rate/100)/12 * month;

        }

        System.out.println("Total of interset: " + total_interset);

    }
}

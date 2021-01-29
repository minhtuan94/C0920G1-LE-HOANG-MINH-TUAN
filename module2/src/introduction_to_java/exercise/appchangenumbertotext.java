package introduction_to_java.exercise;

import java.util.Scanner;

public class appchangenumbertotext {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhập số cần đọc");
        int num = scanner.nextInt();

        if (num < 10 && num >=0) {
            switch (num) {
                case 0:
                    System.out.println("zero ");
                    break;
                case 1:
                    System.out.println(" one ");
                    break;
                case 2:
                    System.out.println(" two ");
                    break;
                case 3:
                    System.out.println(" three ");
                    break;
                case 4:
                    System.out.println(" four ");
                    break;
                case 5:
                    System.out.println(" five ");
                    break;
                case 6:
                    System.out.println(" six ");
                    break;
                case 7:
                    System.out.println(" seven ");
                    break;
                case 8:
                    System.out.println(" eight ");
                    break;
                case 9:
                    System.out.println(" nine ");
                    break;
                default:
                    System.out.println(" ability");
                    break;
            }
        }
        if (num<20 && num>=10) {
            switch (num) {
                case 10:
                    System.out.println("ten");
                    break;
                    case 11:
                        System.out.print("eleven");
                        break;
                        case 12:
                            System.out.print("twelve");
                            break;
                        case 13:
                            System.out.print("thirteen");
                            break;
                        case 14:
                            System.out.print("fourteen");
                            break;
                        case 15:
                            System.out.print("fifteen");
                            break;
                        case 16:
                            System.out.print("sixteen");
                            break;
                        case 17:
                            System.out.print("seventeen");
                            break;
                        case 18:
                            System.out.print("eighteen");
                            break;
                        case 19:
                            System.out.print("nineteen");
                            break;
                        default:
                            System.out.print("ability");
                            break;
                    }
            }
        int tens = num / 10;
        int ones = num % 10;
        if (num>=20 && num <100) {
            switch (tens) {
                case 2:
                    System.out.print("twenty");
                    break;
                case 3:
                    System.out.print("thirty");
                    break;
                case 4:
                    System.out.print("forty");
                    break;
                case 5:
                    System.out.print("fifty");
                    break;
                case 6:
                    System.out.print("sixty");
                    break;
                case 7:
                    System.out.print("seventy");
                    break;
                case 8:
                    System.out.print("eighty");
                    break;
                case 9:
                    System.out.print("ninety");
                    break;
                default:
                    System.out.print("ability");
                    break;
            }
            switch (ones) {
                case 0:
                    System.out.println(" ");
                    break;
                case 1:
                    System.out.println(" one ");
                    break;
                case 2:
                    System.out.println(" two ");
                    break;
                case 3:
                    System.out.println(" three ");
                    break;
                case 4:
                    System.out.println(" four ");
                    break;
                case 5:
                    System.out.println(" five ");
                    break;
                case 6:
                    System.out.println(" six ");
                    break;
                case 7:
                    System.out.println(" seven ");
                    break;
                case 8:
                    System.out.println(" eight ");
                    break;
                case 9:
                    System.out.println(" nine ");
                    break;
                default:
                    System.out.println(" ability");
                    break;
            }
        }
        }
    }
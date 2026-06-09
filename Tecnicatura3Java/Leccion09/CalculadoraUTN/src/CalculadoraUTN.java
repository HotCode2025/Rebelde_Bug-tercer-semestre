import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        while (true){//ciclo infinito
            System.out.println("+++++ Aplicación Calculadora *****");
            mostrarMenu();


            try{
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4){

                    ejecutarOperacion(operacion, entrada);




                } //Fin del if
                else if (operacion == 5){
                    System.out.println("Hasta pronto...");
                    break;//rompe el ciclo y sale

                }
                else {
                    System.out.println("Opcion erronea: "+operacion);

                }
                //imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            } catch(Exception e){//fin del try, comienzo del catch
                System.out.println("Ocurrió un error: "+e.getMessage());
                System.out.println();


            }

        }//fin while
    }// fin main
    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. División
                5. Salir
                """);
        System.out.print("Operacion a realizar? ");

    }//fin metodo mostrarMenu
    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando 1: ");
        var operando1  = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch(operacion){
            case 1 -> { //suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: "+resultado);

            }
            case 2 -> { //resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: "+resultado);
            }
            case 3 -> { //multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion: "+resultado);
            }
            case 4 -> { //division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division: "+resultado);

            }
            default -> System.out.println("Opcion es erronea: "+operacion);
        }//fin del switch

    }//fin metodo ejecutarOperacion

}//fin clase


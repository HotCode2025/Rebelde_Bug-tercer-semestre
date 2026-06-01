
package test;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        //try {
            resultado = 10/0;
        //} catch(Exception e){
          //  System.out.PrintIn("Ocurrió un Error");
            //e.printStackTrace(System.out); //Se conoce como la pila de excepciones
        //}
        System.out.PrintIn("La variable de resultado tiene como valor: "+resultado);
    }
    
}

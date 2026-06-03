
package test;

import static aritmetica.Aritmetica.division;
import excepciones.OperacionExcepcion;


public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;//se crea la variable con la asignación de cero
        try{
            resultado = division(10, 0);
        }catch(OperacionExcepcion e){   
            System.out.println("Ocurrió un error de tipo OperacionExcepcion");
            System.out.println(e.getMessage());
            //operacion tira una excepcion
       } catch(Exception e){ //nos muestra el tipo de excepcion
            System.out.println("Ocurrió un error");
            e.printStackTrace(System.out);//se conoce como pila de excepciones y es lo que mandamos a imprimir
            System.out.println(e.getMessage());
            
      }
        finally{
            System.out.println("Se revisó la división entre cero");
        }
        System.out.println("La variable de resultado tiene como valor: "+ resultado);
    }
    
}

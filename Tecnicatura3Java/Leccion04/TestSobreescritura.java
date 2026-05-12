//Clase 4 1.2 Ejercicio: Sobrescritu de métodos Parte 1 y 2


package test;
import domain.*;


public class TestSobreescritura {
    public static void main(String[] args){
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        
        empleado1 = new Gerente("Jose", 5000, "Sistemas"); //objeto clase hija
        imprimir(empleado1);//apunta a una referencia de la clase hija
        //System.out.println("gerente1 = "+gerente1.obtenerDetalles());//No muestra lo que es el departamento porque en la clase padre no está incluido el departamento
    }
    
    //Ejecutamos el método obtener detalles
    public static void imprimir(Empleado empleado){//a través de la herencia la referencia que recibe no es de tipo empleado, es de tipo gerente
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);//llama al método sobreescrito en la clase hija
    }
    
}

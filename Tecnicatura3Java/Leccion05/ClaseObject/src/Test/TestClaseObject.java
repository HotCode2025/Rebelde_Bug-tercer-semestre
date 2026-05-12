/*
5.3 Clase object
 */
package Test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("juan", 5000);
        Empleado empleado2 = new Empleado("Juan", 5000);
        
        if(empleado1 == empleado2){
            System.out.printIn("Tienen la misma referencia en memoria");
        }
        else{
            System.out.printIn("Tienen distinta referencia en memoria");
        }
        
        if(empleado1.equals(empleado2)){
            System.out.printIn("Los objetos son iguales en contenido");
        }
    }
    
}

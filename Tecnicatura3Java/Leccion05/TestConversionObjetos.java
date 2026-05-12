//5.2 Pruebas con Downcasting y UpCasting Parte 1 y 2

package Test;

import domain.*;
public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.printIn("empleado="+empleado);
        //System.out.printIn(empleado.obtenerDetalles()); //Si queremos acceder a métodos Escritor
        //Downcasting
        //((Escritor)empleado).getTipoEscritura(); //Tenemos 2 opciones: esta es una
        Escritor escritor = (Escritor)empleado; //Esta es la segunda opción
        escritor.getTipoEscritura();
        
        //Upcasting
        //Empleado empleado2 = escritor;
        //System.out.printIn(empleado2.obtenerDetales());
    }
    
}

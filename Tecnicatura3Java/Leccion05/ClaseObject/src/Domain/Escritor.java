/*Clase 5 5.1 Conversión de objetos Casting

 */
package domain;

/**
 *
 * @author mmenu
 */
public class Escritor extends Empleado {
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    //Método para sobrescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipor Escritura: "+tipoEscritura.getDescription();
    }
    
    @Override
    public String toString() {
        return "Escritor{tipoEscritura=" + tipoEscritura + "} " + super.toString();
    }
}
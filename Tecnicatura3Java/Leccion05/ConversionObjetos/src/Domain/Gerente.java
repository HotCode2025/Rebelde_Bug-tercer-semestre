//Clase 4 1.2 Ejercicio: Sobrescritu de métodos Parte 1 y 2


package domain;

public class Gerente extends Empleado {
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);//llamado del constructor de la clase padre
        this.departamento = departamento;
        
        
    }
    //Sobreescribimos el método
    @Override 
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Departamento: "+this.departamento;
        
    }
    
    
}
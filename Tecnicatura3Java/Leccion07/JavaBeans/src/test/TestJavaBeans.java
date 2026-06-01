
package test;

public class TestJavaBeans {
    public static void main(String [] args) {
        Persona persona = new Persona();
        persona.setNombre("Juan");
        persona.setApellido("Pérez");
        System.out.PrintIn("persona = " + persona);
        
        System.out.PrintIn("Persona nombre"+persona.getNombre());
        System.out.PrintIn("Persona apellido"+persona.getApellido());
    }
}

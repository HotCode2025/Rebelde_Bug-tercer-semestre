//1.3 Modificadores de acceso public video 5 y 6

package javaa.clase3Leccion3.ModificadoresAcceso;

public class Clase1 {
    public String atributoPublic = "Atributo Publico";
    protected String atributoProtected = "Atributo Protected";
    

    public Clase1() {
        System.out.println("Constructor Publico");
    }

    protected Clase1(String atributoProtected) {
        System.out.println("Constructor Protected");
    }
    
    public void metodoPublic() {
        System.out.println("Metodo Publico");
    }

    protected void metodoProtected() {
        System.out.println("Metodo Protected");
    }
    
}

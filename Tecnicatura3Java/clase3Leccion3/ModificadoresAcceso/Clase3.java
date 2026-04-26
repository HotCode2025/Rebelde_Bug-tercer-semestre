//1.4 Modificadores de acceso protected video 7
package javaa.clase3Leccion3.ModificadoresAcceso;

public class Clase3 extends Clase1 {
    public Clase3() {
        super("protected");
        this.atributoProtected = "Accedido desde clase hija";
        System.out.println("Clase3" + this.atributoProtected);
        this.atributoPublic = "es publico";
        System.out.println("Clase3" + this.atributoPublic);
    }
}

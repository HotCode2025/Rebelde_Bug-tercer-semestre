//1.5 Modificadores de acceso default o package


package javaa.clase3Leccion3.ModificadoresAcceso;

public class clase2 {
    String atributoDefault = "Atributo default";

    // clase2() {
    // System.out.println("Constructor por defecto");
    // }

    public clase2() {
        super();
        this.atributoDefault = "Modificador del atributo default";
        System.out.println("Atributo default: " + this.atributoDefault);
        this.metodoDefault();

    }

    void metodoDefault() {
        System.out.println("Metodo por defecto");
    }
}

//1.5 Modificadores de acceso default o package


package javaa.clase3Leccion3.ModificadoresAcceso;

public class ClaseHija2 extends clase2 {
    public ClaseHija2() {
        super();
        this.atributoDefault = "Modificacion del atributo default";
        System.out.println("Atributo default: " + this.atributoDefault);
        this.metodoDefault();
    }
}

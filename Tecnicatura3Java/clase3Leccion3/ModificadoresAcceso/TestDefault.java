//1.5 Modificadores de acceso default o package
// 1.6 Modificador de acceso private

package javaa.clase3Leccion3.ModificadoresAcceso;

public class TestDefault {
    public static void main(String[] args) {
        ClaseHija2 objeto2 = new ClaseHija2();
        objeto2.atributoDefault = "Nuevo valor"; 
        System.out.println("Atributo default: " + objeto2.atributoDefault);
        
        clase4 objeto4 = new clase4("publico");
        objeto4.getAtributoPrivado();
        objeto4.setAtributoPrivado("publico");
        System.out.println("Atributo privado: " + objeto4.getAtributoPrivado());
        
    }
}

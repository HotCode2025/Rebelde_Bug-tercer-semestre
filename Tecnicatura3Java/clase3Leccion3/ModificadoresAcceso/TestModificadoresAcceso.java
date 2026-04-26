// 1.3 Modificadores de acceso public video 5 y 6
package javaa.clase3Leccion3.ModificadoresAcceso;

public class TestModificadoresAcceso {
    public static void main(String[] args) {
        Clase1 Clase1 = new Clase1();
        System.out.println("Clase1" + Clase1.atributoPublic);
        Clase1.metodoPublic();

        Clase3 claseHija = new Clase3();
        System.out.println("Clase Hija" + claseHija.atributoProtected);
        
    }
}

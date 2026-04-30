
//1.3 Pruebas de enum, con la creación de enum Continentes

// video n5
package Enumeraciones;

public enum Continentes {
    AMERICA(34, "Continente Americano"),
    EUROPA(44, "Continente Europeo"),
    ASIA(44, "Continente Asiatico"),
    AFRICA(54, "Continente Africano"),
    ANTARTIDA(0, "Continente Antartico"),
    OCEANIA(14, "Continente Oceanico");

    private final int paises;
    private final String nombre;
    
    Continentes(int paises, String nombre){
        this.paises = paises;
        this.nombre = nombre;
    }

    // para recuperar usamos metodo Get
    public int getPaises(){
        return this.paises;
    }

}

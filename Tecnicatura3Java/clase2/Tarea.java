// REEMPLAZO DE BLOQUES DE INICIALIZACION

/*
En Java, los bloques de inicialización (static y no static) 
pueden ser reemplazados según sea de forma más clara ó mantenible.
    - Los bloques static se reemplazan con inicialización directa
    en la declaración o con métodos estáticos auxiliares.
    - Los bloques no static se reemplazan inicializando atributos 
    directamente o usando constructores.
*/


public class Tarea {

    // ==============================
    // 1. Bloques static
    // ==============================
    // Se ejecutan una sola vez al cargar la clase.
    // Alternativas: 
    //       Inicialización directa en la declaración de la variable estática.
    //       Métodos estáticos auxiliares (por ejemplo, initConfig()).
    //       Uso de patrones como Singleton o Factory para controlar la inicialización.
    

    static {
        System.out.println("Ejemplo con bloque static");
    }

    private static String config = loadConfig();

    private static String loadConfig() {
        return "Configuración cargada sin bloque static";
    }

    // ==============================
    // 2. Bloques no estáticos
    // ==============================
    // Se ejecutan cada vez que se crea un objeto.
    // Alternativas: 
    //        Inicialización directa en la declaración del atributo.
    //        Uso del constructor (más claro y controlado).
    //        Métodos de inicialización privados llamados desde el constructor.

    {
        System.out.println("Ejemplo con bloque no estático");
    }

    private java.util.List<String> buffer = new java.util.ArrayList<>();

    public Tarea() {
        this.buffer = new java.util.ArrayList<>();
        System.out.println("Inicialización en constructor");
    }

    public static void main(String[] args) {
        // Probar inicialización
        Tarea t1 = new Tarea();
        Tarea t2 = new Tarea();

        System.out.println("Config: " + config);
    }
}
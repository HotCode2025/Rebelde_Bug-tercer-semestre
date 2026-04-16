// 1.1 Argumentos variables

package ArgumentosVariables;

public class TestArgumentoVariable {
    public static void main(String[] args) {
        imprimirNumeros(1, 2, 3, 4, 5);
        imprimirNumeros(8, 9, 10);
        variosParametros("Juan", "Chicio", 7, 8, 9);
    }

    private static void variosParametros(String nombre, String apellido, int... numeros) {
        System.out.println("Nombre: " + nombre + "Apellido: " + apellido);
        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int... numeros) {
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elemento: " + numeros[i]);
        }
    }
}

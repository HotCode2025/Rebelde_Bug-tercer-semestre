// 1.1 Manejo del forEach Parte 1 y 2
package javaa.clase3Leccion3.ForEach;

public class TestForEach {
    public static void main(String[] args) {
        int[] edades = { 5, 7, 18, 45, 99 };// sintaxis resumida

        for (int edad : edades) {  // sintaxis del forEach
            System.out.println("Edad: " + edad);
        }

        Persona[] personas = { new Persona("Juan"), new Persona("Maria"), new Persona("Pedro") };
        for (Persona persona : personas) {
            System.out.println("Persona: " + persona);
        }

    }
}

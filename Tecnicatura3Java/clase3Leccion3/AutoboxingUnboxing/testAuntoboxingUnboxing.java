// 1.2 Autoboxing y Unboxing Parte 1 y 2
package javaa.clase3Leccion3.AutoboxingUnboxing;

public class testAuntoboxingUnboxing {
    public static void main(String[] args) {
        // clases envolvente o wrapper
        
        /* clases envolventes de tipo primitivo
         int = la clase envolvente es Integer
         long = la clase envolvente es Long
         float = la clase envolvente es Float
         double = la clase envolvente es Double
         boolean = la clase envolvente es Boolean
         byte = la clase envolvente es Byte
         char = la clase envolvente es Character
         short = la clase envolvente es Short
         
        */
       
       Integer enteroPrim = 10; // tipo objeto con la clase Integer
       System.out.println("enteroPrim = " + enteroPrim);
       
       int entero = 10; // tipo primitivo int
       System.out.println("entero = " + entero);

       int entero2 = enteroPrim; // unboxing
       System.out.println("entero2 = " + entero2);
    }
}

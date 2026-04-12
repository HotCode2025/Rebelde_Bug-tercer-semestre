// 1.6 Comenzamos las pruebas creando objetos de cada clase y las agregamos a la lista de Orden: Parte 1, 2 y 3
public class MundoPc {
    public static void main(String[] args) {
        // creamos los objetos iniciales
        Monitor monitor1 = new Monitor("HP", 24); 
        Teclado teclado1 = new Teclado("Logitech", "USB");
        Raton raton1 = new Raton("Logitech", "USB");
        Computadora computadora1 = new Computadora("Computadora 1", monitor1, teclado1, raton1);
        
        Monitor monitor2 = new Monitor("Dell", 27);
        Teclado teclado2 = new Teclado("HP", "USB");
        Raton raton2 = new Raton("HP", "USB");
        Computadora computadora2 = new Computadora("Computadora 2", monitor2, teclado2, raton2);

        // TAREA: Crear más computadoras utilizando nuevos objetos anónimos para agilizar
        Computadora computadora3 = new Computadora("Computadora 3", new Monitor("Samsung", 22), new Teclado("HyperX", "USB"), new Raton("Razer", "USB"));
        Computadora computadora4 = new Computadora("Computadora 4", new Monitor("Apple", 27), new Teclado("Apple", "Bluetooth"), new Raton("Apple", "Bluetooth"));
        Computadora computadora5 = new Computadora("Computadora 5", new Monitor("Asus", 24), new Teclado("Genius", "USB"), new Raton("Genius", "USB"));
        Computadora computadora6 = new Computadora("Computadora 6", new Monitor("LG", 29), new Teclado("Noga", "USB"), new Raton("Noga", "USB"));
        Computadora computadora7 = new Computadora("Computadora 7", new Monitor("BenQ", 24), new Teclado("Redragon", "USB"), new Raton("Redragon", "USB"));
        Computadora computadora8 = new Computadora("Computadora 8", new Monitor("AOC", 22), new Teclado("Corsair", "USB"), new Raton("Corsair", "USB"));
        Computadora computadora9 = new Computadora("Computadora 9", new Monitor("Philips", 24), new Teclado("Microsoft", "USB"), new Raton("Microsoft", "USB"));
        Computadora computadora10 = new Computadora("Computadora 10", new Monitor("Lenovo", 24), new Teclado("Lenovo", "USB"), new Raton("Lenovo", "USB"));
        
        // Esta es la computadora n° 11 que debería rebotar al intentar agregarla
        Computadora computadora11 = new Computadora("Computadora 11", new Monitor("Acer", 27), new Teclado("Predator", "USB"), new Raton("Predator", "USB"));

        System.out.println("--- PRUEBA AL MÁXIMO RENDIMIENTO EN ORDEN 1 ---");
        Orden orden1 = new Orden();
        
        // Agregamos las 10 computadoras que entrarán correctamente
        orden1.agregarComputadora(computadora1);
        orden1.agregarComputadora(computadora2);
        orden1.agregarComputadora(computadora3);
        orden1.agregarComputadora(computadora4);
        orden1.agregarComputadora(computadora5);
        orden1.agregarComputadora(computadora6);
        orden1.agregarComputadora(computadora7);
        orden1.agregarComputadora(computadora8);
        orden1.agregarComputadora(computadora9);
        orden1.agregarComputadora(computadora10);

        // Agregamos la computadora 11 (Acá deberá saltar el mensaje de error de que está lleno)
        System.out.println("Intentando agregar una computadora extra (la #11)...");
        orden1.agregarComputadora(computadora11);
        
        System.out.println("\n--- RESULTADO DE LA ORDEN ---");
        orden1.mostrarComputadoras();
    }
}

// 1.5 Creamos la clase Orden: Parte 1 y 2 videos 6 y 7
public class Orden {
    private final int id0rden;
    private Computadora computadoras []; // arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadoras;

    // constructor vacio
    public Orden(){
        this.id0rden = ++Orden.contadorOrdenes;
        this.computadoras = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    // metodo para agregar una nueva computadora al arreglo
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadoras < Orden.MAX_COMPUTADORAS){
            this.computadoras[this.contadorComputadoras++] = computadora;
        }
        else{
            System.out.println("Se ha alcanzado el maximo de computadoras");
        }
    }
    
    // metodo para mostrar las computadoras
    public void mostrarComputadoras(){
        System.out.println("Orden #" + this.id0rden);
        System.out.println("Computadoras: " + this.contadorComputadoras);
        for(int i = 0; i < this.contadorComputadoras; i++){
            System.out.println(this.computadoras[i]);
        }
    }
    
}

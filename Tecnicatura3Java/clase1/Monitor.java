// 1.3 Creamos la clase Monitor video 4
public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;
// Constructor vacio
    private Monitor(){
        this.idMonitor = ++Monitor.contadorMonitores;
    }
// Constructor con parametros
    public Monitor(String marca, double tamanio){
        this(); // llamado al constructor vacio
        this.marca = marca;
        this.tamanio = tamanio;
    }
// Getters y Setters
    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(double tamanio) {
        this.tamanio = tamanio;
    }

    // ingresamos manualmente el getIdMonitor
    public int getIdMonitor() {
        return this.idMonitor;
    }

// Metodo toString
    @Override
    public String toString() {
        return "Monitor [idMonitor=" + idMonitor + ", marca=" + marca + ", tamanio=" + tamanio + "]";
    }
}

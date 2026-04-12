//1.2 Creamos la clase hija Raton y la clase Teclado video 3
public class Teclado extends DispositivoEntrada     {
    private final int idTeclado;
    private static int contadorTeclado;

    public Teclado(String marca, String tipoEntrada) {
        super(marca, tipoEntrada);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    @Override
    public String toString() {
        return "Teclado [idTeclado=" + idTeclado + "]";
    }

}

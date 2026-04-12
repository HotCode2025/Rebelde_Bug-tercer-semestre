// 1.2 Creamos la clase hija Raton y la clase Teclado video 2
public class Raton extends DispositivoEntrada {
    private final int idRaton;
    private static int contadorRaton;

    public Raton(String marca, String tipoEntrada) {
        super(marca, tipoEntrada);
        this.idRaton = ++Raton.contadorRaton;
    }

    @Override
    public String toString() {
        return "Raton [idRaton=" + idRaton + "]";
    }

}

// 1.2 Manejo de Enumeraciones (enum)
//1.3 Pruebas de enum, con la creación de enum Continentes

// video n4
// video n5
// video n6

package Enumeraciones;

public class TestEnumeraciones {
    public static void main(String[] args) {
      System.out.println("Dia 1: " + Dias.LUNES); // las enumeraciones se tratan como cadenas
      // ahora no se deben utilizar comillas, se accede a traves de el operador de punto   
      
      System.out.println("Continente 1: " + Continentes.AMERICA);
      System.out.println("Continente 2: " + Continentes.EUROPA);
      System.out.println("Continente 3: " + Continentes.ASIA);
      System.out.println("Continente 4: " + Continentes.AFRICA);
      System.out.println("Continente 5: " + Continentes.ANTARTIDA);
      System.out.println("Continente 6: " + Continentes.OCEANIA);
    
    }


    private static void indicarDiaSemana(Dias dias){
        switch (dias) {
            case LUNES:
                System.out.println("Comienza la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Mitad de la semana");
                break;
            case JUEVES:
                System.out.println("Casi fin de semana");
                break;
            case VIERNES:
                System.out.println("Fin de semana");
                break;
            case SABADO:
                System.out.println("Dia de descanso");
                break;
            case DOMINGO:
                System.out.println("Dia de descanso");
                break;
            default:
                break;
        }
    }
}

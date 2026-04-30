// 1.6 Modificador de acceso private
package javaa.clase3Leccion3.ModificadoresAcceso;

public class clase4 {
    private String atributoPrivado = "Atributo privado";

    // creamos un constructor public para poder crear objetos
    public clase4(String argumento) {
        this();
        System.out.println("Constructor por defecto");
    }

    

    public clase4() {
        //TODO Auto-generated constructor stub
    }



    public String getAtributoPrivado() {
        return atributoPrivado;
    }

    public void setAtributoPrivado(String atributoPrivado) {
        this.atributoPrivado = atributoPrivado;
    }

  private void metodoPrivado() {
    System.out.println("Metodo privado");
  }

}

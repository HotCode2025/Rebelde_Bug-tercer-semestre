
package accesodatos;


public interface IAccesoDatos {
    int MAX_REGISTRO = 10; //Publif, final, static: constante. Necesita tener un valor, porque la interface no tiene constructores. Se declara atributo y se pone valor
    
    //Metodo insertar es abstracto y sin cuerpo
    void insertar();
    void listar();
    void actualizar();
    void eliminar();
    
}

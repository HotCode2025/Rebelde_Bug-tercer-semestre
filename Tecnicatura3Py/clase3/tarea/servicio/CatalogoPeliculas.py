import os
from dominio.Pelicula import Pelicula

class CatalogoPeliculas:
    """
    Clase de servicio (lógica de negocio).
    Se encarga de manejar las operaciones de lectura y escritura de objetos
    Pelicula en el archivo persistente.
    """
    
    # Atributo de clase (común a todas las instancias o a la clase en sí)
    # Define la ruta del archivo de texto donde se guardará el catálogo.
    ruta_archivo = 'peliculas.txt'

    @classmethod
    def agregar_pelicula(cls, pelicula: Pelicula):
        """
        Agrega una película al archivo. Si no existe, python lo creará.
        Utiliza el manejador de contexto 'with' para cerrar automáticamente el archivo.
        Modo 'a' (append) para añadir texto al final sin sobreescribir el existente.
        """
        with open(cls.ruta_archivo, 'a', encoding='utf8') as archivo:
            archivo.write(f'{pelicula.nombre}\n')

    @classmethod
    def listar_peliculas(cls):
        """
        Abre el archivo en modo 'r' (read) y muestra su contenido en la consola.
        Se controla la excepción FileNotFoundError para evitar errores si el usuario
        intenta listar antes de que el archivo haya sido creado por primera vez.
        """
        try:
            with open(cls.ruta_archivo, 'r', encoding='utf8') as archivo:
                print(' Catálogo de Películas '.center(50, '-'))
                print(archivo.read())
        except FileNotFoundError:
            print(f'No se encontró el archivo de películas o está vacío: {cls.ruta_archivo}')

    @classmethod
    def eliminar(cls):
        """
        Utiliza la librería 'os' de importaciones de python para eliminar el
        archivo de manera local (del disco duro).
        """
        try:
            os.remove(cls.ruta_archivo)
            print(f'Archivo eliminado: {cls.ruta_archivo}')
        except FileNotFoundError:
            # Capturamos si el usuario intenta borrar un archivo que no existe.
            print(f'El archivo no existe y por lo tanto no se puede eliminar: {cls.ruta_archivo}')
        except Exception as e:
            print(f'No se pudo eliminar el archivo. Ocurrió un error inesperado: {e}')

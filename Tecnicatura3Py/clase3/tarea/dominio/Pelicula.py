class Pelicula:
    """
    Clase que representa una película en el catálogo.
    Las entidades de dominio como esta se encargan de representar la información lógica.
    """
    def __init__(self, nombre: str):
        """
        Constructor de la clase Pelicula.
        
        Args:
            nombre (str): El título o nombre de la película.
        """
        self._nombre = nombre

    @property
    def nombre(self) -> str:
        """
        Método GET (property) para obtener el nombre de forma segura.
        """
        return self._nombre

    @nombre.setter
    def nombre(self, nombre: str):
        """
        Método SET para modificar el nombre de la película.
        """
        self._nombre = nombre

    def __str__(self) -> str:
        """
        Sobrescribe el método mágico __str__ para imprimir los detalles
        del objeto en un formato legible.
        """
        return f'Película: {self._nombre}'

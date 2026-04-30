from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas

"""
Script principal que simula una interfaz de línea de comandos para el usuario.
Ejecuta el menú y enruta las opciones a las clases correspondientes.
"""

opcion = None

# Ciclo while para mantener el programa en ejecución hasta elegir "Salir"
while opcion != 4:
    try:
        # Interfaz de texto (menú de opciones)
        print('\n' + ' Opciones '.center(50, '-'))
        print('1. Agregar Película')
        print('2. Listar Películas')
        print('3. Eliminar archivo de películas')
        print('4. Salir')
        
        # parseamos la elección a entero
        opcion = int(input('Escribe tu opción (1-4): '))

        # Evaluamos el caso
        if opcion == 1:
            nombre_pelicula = input('Proporciona el nombre de la película: ')
            pelicula = Pelicula(nombre_pelicula) # Instanciamos objeto Pelicula
            CatalogoPeliculas.agregar_pelicula(pelicula) # Llamamos al servicio de agregado
            print('¡Película agregada con éxito!')
        elif opcion == 2:
            CatalogoPeliculas.listar_peliculas()
        elif opcion == 3:
            CatalogoPeliculas.eliminar()
        elif opcion == 4:
            print('Saliendo del programa...')
        else:
            print('Opción no válida. Por favor escribe un número del 1 al 4.')
            
    except ValueError:
        # Controlamos si el usuario escribe letras en vez de números en el input
        print('Error: Debes ingresar un número entero válido.')
    except Exception as e:
        print(f'Ocurrió un error inesperado: {e}')
        # Reiniciamos la opción a None para que el bucle siga intentando
        opcion = None

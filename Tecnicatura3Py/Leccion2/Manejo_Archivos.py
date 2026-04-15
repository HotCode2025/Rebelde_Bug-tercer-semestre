# Declaramos una variable (para apertura o creacion de un archivo)
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es write (escribir)
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Las letras son:\n r read, \na append, \nw write, \nx crea un archivo')
    archivo.write('\nt esta es para texto, \nb archivos binarios, \nw+ lee y escribe, son iguales con r+\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:
    archivo.close() #cerramos archivo (siempre necesario)
# archivo.write('Todo quedo perfecto'): este es un error
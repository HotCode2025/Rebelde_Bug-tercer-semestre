# 1.1 Introducción a lo que es el manejo de archivos
# 1.2 Especificar el juego de caracteres de un archivo de texto
# Declaramos una variable (para apertura o creacion de un archivo)

try:
    archivo = open('archivo.txt', 'w', encoding='utf-8') #w = write (escritura)
    archivo.write("programamos con diferentes tipos de archivos\n")
    archivo.write("los acentos son importates para las palabras\n")
    archivo.write("como por ejemplo: acción, corazón, canción\n")
    archivo.write("las letras son: r = read (lectura), \nw = write (escritura), \na = append (agregar) \nx = close (cerrar)\n")
    archivo.write("t = texto, \nb = binario, \nw+ = escritura y lectura, \nr+ = lectura y escritura\n")
    archivo.write("saludos a todos los programadores\n")
    archivo.write("con esto terminamos\n")
except Exception as e:
    print(e)
finally: # siempre se ejecuta sin importar si hubo error o no
    archivo.close() #cerramos el archivo
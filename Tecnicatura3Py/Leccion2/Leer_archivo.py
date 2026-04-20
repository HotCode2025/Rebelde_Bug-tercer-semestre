# 1.3 Lectura de archivos

# Abrimos el archivo
archivo = open("archivo.txt", "r", encoding="utf-8") # r = read (lectura), w = write, a = append, x = close

# NOTA: Comentamos esto porque si leemos todo el archivo aquí, el for de abajo no tendrá qué leer.
# print(archivo.read())#lee todo el archivo
# print(archivo.read(15))#lee los primeros 15 caracteres
# print(archivo.read(10))#lee los siguientes 10 caracteres
# print(archivo.readline())#lee una linea

# 1.4 Más formas de trabajar con archivos

# iterar sobre el archivo, cada una de las lineas
print("--- Iterando sobre el archivo ---")
for linea in archivo:
    print(linea.strip()) # iteramos todos los elementos del archivo

# Como el for ya leyó todo, usamos seek(0) para volver al principio del archivo
archivo.seek(0) 

print("\n--- Usando readlines ---")
lineas = archivo.readlines() # accedemos al archivo como si fuera una lista
print(lineas)
print("Tercer elemento:", lineas[2])

# Anexamos información, copiamos a otro
archivo.seek(0) # Volvemos al principio para poder leerlo y copiarlo
archivo2 = open("archivo2.txt", "w", encoding="utf-8") 
archivo2.write(archivo.read())

archivo.close() # cerramos el archivo original
archivo2.close() # cerramos el archivo copiado

print("\narchivo copiado exitosamente a archivo2.txt")
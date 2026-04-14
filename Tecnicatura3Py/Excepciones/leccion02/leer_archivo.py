archivo = open("prueba.txt", "r", encoding="utf8") # r de read, w write, a agrega info a lo que ya tiene, x crear archivo pero lanza error si no existe 

#print(archivo.read())
#print(archivo.read(15))
#print(archivo.read(5)) #continuamos desde la linea anterior
#print(archivo.readline())
#print(archivo.readline())

# vamos a iterar el archivo, cada una de las lineas FORMAS PARA TRABAJAR UN ARCHIVO
#for linea in archivo:
    #print(linea) iteramos todos los elementos del archivo
#print(archivo.readlines()[1]) #accedemos al archivo como si fuera una lista


#Anexamos informacion, copiamos a otro
archivo2 = open("copia.txt", "w", encoding="utf8")
archivo2.write(archivo.read())
archivo.close() #Cerramos el primer archivo
archivo2.close() #Cerramos el segundo archivo


print("Se ha terminamos el proceso de leer y copiar archivos")



# 1.5 Uso de with, archivos y contexto Manager Parte 1
from manejo_archivos import ManejoArchivos
# manejo de contexto con with: sintaxis mas simplicada
# no es necesario cerrar el archivo, se cierra automaticamente al salir del bloque with
# Utiliza diferentes metodos para trabajar con archivos: __enter__ y __exit__
#with open("archivo.txt", "r", encoding="utf-8") as archivo:
  #  print(archivo.read())



   # 1.6 Uso de with, archivos y contexto Manager Parte 2

with ManejoArchivos("archivo.txt") as archivo:
    print(archivo.read())
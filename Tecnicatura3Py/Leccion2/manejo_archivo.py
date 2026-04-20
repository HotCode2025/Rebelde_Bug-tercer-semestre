# 1.6 Uso de with, archivos y contexto Manager Parte 2

class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def __enter__(self):
        print("Entrando al archivo".center(50, "*"))
        self.nombre = open(self.nombre, "r", encoding="utf-8") # encapsulamos el codigo
        return self.nombre
    
    def __exit__(self, exc_type, exc_val, exc_tb): # no es necesario poner los mismo parametros
        print("Saliendo del archivo".center(50, "*"))
        if self.nombre:
            self.nombre.close()
            
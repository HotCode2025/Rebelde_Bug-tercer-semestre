# 1.1 Manejo de errores o excepciones Parte 1 y parte 2
"""
try:
    10/0
except Exception as e:
    print(f'Ocurrió un error: {e}')
"""

# 1.2 Procesamiento de excepciones
"""
Resultado = None
a = '10'
b = 0
try:
    Resultado = a/b #Lo modificamos
except Exception as e:
    print(f'El resultado es: {Resultado}')
    print('Seguimos...')
"""

# 1.3 Procesar clases de exception más específicas
"""
Resultado = None
a = 7
b = 5
try:
    Resultado = a/b #Lo modificamos
except TypeError as e:
    print(f'Type Error - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')

    print(f'El resultado es: {Resultado}')
    print('Seguimos...')
     
"""

# 1.4 Más de procedimientos de excepciones
"""
Resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    Resultado = a/b #Lo modificamos
except TypeError as e:
    print(f'Type Error - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')

print(f'El resultado es: {Resultado}')
print('Seguimos...')
"""

# 1.5 Bloques else y finally al manejar excepciones
"""
Resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    Resultado = a/b #Lo modificamos
except TypeError as e:
    print(f'Type Error - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally: #Siempre se va a ejecutar
    print('Ejecución de este bloque finally')

print(f'El resultado es: {Resultado}')
print('Seguimos...')
"""
# 1.6 Creación de clases de Exception personalizadas
from NumerosIgualesException import NumerosIgualesException

Resultado = None

try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException ('Son número iguales')

    Resultado = a/b #Lo modificamos
except TypeError as e:
    print(f'Type Error - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally: #Siempre se va a ejecutar
    print('Ejecución de este bloque finally')

print(f'El resultado es: {Resultado}')
print('Seguimos...')

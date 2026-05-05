# 5.4 Insertar un registro con psycopg2
import psycopg2 #Esto es para poder conectarnos a postgres1l
conexion = psycopg2.connect( #Objeto tipo conexion
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)

try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            #id_persona = int(input('Digite un numero de id: ')) 
            valores= ("Carlos", "Lara", "clara@gmail.com") # es una tupla
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
            registros_insertados = cursor.rowcount #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
            print(f"registros_insertados son: {registros_insertados}") 
except Exception as e:
    print(f'Error: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion

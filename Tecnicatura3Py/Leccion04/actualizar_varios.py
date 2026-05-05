# 5.7 Actualizar o modificar varios registros
# clase 5
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

            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            #id_persona = int(input('Digite un numero de id: ')) 
            valores= (('Maria', 'Gomez', 'maria.gomez@gmail.com',2),
                      ('Romina', 'Aya', 'romina.ayala@gmail.com',4)) # es una tupla
            cursor.executemany(sentencia, valores) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
            registros_actualizados = cursor.rowcount #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
            print(f"registros_actualizados son: {registros_actualizados}") 

except Exception as e:
    print(f'Error: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion
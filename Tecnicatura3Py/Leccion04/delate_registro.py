# 5.8 Eliminar un registro
# 5.9 Eliminar varios registros
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

            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el numero de id a eliminar (separado por comas): ')
            valores=(entrada,) # es una tupla de valores
            cursor.execute(sentencia, valores) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
            registros_eliminados = cursor.rowcount #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
            print(f"Registros eliminados: {registros_eliminados}") 

except Exception as e:
    print(f'Error: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion
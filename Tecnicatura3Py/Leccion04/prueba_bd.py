import psycopg2 #Esto es para poder conectarnos a postgres1l
conexion = psycopg2.connect( #Objeto tipo conexion
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
# clase 5 video 1,2
# 5.1 Uso de with y psycopg2
try:
    with conexion:
        with conexion.cursor() as cursor:

            sentencia = 'SELECT * FROM persona WHERE id_persona= %s'
            id_persona = int(input('Digite un numero de id: ')) 
            cursor.execute(sentencia) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
            registros = cursor.fetchone() #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
            print(registros) #imprimimos y nos da como resultado una lista con una tupla por cada uno de los id.
except Exception as e:
    print(f'Error: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion

# 5.3 Función fechall en psycopg2 Parte 1 y 2
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

            sentencia = 'SELECT * FROM persona WHERE id_persona IN (1,2)'
            #id_persona = int(input('Digite un numero de id: ')) 
            entrar = input('digite los id a buscar separados por coma: ')
            llaves_primarias = (tuple(entrar.split(",")))
            cursor.execute(sentencia, llaves_primarias) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
            registros = cursor.fetchall() #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
            for registro in registros:
                print(registro)
except Exception as e:
    print(f'Error: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion

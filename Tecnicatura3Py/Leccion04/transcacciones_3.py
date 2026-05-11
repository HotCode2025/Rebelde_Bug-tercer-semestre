# 6.3 Manejo de transacciones con with (Automáticamente)
import psycopg2 #Esto es para poder conectarnos a postgres1l

conexion = bd.connect( #Objeto tipo conexion
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)' 
            valores = ('Alex', 'Garcia', "alex@gmail.com")
            cursor.execute(sentencia, valores)

            sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
            valores = ('carla', 'roldan', "carla@gmail.com", 1)
            cursor.execute(sentencia, valores)


except Exception as e:

    print(f'Ocurrio un error, se hizo rollback: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion

print('Fin del programa')


# 6.2 Manejo de transacciones (Manualmente): Parte 1, 2, 3 y 4


import psycopg2 #Esto es para poder conectarnos a postgres1l

conexion = bd.connect( #Objeto tipo conexion
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
try:
    conexion.autocommit = False #inica la transaccion
    cursor = conexion.cursor() #Objeto tipo cursor
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)' 
    valores = ('maria', 'Gonzalez', "maria@gmail.com")
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
    valores = ('carla', 'monte', "carla@gmail.com", 1)
    cursor.execute(sentencia, valores)

    conexion.commit() # Confirmación de la transacción
    print('Ejecucion de la sentencia')
except Exception as e:
    print(f'Ocurrio un error, se hizo rollback: {e}') #Si surge algún error nos muestra el error
finally:
    conexion.close() #Finaliza la conexion


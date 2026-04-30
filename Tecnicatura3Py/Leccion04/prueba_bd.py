import psycopg2 #Esto es para poder conectarnos a postgres1l
conexion = psycopg2.connect( #Objeto tipo conexion
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'
)
cursor = conexion.cursor() #Creamos objeto de tipo cursor
sentencia = 'SELECT * FROM persona' #Definimos sentencia
cursor.execute(sentencia) #De esta manera ejecutamos la sentencia con ayuda del objeto cursor
registros = cursor.fetchall() #No olvidar parentesis, recuperamos todos los registros que serán una lista (a través de la sentencia)
print(registros) #imprimimos y nos da como resultado una lista con una tupla por cada uno de los id.

cursor.close()
conexion.close()
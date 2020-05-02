from db_connection import db_connection

def insert():
    add_user = ("INSERT INTO angular_login "
              "(name, username, password) "
              "VALUES (%(name)s, %(username)s, %(password)s)")
    data_insert = {
        'name': "Raghav",
        'username': "raghav@9495",
        'password': "1234",
        }
    
    cnx, cursor = db_connection()
    print(cnx, cursor)
    if cnx != None and cursor != None:
        try:
            cursor.execute(add_user, data_insert)
            cnx.commit()
            print("Data Inserted")
        except Exception as e:
            print(e)
        finally:
            # Make sure data is committed to the database
            print("Close")
            cursor.close()
            cnx.close()

insert()

    
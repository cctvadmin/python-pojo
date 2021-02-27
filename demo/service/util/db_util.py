from dbutils.pooled_db import PooledDB
import pymysql
from util import config

POOL = PooledDB(
    creator=pymysql,
    maxconnections=6,
    mincached=2,
    maxcached=5,
    maxshared=3,
    blocking=True,
    maxusage=None,
    setsession=[],
    ping=0,
    host=config.DATABASE_HOST,
    port=config.DATABASE_PORT,
    user=config.DATABASE_NAME,
    password=config.DATABASE_PASSWORD,
    database=config.DATABASE,
    charset='utf8'
)


def get_conn():
    """
    获取数据库连接池
    :return:
    """
    return POOL.connection()


def select_one(sql):
    db = get_conn()
    cursor = db.cursor()
    cursor.execute(sql)
    data = cursor.fetchone()
    db.close()
    return data


def select_many(sql):
    db = get_conn()
    cursor = db.cursor()
    cursor.execute(sql)
    data = []
    while True:
        one = cursor.fetchone()
        if one is None:
            break
        else:
            data.append(one)
    db.close()
    return data


def insert(sql):
    db = get_conn()
    try:
        cursor = db.cursor()
        cursor.execute(sql)
        db.commit()
    except Exception as e:
        db.rollback()
        raise e
    finally:
        db.close()


def update(sql):
    insert(sql)


if __name__ == '__main__':
    _ma = select_many('SELECT * FROM activity')
    print(_ma)

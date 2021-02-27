import time
from datetime import datetime
from random import randint

from operas import application_opera
from pojo import pojo, pojo_util
from util import db_util


def parse_pojo(db_data):
    return pojo_util.parse_pojo(db_data, get_keys_table(), 'keys', 'all keys from database',
                                'keys_list')


def insert_keys(activity_id, keys_list=None):
    """
    添加keys
    :param activity_id:
    :param keys_list:
    :return:
    """
    if keys_list is None:
        return "keys_list is None"
    for i in keys_list:
        add_sql = """
        INSERT INTO `keys`
         (
        `activity_id`, 
        `keys_content`
         ) VALUES (
        %s, 
        '%s'
        );
        """ % (activity_id, i)
        db_util.insert(add_sql)


def find_keys_by_status_and_activity_id(status, activity_id):
    find_keys_sql = "SELECT * FROM `keys` WHERE keys_status=" + str(status) + " AND activity_id=" + str(activity_id)
    _keys = db_util.select_many(find_keys_sql)
    return parse_pojo(_keys)


def update_keys(status, keys_id):
    find_keys_sql = "UPDATE `keys` SET keys_status=" + str(status) + " WHERE keys_id=" + str(keys_id)
    _keys = db_util.update(find_keys_sql)


def find_by_keys_content(keys_content):
    find_sql = """
        SELECT * FROM `keys` WHERE keys_content='%s'
        """ % keys_content
    _result = db_util.select_one(find_sql)
    if _result is None:
        return "No hash value found"
    return parse_pojo(_result)


def use_keys(keys_content, user_id):
    keys_list = find_by_keys_content(keys_content)
    if type(keys_list) is str:
        return keys_list
    else:
        keys_list = dict(keys_list)
    keys = keys_list['keys_list'][0]['keys']
    application_list = application_opera.find_application_by_keys_id(keys['keys_id'], user_id)
    application = application_list['application_list'][0]['application']
    if application['status'] != 1:
        return "The review is not passed, Use is prohibited"
    update_sql = """
    UPDATE `gxsf-tickets`.`keys` SET keys_status=%s WHERE keys_id=%s
    """ % (str(2), application['keys_id'])
    db_util.update(update_sql)
    return 'Successfully used'


def auto_generate(num):
    """
    自动生成门票
    :return:
    """
    _hash = []
    for i in range(num):
        _hash.append(hex(int(str(time.time()).replace('.', ''))))
    return _hash


def find_keys_by_id(keys_id):
    """
    根据id查询hash
    :param keys_id:
    :return:
    """
    find_sql = "SELECT * FROM `keys` WHERE keys_id=" + str(keys_id)
    _keys = db_util.select_one(find_sql)
    return parse_pojo(_keys)


def get_keys_table():
    field_names = ['keys_id', 'activity_id', 'keys_content', 'keys_status']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields

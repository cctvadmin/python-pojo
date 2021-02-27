from random import randint

from operas import keys_opera, user_opera, activity_opera
from pojo import pojo, pojo_util
from util import db_util, json_util


def parse_pojo(db_data):
    return pojo_util.parse_pojo(db_data, get_application_table(), 'application', 'all application from database',
                                'application_list')


def find_application_by_user_id_and_activity_id(user_id, activity_id):
    find_sql = """
        SELECT * FROM application WHERE user_id=%s AND activity_id=%s
        """ % (user_id, activity_id)
    _result = db_util.select_one(find_sql)
    if _result is None:
        return None
    return parse_pojo(_result)


def add_application(user_id, activity_id):
    """
    添加一个申请
    :param user_id:
    :param activity_id:
    :return:
    """
    _keys = keys_opera.find_keys_by_status_and_activity_id(0, activity_id)

    # 随机选一个hash
    key = _keys['keys_list'][randint(0, len(_keys['keys_list']) - 1)]

    # 不允许重复添加
    _result = find_application_by_user_id_and_activity_id(user_id, activity_id)
    if _result is not None:
        return "Do not allow duplicate addition"

    # 活动当前人数+1
    add_sql = """
    INSERT INTO `gxsf-tickets`.`application` (
    `user_id`, 
    `activity_id`,
    `status`, 
    `keys_id`
    ) VALUES ( %s, %s,  %s, '%s');
    """ % (user_id, activity_id, 0, key['keys']['keys_id'])
    keys_opera.update_keys(1, key['keys']['keys_id'])
    db_util.insert(add_sql)


def delete_application(user, activity_id):
    """
    删除
    :param user:
    :param activity_id:
    :return:
    """
    # 恢复密钥
    _result = find_application_by_user_id_and_activity_id(user['user_id'], activity_id)
    if _result is not None:
        application = _result['application_list'][0]['application']
        keys_id = application['keys_id']
        keys_opera.update_keys(status=0, keys_id=keys_id)
    # 修改人数
    activity_opera.sun_people(activity_id)
    delete_sql = """
    DELETE FROM application WHERE user_id=%s AND activity_id=%s 
    """ % (str(user['user_id']), str(activity_id))
    db_util.update(delete_sql)
    # 更新用户的信誉分
    user_opera.sub_credibility(user, 5)


def search_by_user_id(user_id):
    find_sql = "SELECT * FROM application WHERE user_id=" + str(user_id)
    _result = db_util.select_many(find_sql)
    _application = parse_pojo(_result)
    return _application


def get_application_table():
    field_names = ['application_id', 'user_id', 'activity_id', 'create_time', 'status', 'keys_id']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields


def find_application_by_keys_id(keys_id, user_id):
    find_sql = """
    SELECT * FROM application WHERE keys_id=%s AND user_id=%s
    """ % (str(keys_id), str(user_id))
    _application = db_util.select_one(find_sql)
    return parse_pojo(_application)


def find_application_by_user_id(user_id):
    find_sql = "SELECT * FROM application WHERE user_id=" + str(user_id)
    _result = db_util.select_many(find_sql)
    if _result is None:
        return None
    return parse_pojo(_result)


def update_status(application_id, status):
    update_sql = """
    UPDATE application SET `status`=%s WHERE `application_id`=%s
    """ % (status, application_id)
    db_util.update(update_sql)

from pojo import pojo, pojo_util
from util import db_util


def parse_pojo(db_data):
    return pojo_util.parse_pojo(db_data, get_user_table(), 'user', 'all user from database',
                                'user_list')


def find_user_by_number_and_password(_number, _password):
    """
    根据学号和密码找用户
    :param _number:
    :param _password:
    :return:
    """
    find_sql = """
    SELECT * FROM `user` WHERE user_number ='%s' and user_password='%s' LIMIT 1
    """ % (_number, _password)
    _user = db_util.select_one(find_sql)
    if _user is None:
        return 'not find user number for %s' % _number
    else:
        return parse_pojo(_user)


def find_by_user_id(user_id):
    """
    根据用户ID查找用户
    :param user_id:
    :return:
    """
    find_sql = "SELECT * FROM user WHERE user_id=" + str(user_id)
    _result = db_util.select_one(find_sql)
    return parse_pojo(_result)


def sub_credibility(user_obj, scope=1):
    """
    用户信誉分减指定数额，默认1
    :param scope:分数
    :param user_obj:用户对象
    :return:
    """
    sub_sql = """
    UPDATE `gxsf-tickets`.`user` SET user_credibility=user_credibility-%s WHERE user_id = %s
    """ % (scope, user_obj['user_id'])
    db_util.update(sub_sql)


def add_credit(user_obj):
    """
    用户学分加一
    :param user_obj:
    :return:
    """
    sub_sql = """
    UPDATE `gxsf-tickets`.`user` SET user_credit=user_credit+1 WHERE user_id = %s
    """ % (user_obj['user_id'])
    db_util.update(sub_sql)


def get_user_table():
    """
    获取用户表格数据
    :return:
    """
    field_names = ['user_id', 'user_name', 'user_password', 'user_college', 'user_college_number',
                   'user_avatar', 'user_sex', 'user_number', 'user_status', 'create_time', 'update_time', 'user_credit',
                   'user_credibility']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields

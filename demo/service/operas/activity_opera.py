from pojo import pojo, pojo_util
from util import db_util


def parse_pojo(db_data):
    return pojo_util.parse_pojo(db_data, get_activity_table(), 'activity', 'all activity from database',
                                'activity_list')


def insert_activity(activity_name,
                    activity_img_path,
                    sign_up_start_time,
                    sign_up_stop_time,
                    activity_start_time,
                    activity_stop_time,
                    activity_people_max,
                    activity_message,
                    user_id,
                    activity_scope):
    add_sql = """
        INSERT INTO `gxsf-tickets`.`activity` (
            `activity_name`,
            `activity_img_path`,
            `sign_up_start_time`,
            `sign_up_stop_time`,
            `activity_start_time`,
            `activity_stop_time`,  
            `activity_people_max`, 
            `activity_message`,
            `user_id`,
            `activity_scope`) 
     VALUES ( 
    '%s', 
    '%s', 
    '%s', 
    '%s', 
    '%s',  
    '%s',  
    '%s',  
    '%s',
    '%s',
    '%s');
     """ % (activity_name,
            activity_img_path,
            sign_up_start_time,
            sign_up_stop_time,
            activity_start_time,
            activity_stop_time,
            activity_people_max,
            activity_message,
            user_id,
            activity_scope)
    db_util.insert(add_sql)


def add_people(activity_id):
    """
    当前人数+1
    :param activity_id:
    :return:
    """
    update_sql = "UPDATE activity SET activity_people_now=activity_people_now+1 WHERE activity_id=" + str(activity_id)
    db_util.update(update_sql)


def sun_people(activity_id):
    """
    当前人数-1
    :param activity_id:
    :return:
    """
    update_sql = "UPDATE activity SET activity_people_now=activity_people_now-1 WHERE activity_id=" + str(activity_id)
    db_util.update(update_sql)


def find_by_id(activity_id):
    """
    根据ID查找活动
    :param activity_id:
    :return:
    """
    find_sql = "SELECT * FROM activity WHERE activity_id = " + str(activity_id)
    _activity = db_util.select_one(find_sql)
    return parse_pojo(_activity)


def get_activity_table():
    field_names = ['activity_id', 'activity_name', 'activity_img_path', 'sign_up_start_time', 'sign_up_stop_time',
                   'activity_start_time', 'activity_stop_time', 'activity_people_max', 'activity_people_now',
                   'activity_message', 'activity_status',
                   'user_id', 'activity_scope']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields

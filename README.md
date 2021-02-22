# python-pojo

python 数据库数据转对象,类似 jpa  
解决 python 使用 sql 时无法面向对象问题

# 文件目录

    ├─pojo
    │  │  pojo.py
    │  │  __init__.py
    │  │
    │  └─__pycache__
    │          pojo.cpython-39.pyc
    │          __init__.cpython-39.pyc
    │
    └─util
        │  config.py
        │  db_util.py
        │  json_util.py
        │  log.py
        │  req_util.py
        │  __init__.py
        │
        └─__pycache__
                config.cpython-39.pyc
                db_util.cpython-39.pyc
                json_util.cpython-39.pyc
                log.cpython-39.pyc
                req_util.cpython-39.pyc
                __init__.cpython-39.pyc

# 使用教程

    from util import db_util, json_util, config, log
    from pojo import pojo

    def activity_search():
        """
        查询活动
        :return:
        """
        _activity_name = request.form.get('name')
        _result = db_util.select_many("SELECT * FROM activity WHERE activity_name LIKE '%" + _activity_name + "%'")
        table_fields = get_activity_table()
        pojo_class = pojo.to_pojo.init_data('activity', 'all activity from database', _result, table_fields)
        activity = pojo_class.get_pojo()
        _dicts = {'activity_list': []}
        for i in activity:
            _dicts['activity_list'].append(i.to_dict(True))
        _json_result = json_util.parse(_dicts)
        return Response(_json_result)


    def get_activity_table():
        field_names = ['activity_id', 'activity_name', 'activity_img_path', 'sign_up_start_time', 'sign_up_stop_time',
                      'activity_start_time', 'activity_stop_time', 'activity_people_max', 'activity_message',
                      'user_id']
        table_fields = {}
        for i, j in enumerate(field_names):
            table_fields[i] = j
        return table_fields

# 类介绍

## --pojo_father

    --简介
    全部POJO的父类,为所有子类提供to_dict(转字典)和to_json(转json)功能
    并为每个pojo设置name(表名)和msg(表描述)

    --方法介绍
    ├─__init__(self, name, msg):
    │  │  初始化name(表名)和msg(表描述)
    ├─to_dict(self,name_and_msg):
    │  │  将pojo对象转dict(字典)
    │  │  当name_and_msg为True时,解析并携带name和msg
    ├─to_json(self,name_and_msg):
    │  │  将pojo对象转json字符串,并处理datetime类型的数据(即不再担心时间戳对象无法编译)
    │  │  当name_and_msg为True时,解析并携带name和msg

    --解析格式:
    {
    "activity_list":[
        {
            "activity":{
                "activity_id":1,
                "activity_img_path":"/tickets/img/test.path",
                "activity_message":"test_msg",
                "activity_name":"test_name",
                "activity_people_max":"50",
                "activity_start_time":"2021-05-21 14:47:16",
                "activity_stop_time":"2021-08-21 14:47:24",
                "sign_up_start_time":"2021-02-21 14:47:00",
                "sign_up_stop_time":"2021-05-21 14:47:10",
                "user_id":null
            },
            "msg":"all activity from database"
        },
        {
            "activity":{
                "activity_id":2,
                "activity_img_path":"/tickets/img/test.path",
                "activity_message":"test_msg",
                "activity_name":"test_name",
                "activity_people_max":"50",
                "activity_start_time":"2021-05-21 14:47:16",
                "activity_stop_time":"2021-08-21 14:47:24",
                "sign_up_start_time":"2021-02-21 14:47:00",
                "sign_up_stop_time":"2021-05-21 14:47:10",
                "user_id":null
            },
            "msg":"all activity from database"
        }
    ]

}

--Pojo()

    --简介
    继承自pojo_father,提供多功能get|set|get_name(获取表名)|get_msg(获取表描述)方法

    --方法介绍
    ├─__init__(self, name, msg, table_data, dicts):
    │  │  初始化name(表名)和msg(表描述),解析表数据为dicts指定格式
    ├─to_dict(name_and_msg):
    │  │  继承自pojo_father
    ├─to_json:
    │  │  继承自pojo_father
    ├─get(self, key):
    │  │  取出字段,使用见 [dict]
    ├─set(self, key,value):
    │  │  存入字段,使用见 [dict]
    ├─get_name(self):
    │  │  获取设置的表名
    ├─get_msg(self):
    │  │  获取设置的表描述

--to_pojo()

    --简介
    提供转pojo对象的类,并提供两种方式初始化数据,为操作多维数组衍生类
    如果结果为非二维数组,建议使用 Pojo 类实例化

    --方法介绍
    ├─__init__(self, name, msg, table_data, dicts):
    │  │  初始化name(表名)和msg(表描述),解析表数据为dicts指定格式
    ├─init_data(cls, name, msg, table_data, dicts):
    │  │  初始化name(表名)和msg(表描述),解析表数据为dicts指定格式
    ├─get_pojo(self):
    │  │  解析并获取pojo对象

# 感谢使用

微信:cacode

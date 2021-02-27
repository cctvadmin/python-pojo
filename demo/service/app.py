# coding: utf-8
import json
from random import randint

from flask import Flask, request, Response, send_from_directory
from flask_cors import CORS
from flask_apscheduler import APScheduler
from datetime import timedelta, datetime
import os

from operas import activity_opera, keys_opera, user_opera, application_opera
from util import db_util, json_util, config, log, url_to_img
from pojo import pojo
from shlex import quote as shlex_quote

app = Flask(__name__)
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = timedelta(seconds=1)
app.config["DEBUG"] = True

CORS(app, supports_credentials=True)


# -------------------------SMS OPERATION---------------------------
@app.route('/sms-list', methods=['POST'])
def sms_list():
    find_sql = 'SELECT * FROM sms ORDER BY sms_id DESC'
    _sms_list = db_util.select_many(find_sql)
    if _sms_list is None:
        return Response('not find user number for sms')
    else:
        _pojo_obj = pojo.to_pojo.init_data(name='sms', msg='sms table by user id',
                                           table_data=_sms_list,
                                           dicts=get_sms_table())
        user = _pojo_obj.get_pojo()
        _dicts = {'sms_list': []}
        for i in user:
            _dicts['sms_list'].append(i.to_dict(True))
        _json_result = json_util.parse(_dicts)
        return Response(_json_result)


def get_sms_table():
    """
    获取sms表格
    :return:
    """
    field_names = ['sms_id', 'sms_content', 'create_time']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields


# -------------------------participate OPERATION---------------------------

@app.route('/participate-find', methods=['POST'])
def participate_find():
    """
    根据用户查找参与的活动
    :return:
    """
    # _form = json.loads(request.get_data(as_text=True))
    # _user_id = _form['user_id']
    _user_id = request.form.get('user_id')
    find_sql = "SELECT * FROM participate WHERE user_id=" + str(_user_id) + ""

    _participates = db_util.select_many(find_sql)
    if _participates is None:
        return Response('not find user number for %s' % _user_id)
    else:
        _pojo_obj = pojo.to_pojo.init_data(name='participate', msg='participate table by user id',
                                           table_data=_participates,
                                           dicts=get_participate_table())
        user = _pojo_obj.get_pojo()
        _dicts = {'participates': []}
        for i in user:
            _dicts['participates'].append(i.to_dict(True))
        _json_result = json_util.parse(_dicts)
        return Response(_json_result)


@app.route('/participate-add', methods=['POST'])
def participate_add():
    """
    参加一个活动
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))
    _user_id = _form['user_id']
    _activity_id = _form['activity_id']

    add_sql = """
    INSERT INTO `gxsf-tickets`.`participate` (
    `user_id`,
    `activity_id`,
    `create_time`,
    `update_time`
    ) VALUES ( 
'%s',
'%s',
'%s',
'%s'
    );
    """ % (
        _user_id,
        _activity_id,
        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    )
    db_util.insert(add_sql)
    return Response("true")


def get_participate_table():
    """
    获取participate表格
    :return:
    """
    field_names = ['participate_id', 'user_id', 'activity_id', 'status', 'create_time', 'update_time']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields


# -------------------------NAV OPERATION---------------------------

@app.route('/nav-list', methods=['POST'])
def nav_list():
    """
    查找导航图片
    :return:
    """
    table_fields = get_nav_table()
    _result = db_util.select_many("SELECT * FROM nav")
    pojo_class = pojo.to_pojo.init_data('nav', 'all nav from database', _result, table_fields)
    activity = pojo_class.get_pojo()
    _dicts = {'nav_list': []}
    for i in activity:
        _dicts['nav_list'].append(i.to_dict(True))
    _json_result = json_util.parse(_dicts)
    return Response(_json_result)


def get_nav_table():
    """
    获取nav表格
    :return:
    """
    field_names = ['nav_id', 'nav_img', 'nav_img_link', 'create_time', 'update_time']
    table_fields = {}
    for i, j in enumerate(field_names):
        table_fields[i] = j
    return table_fields


# -------------------------USER OPERATION---------------------------
@app.route('/user-update', methods=['POST'])
def user_update():
    """
    用户更新数据
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))['user']
    user_id = _form['user_id']
    user_name = _form['user_name']
    user_password = _form['user_password']
    user_college = _form['user_college']
    user_college_number = _form['user_college_number']
    user_avatar = _form['user_avatar']
    user_sex = _form['user_sex']
    user_number = _form['user_number']
    user_status = _form['user_status']
    update_time = _form['update_time']
    update_sql = """
    UPDATE `gxsf-tickets`.`user` SET 
    `user_name` = '%s', 
    `user_password` = '%s',
    `user_college` = '%s',
    `user_college_number` = %s, 
    `user_avatar` = '%s', 
    `user_sex` = %s, 
    `user_number` = %s,
    `user_status` = '%s',
    `update_time` = '%s'
    WHERE `user_id` = %s;
    """ % (
        user_name,
        user_password,
        user_college,
        user_college_number,
        user_avatar,
        user_sex,
        user_number,
        user_status,
        update_time,
        user_id,
    )
    db_util.update(update_sql)
    return Response("true")


@app.route('/user-info', methods=['POST'])
def user_info():
    _form = json.loads(request.get_data(as_text=True))
    user_id = _form['user_id']
    user = user_opera.find_by_user_id(user_id)['user_list'][0]['user']
    user['user_password'] = '******'
    return Response(json_util.parse(user))


@app.route('/user-login', methods=['POST'])
def user_login():
    """
    用户登录
    :return:用户基本信息
    """
    _form = json.loads(request.get_data(as_text=True))
    _number = _form['number']
    _password = _form['password']

    _result = user_opera.find_user_by_number_and_password(_number, _password)
    if _result is str:
        return Response(_result)
    else:
        return Response(json_util.parse(_result))


# -------------------------KEYS OPERATION---------------------------
@app.route('/keys-img/<user_name>/<keys_content>', methods=['GET'])
def keys_img(keys_content, user_name):
    keys_list = keys_opera.find_by_keys_content(keys_content)
    keys = keys_list['keys_list'][0]['keys']
    status = keys['keys_status']
    if status == 0:
        keys_status = '未使用'
    elif status == 1:
        keys_status = '已生效'
    elif status == 2:
        keys_status = '已使用'
    else:
        keys_status = '已被恶意修改,此人有攻击嫌疑'
    activity_id = keys['activity_id']
    activity_list = activity_opera.find_by_id(activity_id)
    activity = activity_list['activity_list'][0]['activity']
    user_id = activity['user_id']
    user_list = user_opera.find_by_user_id(user_id)
    user = user_list['user_list'][0]['user']
    return """
    <style>
        div {
            font-size: 30px;
        }
        span{
            color:red;
        }
    </style>
    <div>当前状态：<span>%s</span></div>
    <div>活动名称：<span>%s</span></div>
    <div>发布的用户：<span>%s</span></div>
    <div>使用的用户名：<span>%s</span></div>
    <div>hash密钥内容：<span>%s</span></div>
    """ % (keys_status, activity['activity_name'], user['user_name'], user_name, keys_content)


@app.route('/keys-use', methods=['POST'])
def keys_use():
    _form = json.loads(request.get_data(as_text=True))
    keys_content = _form['keys_content']
    user_id = _form['user_id']
    _result = keys_opera.use_keys(keys_content, user_id)
    return Response(_result)


@app.route('/keys-search', methods=['POST'])
def keys_search():
    _form = json.loads(request.get_data(as_text=True))
    keys_id = _form['keys_id']
    keys_obj = keys_opera.find_keys_by_id(keys_id)
    return Response(json.dumps(keys_obj['keys_list'][0]['keys']))


# -------------------------APPLICATION OPERATION---------------------------
@app.route('/application-refuse', methods=['POST'])
def application_refuse():
    _form = json.loads(request.get_data(as_text=True))
    application_id = _form['application_id']
    application_opera.update_status(application_id, 2)
    return Response("Unsuccessful review")


@app.route('/application-success', methods=['POST'])
def application_success():
    _form = json.loads(request.get_data(as_text=True))
    application_id = _form['application_id']
    application_opera.update_status(application_id, 1)
    return Response("Successful review")


@app.route('/application-review-view', methods=['POST'])
def application_review_view():
    """
    获取需要的审核元素
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))
    user_id = _form['user_id']
    application_list = application_opera.find_application_by_user_id(user_id)
    return Response(json_util.parse(application_list))


@app.route('/application-review-opera', methods=['POST'])
def application_review_opera():
    """
    审核操作
    :return:
    """
    pass


@app.route('/application-search', methods=['POST'])
def application_search():
    _form = json.loads(request.get_data(as_text=True))
    user_id = _form['user_id']
    applications = application_opera.search_by_user_id(user_id)
    return Response(json_util.parse(applications))


@app.route('/application-delete', methods=['POST'])
def application_delete():
    """
    申删除
    :return:
    """
    activity_id, user_number, user_password = get_activity_id_user_number_user_password()
    user_list = user_opera.find_user_by_number_and_password(user_number, user_password)
    user = user_list['user_list'][0]['user']
    _result = application_opera.delete_application(user, activity_id)
    if _result is not None:
        return Response(_result)
    return Response("Your reputation points have been reduced")


@app.route('/application-add', methods=['POST'])
def application_add():
    """
    申请参加
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))
    activity_id = _form['activity_id']
    user_id = _form['user_id']
    _result = application_opera.add_application(user_id, activity_id)
    if _result is not None:
        return Response(_result)
    return Response("Your reputation points have been reduced")


def get_activity_id_user_number_user_password():
    _form = json.loads(request.get_data(as_text=True))
    activity_id = _form['activity_id']
    user_number = _form['user_number']
    user_password = _form['user_password']
    return activity_id, user_number, user_password


# -------------------------ACTIVITY OPERATION---------------------------


@app.route('/activity-delete', methods=['POST'])
def activity_delete():
    """
    删除活动扣分
    :return:
    """
    activity_id, user_number, user_password = get_activity_id_user_number_user_password()
    user_list = user_opera.find_user_by_number_and_password(user_number, user_password)
    user = user_list['user_list'][0]['user']
    # 删除减5分
    user_opera.sub_credibility(user, 5)
    delete_keys_sql = "DELETE FROM `keys` WHERE activity_id = '" + str(activity_id) + "'"
    db_util.update(delete_keys_sql)
    delete_activity_sql = """
    DELETE FROM activity WHERE user_id='%s' AND activity_id = '%s'
    """ % (user['user_id'], activity_id)
    db_util.update(delete_activity_sql)
    return Response('Deleted successfully, you have been deducted reputation points')


@app.route('/activity-add', methods=['POST'])
def activity_add():
    """
    add a activity
    :return:
    """
    _form_main = json.loads(request.get_data(as_text=True))
    _form = _form_main['activity']
    activity_name = _form['activity_name']
    sign_up_start_time = _form['sign_up_start_time']
    sign_up_stop_time = _form['sign_up_stop_time']
    activity_start_time = _form['activity_start_time']
    activity_stop_time = _form['activity_stop_time']
    activity_people_max = _form['activity_people_max']
    activity_message = _form['activity_message']
    activity_img_path = _form['activity_img_path']
    activity_scope = _form['activity_scope']
    user_number = _form_main['user_number']
    user_password = _form_main['user_password']

    user_list = user_opera.find_user_by_number_and_password(user_number, user_password)
    if len(user_list['user_list']) == 0:
        return Response("user is undefined")
    else:
        user = user_list['user_list'][0]['user']
        if user['user_credibility'] <= 75:
            return Response("You credibility less than or equal to 50,Cannot post activity")

    # 是否自动生成门票
    auto = _form['auto']
    # 尝试分解int
    int(activity_scope)
    int(activity_people_max)
    # 门票hash
    if auto == 0:
        keys = keys_opera.auto_generate(int(activity_people_max))
    else:
        keys = str(_form['keys']).split('\n')
    if len(keys) != int(activity_people_max):
        return Response("You son of a bitch,The ticket hash does not correspond to the maximum number of people")
    if user['user_id'] == -1 \
            or activity_name == '' \
            or sign_up_start_time == '' \
            or sign_up_stop_time == '' \
            or activity_start_time == '' \
            or activity_stop_time == '' \
            or activity_people_max == '' \
            or activity_message == '' \
            or activity_scope == '' \
            or activity_img_path == '':
        return Response('You son of a bitch,The parameter is not allowed to be empty')
    activity_opera.insert_activity(activity_name,
                                   activity_img_path,
                                   sign_up_start_time,
                                   sign_up_stop_time,
                                   activity_start_time,
                                   activity_stop_time,
                                   activity_people_max,
                                   activity_message,
                                   user['user_id'],
                                   activity_scope)
    activity_obj = db_util.select_one("SELECT * FROM activity WHERE activity_name='" + activity_name + "'")
    _activity_list = activity_opera.parse_pojo(activity_obj)
    keys_opera.insert_keys(_activity_list['activity_list'][0]['activity']['activity_id'], keys)
    return Response("true")


@app.route('/activity-search-id', methods=['POST'])
def activity_search_id():
    """
    根据活动id查询活动
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))
    activity_id = _form['activity_id']
    if activity_id is None:
        return Response("You son of a bitch,The parameter is not allowed to be empty")
    _json_result = activity_search_messy("activity_id=" + str(activity_id))
    return Response(_json_result)


@app.route('/activity-search-user', methods=['POST'])
def activity_search_user():
    """
    根据用户查询活动
    :return:
    """
    _form = json.loads(request.get_data(as_text=True))
    user_id = _form['user_id']
    if user_id is None:
        return Response("You son of a bitch,The parameter is not allowed to be empty")
    _json_result = activity_search_messy("user_id=" + str(user_id))
    return Response(_json_result)


@app.route('/activity-search', methods=['POST'])
def activity_search():
    """
    查询活动
    :return:
    """
    _activity_name = request.form.get('name')
    if _activity_name is None:
        _activity_name = ''
    _json_result = activity_search_messy("activity_name LIKE '%" + _activity_name + "%'")
    return Response(_json_result)


def activity_search_messy(sql_where):
    """
    填充sql语句
    :param sql_where:sql后面的where
    :return:
    """
    activity_obj = db_util.select_many("SELECT * FROM activity WHERE " + sql_where)
    _activity_list = activity_opera.parse_pojo(activity_obj)
    _json_result = json_util.parse(_activity_list)
    return _json_result


# -------------------------STAR---------------------------

@app.route("/upload-img", methods=["POST"])
def upload_img():
    """
    upload img to file path:/tickets/img/[....].suffix
    :return:
    """
    _img = request.files.get('img')
    if _img is None:
        return 'not find file'
    else:
        _file_suffix = str(_img.filename).split('.')[1]
        if _file_suffix not in config.IMG_SUFFIX:
            return "file suffix error"
        file_name = datetime.now().strftime("%Y%m%d%H%M%S") + str(randint(1000, 100000)) + '.' + _file_suffix
        _file_path = '/tickets/img/' + file_name
        log.write(config.SAVE_PATH + os.sep + 'create.txt', 'create new text,author wx:cacode')
        _img.save(_file_path)
        return _file_path


@app.route('/find-file', methods=['GET'])
def file_read():
    _path = request.args.get('path')
    if not os.path.exists(_path):
        return Response('file not find')
    with open(_path, 'rb') as f:
        image = f.read()
        return Response(image)


@app.route('/url-to-img', methods=['GET'])
def url_to_img_():
    url = request.args.get('url')
    _path = url_to_img.url_to_img(url, 1, 10, 4)
    with open(_path, 'rb') as f:
        image = f.read()
        return Response(image)


@app.route('/favicon.ico')
def favicon():
    """
    设置接口的图标
    :return:
    """
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/init-config')
def init_config():
    # 默认图片们
    file_path = os.path.join(app.root_path, 'static/default.png')
    log.write(config.SAVE_PATH + os.sep + 'create.txt', 'create new text,author wx:cacode \r\n')
    comm = 'copy %s %s' % (file_path, '/tickets/img/default.png')
    os.system(shlex_quote(comm))
    # ----
    file_path = os.path.join(app.root_path, 'static/nav_default.png')
    log.write(config.SAVE_PATH + os.sep + 'create.txt', 'create new text,author wx:cacode')
    comm = 'copy %s %s' % (file_path, '/tickets/img/nav_default.png')
    os.system(shlex_quote(comm))
    return Response('success')


if __name__ == '__main__':
    scheduler = APScheduler()
    scheduler.init_app(app)
    scheduler.start()
    app.run(host='0.0.0.0', port=4568)

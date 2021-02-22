# python-pojo
python数据库数据转对象,类似jpa
使用教程
  @app.route('/activity-search', methods=['POST'])
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

from pojo import pojo


def parse_pojo(db_data, fields, name, msg, list_name):
    pojo_class = pojo.to_pojo.init_data(name=name, msg=msg, table_data=db_data, dicts=fields)
    activity = pojo_class.get_pojo()
    _dicts = {list_name: []}
    for i in activity:
        _dicts[list_name].append(i.to_dict(True))
    return _dicts

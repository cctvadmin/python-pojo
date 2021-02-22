from util import json_util


class pojo_father:
    """
    所有对象父类，提供表明、表描述、转dist操作
    """

    def __init__(self, name, msg, fields):
        self.name = name
        self.msg = msg
        self.fields = fields

    def to_dict(self, name_and_msg=False):
        """
        转字典
        :param name_and_msg:是否携带名称和描述
        :return:字典
        """
        _dict = dict(self.fields)
        if name_and_msg:
            _dict = {self.name: _dict, 'msg': self.msg}
        return _dict

    def to_json(self, name_and_msg=False):
        """
        转json
        :param name_and_msg:是否携带名称和描述
        :return:json
        """
        _json = json_util.parse(self.fields)
        if name_and_msg:
            _json = {self.name: _json, 'msg': self.msg}
        return _json


class Pojo(pojo_father):
    def __init__(self, name, msg, fields):
        self.fields = fields
        super().__init__(name, msg, fields)

    def get(self, key):
        """
        获取字段值
        :param key:键
        :return:
        """
        return self.fields[key]

    def set(self, key, value):
        """
        设置字段值
        :param key:键
        :param value:值
        :return:
        """
        self.fields[key] = value
        return self.fields

    def get_name(self):
        """
        获取表名
        :return:
        """
        return self.name

    def get_msg(self):
        """
        获取表描述
        :return:
        """
        return self.msg


class to_pojo:
    """
    转pojo对象
    """

    def __init__(self, name, msg, table_data, dicts):
        """
        初始化POJO,入宫table_data 的 type 非 list,则自动转list
        :param name:
        :param msg:
        :param table_data:
        :param dicts:
        """
        self.name = name
        self.msg = msg
        self.fields = []
        self.__table_data__ = []
        if type(table_data) is not list:
            self.__table_data__.append(table_data)
        else:
            self.__table_data__ = table_data
        for one_data in self.__table_data__:
            _dict = {}
            for key in dicts.keys():
                field_name = dicts[key]
                _dict[field_name] = one_data[key]
            self.fields.append(_dict)

    @classmethod
    def init_data(cls, name, msg, table_data, dicts):
        """
        初始化
        :param name:表名
        :param msg:描述
        :param table_data:表数据 - 二维数组
        :param dicts:键值对，以表{数据索引:字段名}计入 - 一维数组
        :return:
        """
        return cls(name, msg, table_data, dicts)

    def get_pojo(self):
        """
        使用前先初始化对象,可通过对象构造函数初始化,或to_pojo.init_data()方法实现初始化数据
        获取解析成功的pojo对象对象
        :return:
        """
        pojo_list = []
        for i in self.fields:
            pojo_list.append(Pojo(name=self.name, msg=self.msg, fields=i))
        return pojo_list


if __name__ == '__main__':
    _pojo = Pojo('name', 'msg', {'a': 'b', 'c': {'d': 'e'}})
    print(_pojo.to_dict())
    print(_pojo.set('f', 'g'))

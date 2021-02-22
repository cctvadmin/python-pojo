import os
from util import config
import time


def success(content):
    path = get_path(os.sep + 'success' + os.sep + 'log.log')
    _date = date_format(time)
    _log = '[%s]\t[%s] - %s\r\n' % (_date, 'content', str(content))
    write(path, _log)


def error(content):
    path = get_path(os.sep + 'error' + os.sep + 'log.log')
    _date = date_format(time)
    _log = '[%s]\t[%s] - %s\r\n' % (_date, 'content', str(content))
    write(path, _log)


def warn(content):
    path = get_path(os.sep + 'warn' + os.sep + 'log.log')
    _date = date_format(time)
    _log = '[%s]\t[%s] - %s\r\n' % (_date, 'content', str(content))
    write(path, _log)


def get_path(end_path):
    _STATIC_TXT = os.path.join('', config.LOG_PATH + end_path)
    return _STATIC_TXT


def write(path, content):
    _sep_path = path.split(os.sep)
    _path = ''
    for i in _sep_path:
        _end = _sep_path[len(_sep_path) - 1]
        if i != _end:
            _path += str(i) + os.sep
        else:
            _path += str(i)
        if not os.path.exists(_path):
            if '.' not in i:
                os.makedirs(_path)

    with open(os.path.join(_path), mode="a", encoding="UTF-8") as f:
        f.write(content)
        f.close()


def date_format(time_obj=time, fmt='%Y-%m-%d %H:%M:%S'):
    _tm = time_obj.time()
    _t = time.localtime(_tm)
    return time.strftime(fmt, _t)

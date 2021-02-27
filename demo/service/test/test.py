import time
from datetime import datetime

from util import req_util
import json


def test():
    data = {
        'name': ''
    }
    _req = req_util.req_obj(url='http://localhost:5000/activity-search',
                            data_dict=data,
                            json_dict=data,
                            post=True)
    print(json.dumps(json.loads(_req), sort_keys=True, indent=4, separators=(',', ':')))


def test_login():
    data = {
        'number': '12345789',
        'password': '123'
    }
    _req = req_util.req_obj(url='http://localhost:5000/user-login',
                            data_dict=data,
                            json_dict=data,
                            post=True)
    print(json.dumps(json.loads(_req), sort_keys=True, indent=4, separators=(',', ':')))


def test_str():
    print(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


def test_participate():
    data = {
        'user_id': '1',
    }
    _req = req_util.req_obj(url='http://localhost:5000/participate-find',
                            data_dict=data,
                            json_dict=data,
                            post=True)
    print(json.dumps(json.loads(_req), sort_keys=True, indent=4, separators=(',', ':')))


def test_sms():
    _req = req_util.req_obj(url='http://localhost:5000/sms-list',
                            post=True)
    print(json.dumps(json.loads(_req), sort_keys=True, indent=4, separators=(',', ':')))


if __name__ == '__main__':
    print(hash(int(str(time.time()).replace('.', ''))))

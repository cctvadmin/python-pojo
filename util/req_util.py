import requests
import json
from util import config


def req_json(url, post=False, data_dict=None, json_str=None, print_flag=False, header=config.HEADERS):
    """
        发起请求，如果预计返回结果非json
        请使用req_obj方法
    :param url:链接
    :param post:是否使用post方法
    :param data_dict:data数据-字典格式
    :param json_str:json数据-字符串格式
    :param print_flag:是否打印输出显示
    :param header:请求头
    :return:json结果集
    """
    if post:
        _req = requests.post(url, data=data_dict, json=json_str, headers=header)
    else:
        _req = requests.get(url, data=data_dict, json=json_str, headers=header)
    _req.encoding = "UTF-8"
    _text = _req.text
    _json = json.loads(_text)
    if print_flag:
        _json_text_format = json.dumps(_json, sort_keys=True, indent=4)
        print(_json_text_format)

    return _json


def req_obj(url, post=False, data_dict=None, json_dict=None, print_flag=False, header=config.HEADERS):
    if post:
        _req = requests.post(url, data=data_dict, json=json_dict, headers=header)
    else:
        _req = requests.get(url, data=data_dict, json=json_dict, headers=header)
    _req.encoding = "UTF-8"
    if print_flag:
        print(_req.text)
    return _req.text


if __name__ == '__main__':
    import time

    _json = req_obj(url="https://quicktiny.cn/cgi/unifiedorder",
                    post=True,
                    print_flag=True,
                    data_dict={
                        "appkey": "9s94b80mln1i",
                        "out_trade_no": int(time.time()),
                        "product_origin_fee": 0.01,
                        "notify_url": "http://3cuify.natappfree.cc/notice",
                        "strategy": "any",
                        "order_ttl": 90
                    })

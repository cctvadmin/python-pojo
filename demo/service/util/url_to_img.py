# coding=utf-8
import time

import qrcode
from PIL import Image


def url_to_img(url, version, box_size, border):
    """
    链接生成图片
    :param url:链接
    :param version:表示生成二维码的尺寸大小，取值范围是 1 至 40，最小尺寸 1 会生成 21 * 21 的二维码矩阵，version 每增加 1，
    生成的二维码就会添加 4 个单位大小，例如 version 是 2，
    则生成 25 * 25 尺寸大小的二维码。
    :param box_size:表示二维码里每个格子的像素大小
    :param border:表示边框的格子宽度是多少(默认4)
    :return:
    """
    qr = qrcode.QRCode(
        # version=version,
        # error_correction=qrcode.constants.ERROR_CORRECT_L,
        # box_size=box_size,
        # border=border
        version=version,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="green", back_color="white")
    sps = str(url).split('/')
    save_path = '/tickets/img/' + sps[len(sps) - 1] + ".png"
    img.save(save_path)
    return save_path

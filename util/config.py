import os

LOG_PATH = os.sep + "log"  # 日志存放路径 以项目路径为准
LOG_MAX = 1  # 日志最大多少MB
HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
}
DATABASE = 'gxsf-tickets'
DATABASE_NAME = 'root'
DATABASE_PASSWORD = '123456'
DATABASE_HOST = '47.110.53.114'
DATABASE_PORT = 3306
SAVE_PATH = os.sep + 'tickets' + os.sep + 'img'
IMG_SUFFIX = 'bmp jpg png tif gif pcx tga exif fpx svg psd cdr pcd dxf ufo eps ai raw WMF webp avif'

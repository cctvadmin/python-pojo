/*
 Navicat Premium Data Transfer

 Source Server         : 47.110.53.114
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : 47.110.53.114:3306
 Source Schema         : gxsf-tickets

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 28/02/2021 06:51:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `activity_id` int NOT NULL AUTO_INCREMENT COMMENT '索引',
  `activity_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '活动名',
  `activity_img_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '活动海报',
  `sign_up_start_time` datetime NULL DEFAULT NULL COMMENT '报名开始时间',
  `sign_up_stop_time` datetime NULL DEFAULT NULL COMMENT '报名结束时间',
  `activity_start_time` datetime NULL DEFAULT NULL COMMENT '活动开始时间',
  `activity_stop_time` datetime NULL DEFAULT NULL COMMENT '活动结束时间',
  `activity_people_max` int NULL DEFAULT NULL COMMENT '用户数量',
  `activity_people_now` int NULL DEFAULT 0 COMMENT '当前人数',
  `activity_message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '描述',
  `activity_status` int NULL DEFAULT 0 COMMENT '0报名中1结束报名2活动开始3活动结束',
  `user_id` int NULL DEFAULT NULL COMMENT '发布的用户',
  `activity_scope` int NULL DEFAULT 2 COMMENT '参加本次活动分数',
  PRIMARY KEY (`activity_id`, `activity_name`) USING BTREE,
  INDEX `activity_id`(`activity_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (1, 'test_1', '/tickets/img/default.png', '2021-02-27 07:24:00', '2021-02-28 00:00:00', '2021-03-01 00:00:00', '2021-03-02 00:00:00', 50, -1, 'test_1_message', 0, 1, 0);
INSERT INTO `activity` VALUES (2, 'test_2', '/tickets/img/default.png', '2021-02-27 07:54:00', '2021-02-28 00:00:00', '2021-03-01 00:00:00', '2021-03-02 00:00:00', 50, 0, 'test_2_msg', 0, 1, 0);
INSERT INTO `activity` VALUES (4, 'test_3', '/tickets/img/default.png', '2021-02-28 02:28:00', '2021-02-28 02:28:00', '2021-02-28 02:28:00', '2021-02-28 02:28:00', 50, 0, 'test_3_msg', 0, 1, 2);

-- ----------------------------
-- Table structure for application
-- ----------------------------
DROP TABLE IF EXISTS `application`;
CREATE TABLE `application`  (
  `application_id` int NOT NULL AUTO_INCREMENT COMMENT '索引',
  `user_id` int NULL DEFAULT NULL COMMENT '用户id',
  `activity_id` int NULL DEFAULT NULL COMMENT '活动id',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请时间',
  `status` int NULL DEFAULT 0 COMMENT '0申请1通过2不通过',
  `keys_id` int NULL DEFAULT NULL COMMENT '参加的门票hash',
  PRIMARY KEY (`application_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `activity_id`(`activity_id`) USING BTREE,
  INDEX `application_keys`(`keys_id`) USING BTREE,
  CONSTRAINT `application_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `application_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`activity_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `application_keys` FOREIGN KEY (`keys_id`) REFERENCES `keys` (`keys_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of application
-- ----------------------------
INSERT INTO `application` VALUES (4, 1, 1, '2021-02-27 14:44:04', 1, 31);
INSERT INTO `application` VALUES (5, 1, 2, '2021-02-27 14:44:33', 1, 73);
INSERT INTO `application` VALUES (6, 1, 4, '2021-02-27 18:28:55', 2, 199);

-- ----------------------------
-- Table structure for keys
-- ----------------------------
DROP TABLE IF EXISTS `keys`;
CREATE TABLE `keys`  (
  `keys_id` int NOT NULL AUTO_INCREMENT COMMENT '索引',
  `activity_id` int NULL DEFAULT NULL COMMENT '对应的活动',
  `keys_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'hash',
  `keys_status` int NULL DEFAULT 0 COMMENT '0未使用1已生效2已使用',
  PRIMARY KEY (`keys_id`, `keys_content`) USING BTREE,
  INDEX `keys_content`(`keys_content`) USING BTREE,
  INDEX `activity_id`(`activity_id`) USING BTREE,
  CONSTRAINT `keys_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`activity_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of keys
-- ----------------------------
INSERT INTO `keys` VALUES (1, 1, '0x508e', 0);
INSERT INTO `keys` VALUES (2, 1, '0x7906', 0);
INSERT INTO `keys` VALUES (3, 1, '0x2e68', 0);
INSERT INTO `keys` VALUES (4, 1, '0x13054', 0);
INSERT INTO `keys` VALUES (5, 1, '0xe0d7', 0);
INSERT INTO `keys` VALUES (6, 1, '0x11e6d', 0);
INSERT INTO `keys` VALUES (7, 1, '0x12e41', 0);
INSERT INTO `keys` VALUES (8, 1, '0xc527', 0);
INSERT INTO `keys` VALUES (9, 1, '0x11689', 0);
INSERT INTO `keys` VALUES (10, 1, '0x819c', 0);
INSERT INTO `keys` VALUES (11, 1, '0x965', 0);
INSERT INTO `keys` VALUES (12, 1, '0x16c4e', 0);
INSERT INTO `keys` VALUES (13, 1, '0x68a8', 0);
INSERT INTO `keys` VALUES (14, 1, '0x178c4', 0);
INSERT INTO `keys` VALUES (15, 1, '0x113e0', 0);
INSERT INTO `keys` VALUES (16, 1, '0x132d0', 0);
INSERT INTO `keys` VALUES (17, 1, '0xb164', 0);
INSERT INTO `keys` VALUES (18, 1, '0x4e01', 0);
INSERT INTO `keys` VALUES (19, 1, '0xb592', 0);
INSERT INTO `keys` VALUES (20, 1, '0x13489', 0);
INSERT INTO `keys` VALUES (21, 1, '0x3fc5', 0);
INSERT INTO `keys` VALUES (22, 1, '0x11137', 0);
INSERT INTO `keys` VALUES (23, 1, '0x4bf4', 0);
INSERT INTO `keys` VALUES (24, 1, '0x101cd', 0);
INSERT INTO `keys` VALUES (25, 1, '0x15419', 0);
INSERT INTO `keys` VALUES (26, 1, '0xe7f', 0);
INSERT INTO `keys` VALUES (27, 1, '0x4690', 0);
INSERT INTO `keys` VALUES (28, 1, '0x15940', 0);
INSERT INTO `keys` VALUES (29, 1, '0xf745', 0);
INSERT INTO `keys` VALUES (30, 1, '0x699b', 0);
INSERT INTO `keys` VALUES (31, 1, '0xb2ff', 2);
INSERT INTO `keys` VALUES (32, 1, '0xb026', 0);
INSERT INTO `keys` VALUES (33, 1, '0x4a6d', 0);
INSERT INTO `keys` VALUES (34, 1, '0x477f', 0);
INSERT INTO `keys` VALUES (35, 1, '0x2a6a', 0);
INSERT INTO `keys` VALUES (36, 1, '0xda54', 0);
INSERT INTO `keys` VALUES (37, 1, '0x16e14', 0);
INSERT INTO `keys` VALUES (38, 1, '0xafb1', 0);
INSERT INTO `keys` VALUES (39, 1, '0x4ae2', 0);
INSERT INTO `keys` VALUES (40, 1, '0x8aa8', 0);
INSERT INTO `keys` VALUES (41, 1, '0xb6aa', 0);
INSERT INTO `keys` VALUES (42, 1, '0xf016', 0);
INSERT INTO `keys` VALUES (43, 1, '0x42e9', 0);
INSERT INTO `keys` VALUES (44, 1, '0x4150', 0);
INSERT INTO `keys` VALUES (45, 1, '0x343c', 0);
INSERT INTO `keys` VALUES (46, 1, '0x3a4c', 0);
INSERT INTO `keys` VALUES (47, 1, '0x15e3d', 0);
INSERT INTO `keys` VALUES (48, 1, '0x94d9', 0);
INSERT INTO `keys` VALUES (49, 1, '0x12cd8', 0);
INSERT INTO `keys` VALUES (50, 1, '0x9c2a', 0);
INSERT INTO `keys` VALUES (51, 2, '0x8dab', 0);
INSERT INTO `keys` VALUES (52, 2, '0x7e2c', 0);
INSERT INTO `keys` VALUES (53, 2, '0x10962', 0);
INSERT INTO `keys` VALUES (54, 2, '0xd87', 0);
INSERT INTO `keys` VALUES (55, 2, '0x8f4f', 0);
INSERT INTO `keys` VALUES (56, 2, '0x4a8a', 0);
INSERT INTO `keys` VALUES (57, 2, '0xcec2', 0);
INSERT INTO `keys` VALUES (58, 2, '0xca2f', 0);
INSERT INTO `keys` VALUES (59, 2, '0x5db', 0);
INSERT INTO `keys` VALUES (60, 2, '0x636', 0);
INSERT INTO `keys` VALUES (61, 2, '0x14f85', 0);
INSERT INTO `keys` VALUES (62, 2, '0x171d5', 0);
INSERT INTO `keys` VALUES (63, 2, '0x135ee', 0);
INSERT INTO `keys` VALUES (64, 2, '0x15654', 0);
INSERT INTO `keys` VALUES (65, 2, '0x182a8', 0);
INSERT INTO `keys` VALUES (66, 2, '0xf557', 0);
INSERT INTO `keys` VALUES (67, 2, '0x17d02', 0);
INSERT INTO `keys` VALUES (68, 2, '0x140f2', 0);
INSERT INTO `keys` VALUES (69, 2, '0x29f4', 0);
INSERT INTO `keys` VALUES (70, 2, '0x15bca', 0);
INSERT INTO `keys` VALUES (71, 2, '0xaff0', 0);
INSERT INTO `keys` VALUES (72, 2, '0xe500', 0);
INSERT INTO `keys` VALUES (73, 2, '0xf36', 2);
INSERT INTO `keys` VALUES (74, 2, '0x9b32', 0);
INSERT INTO `keys` VALUES (75, 2, '0x3347', 0);
INSERT INTO `keys` VALUES (76, 2, '0x35bc', 0);
INSERT INTO `keys` VALUES (77, 2, '0xf64e', 0);
INSERT INTO `keys` VALUES (78, 2, '0x2598', 0);
INSERT INTO `keys` VALUES (79, 2, '0xbd3a', 0);
INSERT INTO `keys` VALUES (80, 2, '0x72a4', 0);
INSERT INTO `keys` VALUES (81, 2, '0x9955', 0);
INSERT INTO `keys` VALUES (82, 2, '0x12a68', 0);
INSERT INTO `keys` VALUES (83, 2, '0x169f0', 0);
INSERT INTO `keys` VALUES (84, 2, '0xfa04', 0);
INSERT INTO `keys` VALUES (85, 2, '0x65b7', 0);
INSERT INTO `keys` VALUES (86, 2, '0xf0c6', 0);
INSERT INTO `keys` VALUES (87, 2, '0xe17d', 0);
INSERT INTO `keys` VALUES (88, 2, '0xce19', 0);
INSERT INTO `keys` VALUES (89, 2, '0x122fb', 0);
INSERT INTO `keys` VALUES (90, 2, '0x17cb2', 0);
INSERT INTO `keys` VALUES (91, 2, '0x173e', 0);
INSERT INTO `keys` VALUES (92, 2, '0x1e69', 0);
INSERT INTO `keys` VALUES (93, 2, '0x176ab', 0);
INSERT INTO `keys` VALUES (94, 2, '0x6cb3', 0);
INSERT INTO `keys` VALUES (95, 2, '0x5ab', 0);
INSERT INTO `keys` VALUES (96, 2, '0x8c0c', 0);
INSERT INTO `keys` VALUES (97, 2, '0xda2f', 0);
INSERT INTO `keys` VALUES (98, 2, '0x4469', 0);
INSERT INTO `keys` VALUES (99, 2, '0x181e9', 0);
INSERT INTO `keys` VALUES (100, 2, '0x15347', 0);
INSERT INTO `keys` VALUES (151, 4, '0xf153', 0);
INSERT INTO `keys` VALUES (152, 4, '0xc4a0', 0);
INSERT INTO `keys` VALUES (153, 4, '0xf5aa', 0);
INSERT INTO `keys` VALUES (154, 4, '0x3180', 0);
INSERT INTO `keys` VALUES (155, 4, '0x42ca', 0);
INSERT INTO `keys` VALUES (156, 4, '0xd85d', 0);
INSERT INTO `keys` VALUES (157, 4, '0x17d0b', 0);
INSERT INTO `keys` VALUES (158, 4, '0x5a91', 0);
INSERT INTO `keys` VALUES (159, 4, '0xfdb3', 0);
INSERT INTO `keys` VALUES (160, 4, '0x11951', 0);
INSERT INTO `keys` VALUES (161, 4, '0x2c11', 0);
INSERT INTO `keys` VALUES (162, 4, '0xa359', 0);
INSERT INTO `keys` VALUES (163, 4, '0x121e3', 0);
INSERT INTO `keys` VALUES (164, 4, '0xf24c', 0);
INSERT INTO `keys` VALUES (165, 4, '0x1534d', 0);
INSERT INTO `keys` VALUES (166, 4, '0x10f84', 0);
INSERT INTO `keys` VALUES (167, 4, '0x6a8e', 0);
INSERT INTO `keys` VALUES (168, 4, '0x13503', 0);
INSERT INTO `keys` VALUES (169, 4, '0xebab', 0);
INSERT INTO `keys` VALUES (170, 4, '0x3d18', 0);
INSERT INTO `keys` VALUES (171, 4, '0xc5ef', 0);
INSERT INTO `keys` VALUES (172, 4, '0x1198', 0);
INSERT INTO `keys` VALUES (173, 4, '0xff00', 0);
INSERT INTO `keys` VALUES (174, 4, '0xb1c9', 0);
INSERT INTO `keys` VALUES (175, 4, '0x4e96', 0);
INSERT INTO `keys` VALUES (176, 4, '0x1356', 0);
INSERT INTO `keys` VALUES (177, 4, '0x153e0', 0);
INSERT INTO `keys` VALUES (178, 4, '0x16d30', 0);
INSERT INTO `keys` VALUES (179, 4, '0x7cd1', 0);
INSERT INTO `keys` VALUES (180, 4, '0x1476d', 0);
INSERT INTO `keys` VALUES (181, 4, '0x3b55', 0);
INSERT INTO `keys` VALUES (182, 4, '0x17c1', 0);
INSERT INTO `keys` VALUES (183, 4, '0x1571b', 0);
INSERT INTO `keys` VALUES (184, 4, '0x1196e', 0);
INSERT INTO `keys` VALUES (185, 4, '0xca72', 0);
INSERT INTO `keys` VALUES (186, 4, '0x12c45', 0);
INSERT INTO `keys` VALUES (187, 4, '0x45ae', 0);
INSERT INTO `keys` VALUES (188, 4, '0x1b83', 0);
INSERT INTO `keys` VALUES (189, 4, '0x1848d', 0);
INSERT INTO `keys` VALUES (190, 4, '0x181df', 0);
INSERT INTO `keys` VALUES (191, 4, '0x1156', 0);
INSERT INTO `keys` VALUES (192, 4, '0x16764', 0);
INSERT INTO `keys` VALUES (193, 4, '0x10837', 0);
INSERT INTO `keys` VALUES (194, 4, '0xd3b3', 0);
INSERT INTO `keys` VALUES (195, 4, '0x1663b', 0);
INSERT INTO `keys` VALUES (196, 4, '0x9ee0', 0);
INSERT INTO `keys` VALUES (197, 4, '0x10db', 0);
INSERT INTO `keys` VALUES (198, 4, '0xdf2e', 0);
INSERT INTO `keys` VALUES (199, 4, '0x47f6', 1);
INSERT INTO `keys` VALUES (200, 4, '0x776b', 0);

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav`  (
  `nav_id` int NOT NULL AUTO_INCREMENT,
  `nav_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '导航图标',
  `nav_img_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '图标链接',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`nav_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES (1, '/tickets/img/nav_default.png', 'https://cacode.ren', '2021-02-22 09:08:23', '2021-02-26 13:43:30');
INSERT INTO `nav` VALUES (2, '/tickets/img/nav_default.png', 'https://cacode.ren', '2021-02-22 09:08:23', '2021-02-26 13:43:33');

-- ----------------------------
-- Table structure for participate
-- ----------------------------
DROP TABLE IF EXISTS `participate`;
CREATE TABLE `participate`  (
  `participate_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `activity_id` int NULL DEFAULT NULL COMMENT '活动ID',
  `status` int NULL DEFAULT 0 COMMENT '0已预定1正在参与2过期',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`participate_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `activity_id`(`activity_id`) USING BTREE,
  CONSTRAINT `participate_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `participate_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`activity_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of participate
-- ----------------------------
INSERT INTO `participate` VALUES (1, 1, 1, 2, '2021-02-25 11:56:43', '2021-02-25 12:06:55');

-- ----------------------------
-- Table structure for sms
-- ----------------------------
DROP TABLE IF EXISTS `sms`;
CREATE TABLE `sms`  (
  `sms_id` int NOT NULL AUTO_INCREMENT,
  `sms_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`sms_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sms
-- ----------------------------
INSERT INTO `sms` VALUES (1, '这是测试消息1', '2021-02-26 01:47:30');
INSERT INTO `sms` VALUES (2, '这是测试消息2', '2021-02-26 01:47:35');
INSERT INTO `sms` VALUES (3, '这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3这是测试消息3', '2021-02-26 02:23:28');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT '索引',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '姓名',
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码',
  `user_college` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '专业',
  `user_college_number` int NULL DEFAULT NULL COMMENT '年级',
  `user_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像地址',
  `user_sex` int NULL DEFAULT 0 COMMENT '0男1女',
  `user_number` int NULL DEFAULT NULL COMMENT '学号',
  `user_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '状态',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `user_credit` int NULL DEFAULT 0 COMMENT '学分',
  `user_credibility` int NULL DEFAULT 100 COMMENT '信誉分',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'CACode', '123', '计算机', 1, '/tickets/img/2021022716153743965.jpg', 0, 123456789, '0', '2021-02-22 06:12:30', '2021-02-27 22:07:00', 0, 999985);

SET FOREIGN_KEY_CHECKS = 1;

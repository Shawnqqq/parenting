/*
 Navicat Premium Data Transfer

 Source Server         : 111
 Source Server Type    : MySQL
 Source Server Version : 100316
 Source Host           : 127.0.0.1:3306
 Source Schema         : parenting

 Target Server Type    : MySQL
 Target Server Version : 100316
 File Encoding         : 65001

 Date: 26/10/2019 15:17:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT current_timestamp(0),
  `praise` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `collect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of answer
-- ----------------------------
INSERT INTO `answer` VALUES (1, '2', '2', '<p> 新鲜是浪漫的天赋，点缀夜晚的礼物，忽远忽近的温度，爱恰到好处</p>\n\n', '2019-10-25 16:45:26', '0', '0');
INSERT INTO `answer` VALUES (2, '3', '2', '<p> 拿着号码牌 等在心动月台，或许我还没有明白，她的脚步早就慢下来不管，应不应该</p>\n', '2019-10-25 16:46:35', '0', '0');

-- ----------------------------
-- Table structure for compilation
-- ----------------------------
DROP TABLE IF EXISTS `compilation`;
CREATE TABLE `compilation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES (1, '13112808045', '112233', '八仔');
INSERT INTO `manager` VALUES (4, '14111111111', '123456', '阿信');

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `answer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `create_time` timestamp(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sort
-- ----------------------------
DROP TABLE IF EXISTS `sort`;
CREATE TABLE `sort`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sort
-- ----------------------------
INSERT INTO `sort` VALUES (1, '喂奶百科');
INSERT INTO `sort` VALUES (2, '养育攻略');
INSERT INTO `sort` VALUES (9, '疾病护理');
INSERT INTO `sort` VALUES (11, '养娃趣事');
INSERT INTO `sort` VALUES (12, '日常护理');
INSERT INTO `sort` VALUES (13, '好物推荐');

-- ----------------------------
-- Table structure for swiper
-- ----------------------------
DROP TABLE IF EXISTS `swiper`;
CREATE TABLE `swiper`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for topic
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sort_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `pv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `follow` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `answer_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '0',
  `show_answer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES (1, '11', '暑假带宝宝出游得准备哪写东西？', '从怀孕到生产，再到养娃，再渡过初为人母的这一年多时间后,很多妈妈蠢蠢欲动，想要带娃出去走走。现在娃还小，可以出去吗。如果要出去，需要准备哪些东西呢？有出行经验的妈妈可以在下方回复，和新手妈妈们聊一聊夏天带娃的那些事儿...', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (2, '12', '天气越来越热了，你都是怎么给宝宝穿搭衣服的呢？', '夏天应该怎么给宝宝穿衣服，才能让宝宝不热还舒适呢？', '0', '0', '2', NULL);
INSERT INTO `topic` VALUES (3, '13', '你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？', '你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？你们给宝宝买了哪种餐椅？你觉得哪种餐椅更好用？\n', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (4, '13', '在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？', '在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？在不知道宝宝性别的时候，给宝宝准备哪写东西以后不会浪费？', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (6, '2', '孕期为了娃健康 这些事准爸爸别做', '怀孕期间的禁忌有很多，不光是孕妇本身要注意，准爸爸需要注意的地方也有很多，以下就是孕期准爸爸不宜做的几件事。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (7, '11', '你家娃啥性格 看睡姿就知道了', '很多家长都好奇自己家的娃长大了是啥性格，其实性格跟很多因素有关，跟宝宝的睡姿也是有关系的，所以想知道自己娃什么性格，看宝宝睡姿就行了。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (8, '11', '清明节孕妇可以出门吗 这些禁忌要知道', '马上就要到清明节了，清明节是我国的传统节日，有很多的习俗和禁忌，那么清明节孕妇可以出门吗？', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (9, '2', '六一儿童节给孩子选玩具 要注意安全第一', '今天是一年一度的六一儿童节，爸爸妈妈有没有想好送孩子什么呢？很多家长都想要送学龄前儿童玩具，不过要选择什么样的玩具却成了一个难题。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (10, '9', '陕西某幼儿园给孩子长期服用病毒灵', '孩子身体好好的，幼儿园老师却给他们分发处方药“病毒灵”，所有孩子集体吃。陕西西安一家幼儿园未告知家长便私自给全园孩子服药，引起家长的强烈不满，家长们更担心吃药会对孩子产生副作用。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (11, '9', '专家回应疑似疫苗致婴儿死亡6大质疑', '根据中国疾控中心提供的最新数据，从2000年到今年12月份，接种乙肝疫苗后死亡的疑似异常反应病例已上报188例。其中，最终确定为疫苗异常反应的18例，近年每年有四五例。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (12, '2', '单独二胎最新消息 浙江舟山启动单独二孩政策', '单独二胎最新消息，浙江舟山特批启动单独二孩政策。特批政策从2013年11月 19日起实施。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (13, '9', '恒天然毒奶粉乌龙 污染细菌并非肉毒杆菌', '恒天然奶粉最新事件，恒天然毒奶粉乌龙。8月初发生的恒天然奶清蛋白粉中检测出的并非肉毒杆菌，不会产生致命毒素。', '0', '0', '0', NULL);
INSERT INTO `topic` VALUES (14, '13', '多1家品牌童装纤维量指标不合格 涉及丽婴房等品牌', '近日，儿童服装屡屡被曝出质量问题，涉及丽婴房等多个知名品牌。据了解，相关部门根据服装的pH值、耐摩擦色牢度、耐洗色牢度、纤维含量及产品标识标志等项目查出，部分品牌童装存在有害物质含量超标、 值和pH纤维含量不合格等问题。', '0', '0', '0', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '1' COMMENT '1为男，2为女',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT '1' COMMENT '1为未孕，2为怀孕，3为有宝贝',
  `babe_age` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'siren', NULL, '2', 'balabala', '1', NULL);
INSERT INTO `user` VALUES (2, 'toki', NULL, '1', 'adadadada', '2', NULL);
INSERT INTO `user` VALUES (3, 'miko', NULL, '2', 'dasdasdasd', '3', NULL);
INSERT INTO `user` VALUES (4, 'alen', NULL, '1', 'dasdasd', '3', NULL);
INSERT INTO `user` VALUES (5, 'taylor', NULL, '2', 'aaaaaa', '1', NULL);
INSERT INTO `user` VALUES (6, 'lakens', NULL, '2', '2312312312', '2', NULL);
INSERT INTO `user` VALUES (7, 'askie', NULL, '2', '13131', '2', NULL);

-- ----------------------------
-- Table structure for user_answer
-- ----------------------------
DROP TABLE IF EXISTS `user_answer`;
CREATE TABLE `user_answer`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `answer_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_topic
-- ----------------------------
DROP TABLE IF EXISTS `user_topic`;
CREATE TABLE `user_topic`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `topic_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;

var express = require('express');
var router = express.Router();

const middleAuth = require('../middleauth/middleAuth')
const authController =require('../controllers/auth')
const managerController = require('../controllers/manager')
const userController = require('../controllers/user')
const compilationController = require('../controllers/compilation')
const sortController = require('../controllers/sort')
const topicController = require('../controllers/topic')


// 登录
router.post('/auth/login',authController.login)
// 管理员 接口
router.get('/manager',middleAuth,managerController.all);
router.get('/manager/:id',middleAuth,managerController.single);
router.post('/manager',middleAuth,managerController.insert);
router.put('/manager/:id',middleAuth,managerController.update);
router.delete('/manager/:id',middleAuth,managerController.delete);
// 用户 接口
router.get('/user',middleAuth,userController.all);
router.post('/user',middleAuth,userController.insert);
router.get('/user/:id',middleAuth,userController.single);
router.put('/user/:id',middleAuth,userController.update);
router.delete('/user/:id',middleAuth,userController.delete);
// 分类 接口
router.post('/sort',middleAuth,sortController.insert);
router.put('/sort/:id',middleAuth,sortController.update);
router.delete('/sort/:id',middleAuth,sortController.delete);
router.get('/sort',middleAuth,sortController.all);
router.get('/sort/:id',middleAuth,sortController.single);
// 话题 接口
router.get('/topic',middleAuth,topicController.all);
router.get('/topic/:id',middleAuth,topicController.single);
router.post('/topic',middleAuth,topicController.insert);
router.put('/topic/:id',middleAuth,topicController.update);
router.delete('/topic/:id',middleAuth,topicController.delete);

module.exports = router;

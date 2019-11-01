const topicModels = require('../models/topic')
const answerModels = require('../models/answer')
const replyModels = require('../models/reply')
const user_topicModels = require('../models/user_topic')
const user_answerModels = require('../models/user_answer')

const wxAnswerController = {
  praise:async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      await user_answerModels.insert({user_id,answer_id,type:1})
      await answerModels.where({id:answer_id}).increment('praise',1)
      res.json({
        code:200,
        message:'点赞成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  },
  unpraise: async function(req,res,next){
    let user_id = req.body.user_id
    let answer_id  = req.body.answer_id
    try{
      let id = await user_answerModels.where({user_id,answer_id,type:1})
      await user_answerModels.delete(id[0].id)
      await answerModels.where({id:answer_id}).decrement('praise',1)
      res.json({
        code:200,
        message:'取消成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'服务器错误'
      })
    }
  }
}

module.exports = wxAnswerController;
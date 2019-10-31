const topicModels = require('../models/topic')
const answerModels = require('../models/answer')
const replyModels = require('../models/reply')

const wxTopicController={
  all:async function(req,res,next){
    let nowPage = Number(req.query.nowPage) || 0
    let id = Number(req.query.id)
    try{
      let topic
      if(id === 0 ){
        topic = await topicModels.all()
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
        .offset(nowPage)
        .limit(10)
      }else{
        topic = await topicModels.where({'topic.category_id':id})
        .leftJoin('answer','topic.show_answer','answer.id')
        .column('topic.id','topic.title','topic.follow','topic.answer_num',
        'answer.user_id','answer.text')
        .leftJoin('user','answer.user_id','user.id')
        .column('user.nick_name','user.avatar')
        .offset(nowPage)
        .limit(10)
      }
      res.json({
        code:200,
        data:topic,
        pages:nowPage
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找错误'
      })
    }
  },
  single:async function(req,res,next){
    let nowPage = Number(req.query.nowPage) || 0
    let topic_id = req.params.id
    try{
      let topic = await topicModels.where({'topic.id':topic_id})
        .leftJoin('category','topic.category_id','category.id')
        .column('topic.id','category.name',{'category_id':'category.id'},'topic.title',
        'topic.text','topic.pv','topic.follow','topic.answer_num')
      let answer = await answerModels.where({'answer.topic_id':topic_id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','user.avatar','answer.text','answer.praise')
        .offset(nowPage)
        .limit(10)
      let answer_id = answer.map(data=>{return data.id})
      let reply = await replyModels.whereIn('answer_id',answer_id)
      
      let answer_val = answer.map(data=>{
        let replyTotal = 0
        reply.forEach(arr =>{
          if(arr.answer_id == data.id){
            replyTotal += 1
          }
        })
        data.replyTotal = replyTotal
        return data
      })
      res.json({
        code:200,
        topic:topic[0],
        answer:answer_val
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找错误'
      })
    }
  }
}

module.exports = wxTopicController;
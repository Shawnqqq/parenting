const topicModels = require('../models/topic')

const topicController = {
  insert: async function(req,res,next){
    let title = req.body.title
    let sort_id = req.body.sort_id
    let text = req.body.text
    if(!title || !sort_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }

    try{
      await topicModels.insert({title,sort_id,text})
      res.json({
        code:200,
        message:'增加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'增加失败'
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id
    let title = req.body.title
    let sort_id = req.body.sort_id
    let text = req.body.text
    if(!title || !sort_id || !text){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await topicModels.update(id,{title,sort_id,text})
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"修改失败"
      })
    }
  },
  all: async function(req,res,next){
    try{
      let pageSize = req.query.pageSize || 10 // 显示每页数量
      let nowPage= req.query.nowPage || 1  // 显示当前页数
      let offset = (nowPage-1)*pageSize   // 从多少条开始拿
      let topic = await topicModels.all()
        .leftJoin('sort','topic.sort_id','sort.id')
        .column('topic.id','topic.title','topic.text','sort.name',
          'topic.pv','topic.follow','topic.answer_num')
        .offset(offset)
        .limit(pageSize)
      let totals = await topicModels.all()
      let total = totals.length
      res.json({
        code:200,
        data:topic,
        total:total
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找失败'
      })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id
    try{
      await topicModels.delete(id)
      res.json({
        code:200,
        message:"删除成功"
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'删除失败'
      })
    }
  },
  single: async function(req,res,next){
    let id = req.params.id
    try{
      let topic = await topicModels.single(id);
      res.json({
        code:200,
        data:topic[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'查找失败'
      })
    }
  }
}

module.exports = topicController;
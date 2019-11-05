const columnModels = require('../models/column')
const column_topicModels = require('../models/column_topic')
const topicModels = require('../models/topic')

const columnController ={
  insert: async function(req,res,next){
    let title = req.body.title
    let desc = req.body.desc
    let imageUrl = req.body.imageUrl;

    if(!title || !desc || !imageUrl){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await columnModels.insert({title,desc,image_url:imageUrl})
      res.json({
        code:200,
        message:'添加成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'添加失败'
      })
    }
  },
  all:async function(req,res,next){
    try{
      let data = await columnModels.all()
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  single:async function(req,res,next){
    let id = req.params.id
    try{
      let data = await columnModels.single(id)
      res.json({
        code:200,
        data:data[0]
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id
    let params = {}
    let title = req.body.title
    let desc = req.body.desc
    let image_url = req.body.image_url
    if(title)params.title = title
    if(desc)params.desc = desc
    if(image_url)params.image_url = image_url
    try{
      await columnModels.update(id,params)
      res.json({
        code:200,
        message:'修改成功'
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:'修改失败'
      })
    }
  },
  selected:async function(req,res,next){
    let id = req.params.id
    try{
      let topic_id = await column_topicModels.where({topic_id:id})
      let data = await topicModels.whereIn('topic.id',topic_id)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  },
  UnSelected:async function(req,res,next){
    let id = req.params.id
    let pageSize = req.query.pageSize || 10 // 显示每页数量
    let nowPage= req.query.nowPage || 1  // 显示当前页数
    let offset = (nowPage-1)*pageSize   // 从多少条开始拿
    try{
      let topic_id = await column_topicModels.where({topic_id:id})  
      let data = await topicModels.whereNotIn('topic.id',topic_id)
        .leftJoin('category','topic.category_id','category.id')
        .column({'topic_id':'topic.id'},{'category_id':'category.id'},'category.name','topic.title',
        'topic.pv','topic.follow','topic.answer_num')
        .offset(offset)
        .limit(pageSize)
      
      res.json({
        code:200,
        data
      })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  }
}

module.exports = columnController;
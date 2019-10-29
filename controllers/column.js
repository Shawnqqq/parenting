const columnModels = require('../models/column')

const columnController ={
  insert: async function(req,res,next){
    let title = req.body.title
    let desc = req.body.desc
    let image_url = req.body.image_url;

    if(!title || !desc || !image_url){
      res.json({
        code:0,
        message:'缺少参数'
      })
      return
    }
    try{
      await columnModels.insert({title,desc,image_url})
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
  




  

}

module.exports = columnController;
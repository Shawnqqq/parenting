const answerModels = require('../models/answer')
const {formatDate} = require('../utils/formatDate');

const answerController ={
  // insert: async function(req,res,next){
  //   let name = req.body.name
  //   if(!name){
  //     res.json({
  //       code:0,
  //       message:'缺少参数'
  //     })
  //     return
  //   }
  //   try{
  //     await sortModels.insert({name})
  //     res.json({
  //       code:200,
  //       message:'添加成功'
  //     })
  //   }catch(err){
  //     console.log(err)
  //     res.json({
  //       code:0,
  //       message:'添加失败'
  //     })
  //   }
  // },
  // update: async function(req,res,next){
  //   let id = req.params.id
  //   let name = req.body.name
  //   if(!name){
  //     res.json({
  //       code:0,
  //       message:'缺少参数'
  //     })
  //     return
  //   }
  //   try{
  //     await sortModels.update(id,{name})
  //     res.json({
  //       code:200,
  //       message:'修改成功'
  //     })
  //   }catch(err){
  //     console.log(err)
  //     res.json({
  //       code:0,
  //       message:'修改失败'
  //     })
  //   }
  // },
  // delete:async function(req,res,next){
  //   let id = req.params.id
  //   try{
  //     await sortModels.delete(id)
  //     res.json({
  //       code:200,
  //       message:'删除成功'
  //     })
  //   }catch(err){
  //     console.log(err)
  //     res.json({
  //       code:0,
  //       message:'删除失败'
  //     })
  //   }
  // },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      let answer = await answerModels.where({topic_id:id})
        .leftJoin('user','answer.user_id','user.id')
        .column('answer.id','user.nick_name','answer.text','answer.create_time',
        'answer.praise','answer.collect')
        answer.forEach(data=>{
          data.create_time = formatDate(data.create_time)
        })

      res.json({
        code:200,
        data:answer
      })
    }
    catch(err){
      console.log(err)
      res.json({
          code:0,
          message:'查找失败'
      })
    }
  }
}

module.exports = answerController;
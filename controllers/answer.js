const answerModels = require('../models/answer')
const {formatDate} = require('../utils/formatDate');

const answerController ={
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
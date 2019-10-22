const userModels = require('../models/user')

const userController ={
    insert: async function(req,res,next){
        let nick_name = req.body.nick_name;
        let sex = req.body.sex;
        let avatar = req.body.avatar;
        // if(!nick_name || !sex || !avatar){
        //     res.json({
        //         code:0, 
        //         message:'缺少参数'
        //     })
        //     return
        // }
        try{
          await userModels.insert({nick_name,sex,avatar})
          res.json({
              code:200,
              massage: '添加成功'
          })
        }
        catch(err){
          console.log(err)
          res.json({
              code:0,
              message:'添加失败'
          })
        }
    },
    single: async function(req,res,next){
        let id = req.params.id;
        try{
            let singles = await userModels.single(id)
            let single = singles[0]
            res.json({
                code:200,
                data:single,
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'查找失败'
            })
        }
    },
    all: async function(req,res,next){
        try{
            const all = await userModels.all()
            res.json({
                code:200,
                data:all,
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'查找失败'
            })
        }
    },
    update: async function(req,res,next){
        let nick_name = req.body.nick_name;
        let sex = req.body.sex;
        let avatar = req.body.avatar;
        let id = req.params.id;
        // if(!nick_name || !sex || !avatar){
        //     res.json({
        //         code:0, 
        //         massage:'缺少参数'
        //     })
        //     return
        // }
        try{
            await userModels.update(id,{nick_name,sex,avatar})
            res.json({
                code:200,
                message:'修改成功'
            })
        }
        catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'修改失败'
            })
        }
    },
    delete: async function(req,res,next){
        let id = req.params.id
        try{
            await userModels.delete(id)
            res.json({
                code:200,
                message:'删除成功'
            })
        }catch(err){
            console.log(err)
            res.json({
                code:0,
                message:'删除失败'
            })
        }
    }
}
module.exports = userController;
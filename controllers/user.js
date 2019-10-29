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
            let totals = await userModels.all()
            let total = totals.length
            let females = await userModels.where({sex:2})
            let female =  females.length
            let pregnants = await userModels.where({state:2})
            let pregnant =  pregnants.length
            let breds = await userModels.where({state:3})
            let bred = breds.length
            res.json({
                code:200,
                data:{
                    total,female,pregnant,bred
                }
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
    user: async function(req,res,next){
        try{
            let pageSize = req.query.pageSize || 10 // 显示每页数量
            let nowPage= req.query.nowPage || 1  // 显示当前页数
            let offset = (nowPage-1)*pageSize   // 从多少条开始拿

            let user = await userModels.all()
                .offset(offset)
                .limit(pageSize)

            let totals = await userModels.all()
            let total = totals.length
            res.json({
                code:200,
                data:user,
                total:total
            })
        }catch(err){
            console.log(err)
            res.json({
                code:200,
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
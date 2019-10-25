const knex = require("./knex");

class Base {
    constructor(props){
        this.table = props;
    }
    //添加用户
    insert(params){
        return knex(this.table).insert(params);
    }
    //查找用户
    single(id){
        return knex(this.table).where('id','=',id);
    }
    //全部管理员
    all(){
        return knex(this.table).select();
    }
    //修改用户 or 删除用户
    update(id,params){
        return knex(this.table).where('id','=',id).update(params);
    }
    //全部用户
    whole(){
        return knex(this.table)
    }
    where(params){
        return knex(this.table).where(params)
    }
    //查找用户的某个数据
    delete(id){
        return knex(this.table).where('id','=',id).del()
    }
    show(params) {
        return knex(this.table).where(params).select();
    }
    //筛选用户
    count(params,dateFilter={}){
        if(dateFilter.column){
            return knex(this.table).where(params)
                .whereBetween(dateFilter.column,[`${dateFilter.startAt} 00:00`, `${dateFilter.endAt} 23:59`])
                .count('id as total');
        }else{
            return knex(this.table).where(params).count('id as total')
        }
    }
    //数据分页
    pagination(pageSize=20,nowPage=1,params={},dateFilter={}){
        let offset = (nowPage-1)*pageSize;
        if(dateFilter.column) {
            return knex(this.table)
              .where(params)
              .offset(offset)
              .limit(pageSize)
              .whereBetween(dateFilter.column,[`${dateFilter.startAt} 00:00`, `${dateFilter.endAt} 23:59`])
              .select()
        }else{
            return knex(this.table)
            .where(params)
            .offset(offset)
            .limit(pageSize)
            .select()
        }
    }
    // 数据分类与筛选
    sortPagination(pageSize,offset,sort){
        if(sort[0]){
            return knex(this.table)
                .where({sort_id:sort[0].id})
                .leftJoin('sort','topic.sort_id','sort.id')
                .column('topic.id','topic.title','topic.text','sort.name',
                  'topic.pv','topic.follow','topic.answer_num')
                .offset(offset)
                .limit(pageSize)
        }else{
            return null
        }
    }
    // 总数
    sortTotal(sort){
        if(sort[0]){
            return knex(this.table)
                .where({sort_id:sort[0].id})
        }else{
            return 0
        }
    }
}
module.exports = Base
const Base = require('./base')

class tableModels extends Base {
    constructor(props = 'table'){
        super(props);
    }
}


module.exports = new tableModels();
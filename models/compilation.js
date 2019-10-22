const Base = require('./base')

class compilationModels extends Base {
    constructor(props = 'compilation'){
        super(props);
    }
}


module.exports = new compilationModels();
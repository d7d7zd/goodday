var data = require('./data.js')

exports.index =function (req, res) {
    data.index('SELECT * FROM user_info', function(rels){
        var good = [1, 2,3, 4]
        res.render('index',{content: rels})
    })
}
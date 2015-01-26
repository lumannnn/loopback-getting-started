var bodyParser = require('body-parser');
var ds = require('../datasources');
var CoffeeShop = require('../../common/models/coffee-shop');

function handler(data) {
    console.log('handler', data);
    var CoffeeShop = ds.buildModelFromInstance('CoffeeShop', data, {idInjection: true});
    CoffeeShop.create(data, function(err) {
        console.log('handler: error', err);
    });
}

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
    app.post('/', function(req, res) {
        var body = req.body;
        handler(body);
        res.send('pong');
    });
};


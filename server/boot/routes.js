var bodyParser = require('body-parser');

function handler(app, data) {
    app.models.CoffeeShop.create(data, function(err) {
        if (err) {
            console.log('handler: error', err);
        }
    });
}

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));
    app.post('/', function(req, res) {
        var body = req.body;
        handler(app, body);
        res.send('New CoffeeShop has been safed!');
    });
};


let $ = require('jquery');
let str = require('./constant');
require ('./less');
let App = function() {
    console.log(str);
    $('body').html(str);
};

let app = new App();

app.get = function(){};

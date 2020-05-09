var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping-cart", {
  useNewUrlParser: true
});


var products = [
    new Product({
            imagePath: 'https://images.macrumors.com/article-new/2019/09/iphone11prolineup.jpg',
            title : 'iPhone 11 Pro',
            description : 'A great phone!!!!',
        price : 1200
        }), 
    new Product({
            imagePath: 'https://static.turbosquid.com/Preview/2019/07/24__19_52_14/2mainturbo.jpg2618F9CE-61F4-4675-A3C7-5F0EF24EC55FZoom.jpg',
            title : 'Samsung Galaxy Note 10 Plus',
            description : 'A great phone!!!!',
            price : 1150
        
         }), 
    new Product({
            imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71iO2R%2BCLjL._AC_SX522_.jpg',
            title : 'iPhone 11 128BG',
            description : 'A great phone!!!!',
            price : 1000
                
        }),
];      
var done = 0;
for (var i = 0; i < products.length ; i++ ){
    products[i].save( function(err,resutl) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

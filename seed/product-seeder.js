var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products=[
  new Product({
  imgPath:'http://www.dhresource.com/260x260s/f2-albu-g5-M00-A9-B7-rBVaJFhBdDyAT6gZAAE749H091w506.jpg/a-new-explosion-of-temperament-sexy-bride.jpg',
  title:'This is girls shopping place !!!' ,
  description:  "It's Awsome and beautiful !!!!",
  price:100
}),
new Product({
imgPath:'https://s-media-cache-ak0.pinimg.com/736x/ca/73/ff/ca73ffe4cd19321d09ff03502abf651f.jpg',
title:'This is girls shopping place !!!' ,
description:  "It's Awsome and pretty!!!!",
price:200
}),
new Product({
imgPath:'https://s-media-cache-ak0.pinimg.com/736x/3e/e4/86/3ee4867abed6fc3450a8dcf314f4c9af.jpg',
title:'This is girls shopping place !!!' ,
description:  "It's Awsome and cheap!!!!",
price:300
}),
new Product({
imgPath:'https://ss.dresswe.com/images/product/c/7921/12211/12211541_1.jpeg',
title:'This is girls shopping place !!!' ,
description:  "It's Awsome and beautiful!!!!",
price:400
}),
new Product({
imgPath:'https://s-media-cache-ak0.pinimg.com/736x/51/f7/83/51f78313c59d27b0538d18f124aed3d2.jpg',
title:'This is girls shopping place !!!' ,
description:  "It's Awsome but too much costly !!!!",
price:5000
}),
new Product({
imgPath:'https://ss.dresswe.com/images/product/c/100618/11524/11524844_1.jpeg',
title:'This is girls shopping place !!!' ,
description:  "It's Awsome and very pretty!!!!",
price:600
})
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
      done++;
      if(done==products.length){
        exit();
      }
    });
  }
function exit() {
mongoose.disconnect();

}

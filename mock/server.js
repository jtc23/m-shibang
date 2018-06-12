var http = require('http'); 
var fs = require('fs'); 
var url = require('url'); 
let animation=require('./animation');
let product=require('./product');
http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
   return res.end();
  }
   let {pathname,query}=url.parse(req.url);
   if (pathname==="/animation"){
   	res.setHeader('Content-Type', 'application/json;charset=utf-8');  
   	return res.end(JSON.stringify(animation));
   }
    if (pathname==="/product"){
    res.setHeader('Content-Type', 'application/json;charset=utf-8');  
    return res.end(JSON.stringify(product));
   }
   res.end('hello');
}).listen(80);

console.log(111);
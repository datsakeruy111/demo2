var express = require('express')
var server = express()
var bodyParser = require('body-parser')
var path = require('path')
var useRouter = require('../router/useRouter')
server.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
server.use(bodyParser.json());
var Userservice = require('./services');
server.use('/public',express.static(path.join(__dirname,"../public")))
server.use("/demo",useRouter)
server.use("/demo1",useRouter)
server.get("/html1", function(req,res,next){
    res.sendFile(path.join(__dirname,"index1.html"))
})
server.get("/html",function(req,res,next){
    res.sendFile(path.join(__dirname, "index.html"))
})
server.get('/user', function(req,res,next){
    Userservice.getAll().then(function(data){
        res.json(data)
    })
})
server.get('/id',function(req,res,next){
    Userservice.luuAll().then(function(data){
        res.json(data)
    })
})
server.get('/one', function(req,res,next){
    Userservice.datAll().then(function(data){
        res.json(data)
    })
})
server.put('/sua', function(req,res,next){
    var idvl = req.body.id;
    var usernamevl = req.body.username;
    var passwordvl = req.body.password;
    var agevl = req.body.age;
    Userservice.suaAll(idvl,usernamevl,passwordvl,agevl).then(function(data){
        res.json('update thanh cong')
    }).catch(function(err){
        console.log(err + 'err');
    })
})
server.post('/them', function(req,res,next){
    var usernameValues = req.body.username;
    var passwordValues = req.body.password;
    var ageValues = req.body.age;
    Userservice.themAll(usernameValues,passwordValues,ageValues).then(function(data){
        res.json('dang ky thanh cong')
    })
})
server.delete('/xoa', function(req,res,next){
    var idd = req.body.id;
    Userservice.xoaAll(idd).then(function(data){
        res.json('xoa thanh cong')
    }).catch(function(err){
        console.log(err +'err');
    })
})
server.post('/login', function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    Userservice.checklogin(username,password).then(function(data){
        if(data.length>=1) {
            res.json("ban da dang nhap thanh cong")
        }else{
            res.json('ban da nhap sai tai khoan')
        }
    })
})
server.listen(3000, function(){
    console.log('server dang hoat dong tai cong 3000');
})
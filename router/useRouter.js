var express = require("express");
var router = express.Router();
var path = require('path');
var services = require('../CNservices/services')


router.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname,'../CNservices/index.html'))
})
router.get('/demo2',function(req,res,next){
    res.sendFile(path.join(__dirname,'../CNservices/index1.html'))
})
router.post("/rou1", function(req,res,next){
    var username = req.body.username
    var password = req.body.password
    services.tolALl(username,password).then(function(data){
        res.json('tao tai khoan thanh cong')
    })
})

router.post("/rou", function(req,res,next){
    var username = req.body.username
    var password = req.body.password
    console.log(username,password);
    services.checklogin(username,password).then(function(data){
        if(data.length>=1){
            res.json('ban da dang nhap thanh cong')
        }else{
            res.json('ban da dang nhap that bai')
        }
    })

})



module.exports = router;
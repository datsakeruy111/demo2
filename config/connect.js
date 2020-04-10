var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/nodemy-k3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(
    console, 'connection error'
));
db.once('open', function(){
    console.log('ket loi thanh cong')
})
module.exports = mongoose;




















//bai 17
// UserModel.findOne({password:1234}).limit(1).then(function(data){
//     console.log(data);
// })



//bai tap ve nha bai 16
// UserModel.findOne({address:'HP'}).limit(1).updateOne({
//     age :1000,
// }).then(function(data){
//     console.log('tim va doi nguoi dau tien thanh 1000 thanh cong');
// })




//bai tap ve nha bai 15
// UserModel.find({
//     address: 'HP'
// }).updateMany({
//     password :1234
// }).then(function(data){
//     console.log('tim va doi thanh cong');
// })




//bai tap ve nha bai 14
// UserModel.deleteOne({_id:'5e54e012d276b72fd4246734'}).then(function(data){
//     console.log('xoa thanh cong');
// })



//bai tap ve nha bai 13
// UserModel.updateOne({_id: '5e54dfd1ae8eac34d01da3bf'},{
//     username: 'Bac Ho'
// }).then(function(data){
//     console.log('update thanh cong');
// })







//bai tap ve nha bai 11
// UserModel.find({,
//     age:{
//     username:'thanh'
//         $lte:30

//     }
// }).then(function(data){
//     console.log(data);
// })

//bai tap ve nha bai 10
// UserModel.find().skip(5).limit(3).then(function(data){
//     console.log(data);
// })
//bai tap ve nha bai 9
// UserModel.find().limit(5).then(function(data){
//     console.log(data);
// })

//bai tap ve nha bai 8
// UserModel.find({
//     age: {
//         $gte:20
//     }
// }).sort({
//     age :-1
// }).then(function(data){
//     console.log(data);
// })


//bai tap ve nha bai 7
// UserModel.find().sort({
//     age:1
// }).then(function(data){
//     console.log(data);
// })




//bai tap ve nha bai 6
// UserModel.find({
//     username:'ta',
//     age :{
//         $lte: 30
//     }

// }).then(function(data){
//     console.log(data);
// })


//bai tap ve nha bai 5
// UserModel.find({address:'HP'}).then(function(data){
//     console.log(data);
// })

//bai tap ve nha bai 4
// UserModel.find().then(function(data){
//     console.log(data);
// })

//bai tap ve nha bai 3
// UserModel.create({username:'Tran Tien Dat',password:'nodemy111',age:21,address:'Ha Noi'}).then(function(data){
//     console.log('da tao thanh cong');
// })


//bai tap ve nha bai 2
// UserModel.find({$and:[
//     {age:{$gte:20}},
//     {age:{$lte:30}},
// ]}).then(function(data){
//     console.log(data)
// })



//bai tap ve nha bai 1
// UserModel.find({
//    age :{
//        $gte :25
//    } 
// }).then(function(data){
//     console.log(data);
// })


// $gte tìm bản ghi lớn hơn hoặc bằng 
// $lte tìm bản ghi nhỏ hơn hoặc bằng
// UserModel.find({
//    content :{
//        $lte: 'Nodemy-k5'
//    } 
// }).then(function(data){
//     console.log(data);
// })





//sắp xếp bẳng theo thứ tự (cho gọn hơn)
// UserModel.find().sort({content:-1}).then(function(data){
//     console.log(data);
// })


// UserModel.find({
//     $or:[
//         {content :'Nodemy-k3'},
//         {title :'khoa sang'}

//     ]
// }).then(function(data){
//     console.log(data);
// })







// UserModel.update({_id:'5e81692a78ccf127c0a5060e'},{
//     content : 'nodemy-KS3',
//     title : 'Khoa toi',
//     comment : 'hoat dong binh thuong'
// }).then(function(data){
//     console.log(data);
// })
// UserModel.deleteOne({_id :'5e81692a78ccf127c0a5060e'}).then(function(data){
//     console.log(data);
// })






// UserModel.create({username:'dattientran11', password:"nodemy11"}).then(function(data){
//     console.log('Tạo Thành Công')
// })
// UserModel.find({username:'dattientran11'}).then(function(data){
//     console.log(data[0].username)
// })
// UserModel.updateOne({_id:"5e55f9da4f4c2833a427d233"},{
//     username: 'nguyenthilinh',
//     password:"yeulinh"
// }).then(function(data){
//     console.log('Đã đổi thông tin thành công')
// })






// UserModel.create({username: 'trantiendat', password: 'dat123'}).then(function(){
//     console.log('thanhcong')
// }) 
// UserModel.find({_id: "5e55e45905613522cc22f89f"}).then(function(data){
//     console.log(data)
// })
// UserModel.find().then(function(data){
//     console.log(data[1]._id)
// })
// UserModel.create({username: 'Nodemy', password: '123'}).then(function(){
//     console.log('tao thanh cong')
// })
// UserModel.find().then(function(data){
//     console.log(data[1])
// })
// UserModel.find().then(function(data){
//     console.log(data)
// })
// UserModel.find().then(function(data){
//     console.log(data[4])
// })
// UserModel.find({username: 'dat123'}).then(function(data){
//           console.log(data)
   
// })
// UserModel.find({username: 'dat123', password: '22'}).then(function(data){
//     console.log(data)
// })
// UserModel.updateOne({_id:"5e549b2a6711234584f1ac2a"},{
//     username:'nodemy',
//     password:"1234"
// }).then(function(){
//     console.log("thanh cong");
// })
// UserModel.deleteOne({_id:"5e549b2a6711234584f1ac2a"}).then(function(){
//     console.log('thanh cong');
// })

const mongoose = require('mongoose')
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost:27017/myblog')

// 为这次连接绑定事件
const db = mongoose.connection
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed'))
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  account: String,
  password: String,
  newPassword: String
}, { collection: 'listData' });
const inforSchema = mongoose.Schema({
  account: String,
  name: String,
  description: String,
  signature: String,
  friend:Object
},{collection: "infor"});
const blogContentSchema = mongoose.Schema({
  title:String,
  content:String,
  cate:String,
  author:String
},{collection:"blogContent"})

/************** 定义模型Model **************/
const Models = {
  Login: mongoose.model('Login', loginSchema),
  Infor: mongoose.model("Infor",inforSchema),
  BlogContent: mongoose.model("BlogContent",blogContentSchema)

}

module.exports = Models

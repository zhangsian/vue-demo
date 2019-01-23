const models = require('./db').BlogContent
const express = require('express')
const router = express.Router()


router.post('/blogContent/BlogContent/addBlog',(req,res)=>{
    let newBlog = new models({
        title:req.body.title,
        content:req.body.content,
        cate:req.body.cate,
        author:req.body.title,
    })
})


module.exports = router
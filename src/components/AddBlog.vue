<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited"> 
        <label for="">博客标题</label>
        <input v-model="blog.title" required>
        <label for="">博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.cate">
             <label>html</label>
            <input type="checkbox" value="HTML" v-model="blog.cate">
             <label>CSS</label>
            <input type="checkbox" value="css" v-model="blog.cate">
             <label>javascript</label>
            <input type="checkbox" value="javascript" v-model="blog.cate">
        </div>
        <label>作者：</label>
            <select v-model="blog.author">
                <option v-for="(author,index) in authors" :key="index">
                    {{author}}
                </option>
            </select>
            <button v-on:click.prevent='post'>添加博客</button>
    </form>

    <div v-if='submmited'><h3>您的博客添加成功</h3></div>

    <!-- <hr>

    <div id="preview">
        <h3>课程总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>标题内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="(category,index) in blog.cate" :key="index">
                {{category}}
            </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      blog:{
          title:'',
          content:'',
          cate:[],
          author:'',
      },
      authors:['alex','henry','tom'],
      submmited:false
    }
  },

  methods:{
   post: function(){
     this.$http.post("https://wd7889567499rmiipk.wilddogio.com/posts.json",this.blog)
       .then((data)=>{
           this.submmited = true;
           })
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }

    #add-blog{
        margin:20px auto;
        max-width:800px;
        padding: 20px;
    }

    label{
        display: block;
        margin:20px 0 40px;
    }

    input[type='text'],textarea,select{
        display: block;
        width:100%;
        padding:8px;
        /* margin-bottom: 40px; */
    }
    input[type='text']{
        height:200px;
    }

    textarea{
        height:900px;
    }

    #checkboxes label{
        display: inline-block;
        margin-top:0;
    }

    #checkboxes input{
        display:inline-block;
        margin-right: 10px;;
    }

    button{
        display: block;
        margin:20px 0;
        background:#f26b71;
        color:#fff;
        border:0;
        padding:14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;    
    }

    /* #preview{
        padding:10px 20px;
        border:1px dotted #ccc;
        margin:30px 0;
    }

    h3{
        margin-top:10px;
    } */
</style>

<template>
  <div id="show-blogs" v-theme:column="'narrow'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="(blog,index) in filteredBlogs" class="single-blog" :key='index'>        
          <router-link v-bind:to="'/SingleBlog/'+index"><h2 v-rainbow >{{blog.title | to-uppercase}}</h2></router-link>
          <article>{{blog.content | Snippet}}</article>
      </div>
  </div>
</template>

<script>
export default {
  name:'show-blogs',
  data(){
      return {
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get('https://wd7889567499rmiipk.wilddogio.com/posts.json')
      .then(function(res){
       for(var i in res.body){
           this.blogs.push(res.body[i])
       }
       console.log(this.blogs[0])
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  },

  filters:{
    //   "to-uppercase":function(value){
    //       return value.toUpperCase() ;
    //   }

        toUppercase(value){
            return value.toUpperCase();
        },

        Snippet(value){
            return value.slice(0,100)+"...";
         }
 },
        

  directives:{
      'rainbow':{
          bind(el,bingding,vnode){
              el.style.color = "#" + Math.random().toString(16).slice(2,8); 
          }
      }
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 1000px;
    margin:0 auto;
    margin-top:50px;
}

.single-blog{
    padding:20px;
    margin: 20px 0;
    box-sizing: border-box;
    background:#eee;
    border:1px dotted #aaa;
}

#show-blogs a{
    color:#444;
    text-decoration: none;
}

input[type="text"]{
    padding:8px;
    width:100%;
    box-sizing: border-box;
}



</style>

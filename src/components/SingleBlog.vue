<template>
  <div id="single-blog">
    <p>作者:{{blog.author}}</p>
    <h3>标题：{{blog.title}}</h3>
    <article>{{blog.content}}</article>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http.get("https://wd7889567499rmiipk.wilddogio.com/posts.json")
      .then(function(res) {
        var arr = []
         for(var i in res.body){
           arr.push(res.body[i])
       }
        this.blog = arr[this.id]
        console.log(this.blog)
      
      });
  }
};
</script>



<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}

#single-blog p{
    font:14px "";
}
#single-blog article{
    text-indent: 50px;
}
</style>


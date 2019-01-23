<template>
<div>
    <div v-for="(blog,index) in filteredBlogs" class="single-blog" :key='index'>        
        <router-link v-bind:to="'/blog/'+ blog.id"><h2 v-rainbow >{{blog.title | to-uppercase}}</h2></router-link>
        <article>{{blog.body | snippet}}</article>
    </div>
</div>
</template>

<script>
export default {
    props:['blog']
}
</script>

<style  scoped>

</style>
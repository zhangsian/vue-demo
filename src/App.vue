<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
   <!-- <loading v-show="bLoading"></loading> -->
    <blog-header v-show="bNav"></blog-header>
    <router-view></router-view>
    <Footerbar v-show="bFoot"></Footerbar>
  </div>
</template>

<script>
// import AddBlog from './components/AddBlog'
// import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader';
// import Login from './components/Login'
// import Register from './components/Register'
import Footerbar from './components/Footerbar';
// import Home from './components/Home'
// import user from './components/user'
// import loading from './components/loading'

import {mapGetters} from 'vuex';
import * as types from './store/types'

export default {
  name: 'App',
  components: {
    // AddBlog,ShowBlogs ,BlogHeader,Login,Register,Footerbar,Home,user
    BlogHeader,Footerbar
  },
  computed:mapGetters([
    'bNav','bFoot',
  ]),

  watch:{
    $route:{
     handler:function(to){
       let path = to.path;
       console.log(path)
       if(/Home/.test(path)){
         this.$store.dispatch(types.VIEW_NAV,true);
         this.$store.dispatch(types.VIEW_FOOT,true);
        //  this.$store.dispatch(types.VIEW_LOADING,true);
       }
       if(/Login|Register|user/.test(path)){
         this.$store.dispatch(types.VIEW_NAV,false);
         this.$store.dispatch(types.VIEW_FOOT,true);
        //  this.$store.dispatch(types.VIEW_FOOT,false);
       }
        if(/AddBlog|ShowBlogs|SingleBlog/.test(path)){
         this.$store.dispatch(types.VIEW_NAV,true);
         this.$store.dispatch(types.VIEW_FOOT,false);
        //  this.$store.dispatch(types.VIEW_FOOT,false);
       }
     },
     immediate:true
    }
  }
}
</script>

<style>

</style>

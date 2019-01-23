<template>
<div id="user">
  <div class="top">
    <div class="profile"></div>
    <div class="username">zhangsian</div>
    <div class="locat">shanghaiqianfeng</div>
    <div class="logout" @click="logout">注销</div>
  </div>

    <div class="about">
      <p>about me</p>
      <p class="inc">三年工作经验，精通html，css，javascript，熟练使用vue，react等前端框架，对auglar有着一定的理解。会使用nodejs搭建前端项目</p>
    </div>
    <div class="follows">
      <p>follows</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="blogs">
      <p>blogs</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  
</div>

</template>

<script>
import store from '../store'
export default{
  beforeRouteEnter(to,from,next){
    if(store.state.user.auth){
      next()
    }else{
      next('/login')
    }
  },
  methods:{
    logout(){

    }
  }
}

</script>

<style scoped>

  .top{
    background:url(../assets/images/userbg.jpg) no-repeat;
    background-size: 100% 100%;
    width:100%;
    height:600px;
    text-align: center;
    overflow: hidden;
  }
  .top .profile{
    width:160px;
    height:160px;
    border-radius: 80px;
    background:url(../assets/img/headimg.png) no-repeat;
    background-size: 100% 100%;
    margin:60px auto;  
  }

  .top .username{
    margin:20px auto;
    font:30px/40px "";
    color:#fff;
  }

    .top .locat{
    margin:20px auto;
    font:30px/40px "";
    color:#fff;
  }

  .top .logout{
    margin:20px auto;
    font:30px/40px "";
    color:lightskyblue;
  }


 .about{
   width:90%;
   margin:100px auto;
   height:400px;
   box-shadow:10px 0px 30px 10px #999;
 }
 .about p{
   font:40px/80px "";
   padding-left:50px;
   box-sizing: border-box;
 }
  
 .about .inc{
   padding:0 30px;
   box-sizing: border-box;
   font:30px/40px "";
 }

.follows{
   width:90%;
   margin:100px auto;
   height:400px;
   box-shadow:10px 0px 30px 10px #999;
 }
 .follows p{
     font:40px/80px "";
   padding-left:50px;
   box-sizing: border-box;
 }
 .follows ul{
   list-style: none;
 }
 .follows ul li{
   list-style: none;
   float: left;
   width: 80px;
   height:80px;
   border-radius: 40px;
   background:burlywood;
   margin-left: 30px;
 }


.blogs{
   width:90%;
   margin:100px auto;
   height:400px;
   box-shadow:10px 0px 30px 10px #999;
}

.blogs p{
    font:40px/80px "";
   padding-left:50px;
   box-sizing: border-box;
}

.blogs ul{
  list-style: none;
}

.blogs ul li{
  height:40px;
  width:100%;
  padding:20px ;
  box-sizing: border-box;
  margin-bottom:30px;
  border:1px solid #666;
}

</style>

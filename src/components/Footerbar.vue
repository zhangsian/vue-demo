<template>
  <div class="foot-btn" >
    <ul>
      <router-link tag="li" class="home" to="/Home" exact><a href="javascript:;"></a></router-link>
      <router-link tag="li" class="write" to="/AddBlog" exact></router-link>
      <router-link tag="li" class="my" to="/user" exact><a href="javascript:;"></a></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:''
}
</script>

<style scoped>

.foot-btn{width:100%;height:6.25rem; background:url(../assets/images/foot4.jpg)  repeat left top; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:32rem; margin:0 auto;list-style: none}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:4.44rem;height:5rem; background:url(../assets/images/foot2.jpg) no-repeat 0 0; background-size:100%; margin-top:0.78rem;}
.foot-btn ul .write{width:6.4rem;height:6.3rem; background:url(../assets/images/foot1.jpg) no-repeat 0 0; background-size:100%; margin-left:7.2rem;}
.foot-btn ul .my{width:4.44rem;height:5rem; background:url(../assets/images/foot3.jpg) no-repeat 0 0;background-size:100%; margin-left:7.2rem; margin-top:0.78rem;}

</style>

<template>
    <nav>
        <ul>
            <li>
                <!-- <router-link to="/" exact>首页</router-link> -->
                <router-link to="/Home" exact>首页</router-link>
                <router-link to="/ShowBlogs" exact>读博客</router-link>
                <router-link to="/AddBlog" exact>写博客</router-link>
                <router-link to="/user" exact>个人中心</router-link>
            </li>
        </ul>

        <div class="login">
             <router-link to="/Login" exact>登录</router-link>
            <!-- <a href="javascript:;">登录</a> -->
            <span>|</span>
             <router-link to="/Register" exact>注册</router-link>
            <!-- <a href="javascript:;">注册</a> -->
        </div>
        
    </nav>
</template>


<script>
export default {
    name:'blog-header'
}
</script>



<style scoped>
    nav{
        background:#f26b71;
        position: relative;
    }

   ul{
       list-style: none;
       text-align:center;
       margin:0;
   }
   
   li{
       display: inline-block;
       margin:0 10px;
   }

   a{
       color: #fff;
       text-decoration: none;
       border-radius:5px;
       padding: 12px;
        font:30px "";
   }


   nav{
       background:crimson;
       padding: 30px 0;
       /* margin-bottom: 40px; */
   }


   .router-link-active{
       background:rgba(255,255,255,0.8);
       color:#444;
   }

   .login{
       position:absolute;
       right:0;
   }

   .login a{
       color:lightskyblue;
       font:20px "";
   }
   
   
</style>



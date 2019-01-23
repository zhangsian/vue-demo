<template>
  <div class="hello">
    <el-form label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
      <h3 class="title">myblog登录</h3>
      <el-form-item prop="username">
        <el-input type="text" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox  checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;"> 登录</el-button>
        <el-button type="primary" style="width:100%;background:#999">煤油账号，先注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    margin-top:200px;
    width:100%;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 auto;
    width: 80%;
    height:1400px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    /* border: 1px solid #eaeaea; */
    /* box-shadow: 0 0 25px #cac6c6; */
    background: -ms-linear-gradient(top, #fff, #6495ed);        /* IE 10 */
    background:-moz-linear-gradient(top,#b8c4cb,#f6f6f8);/*火狐*/
    background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#b8c4cb), to(#f6f6f8));/*谷歌*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#6495ed));      /* Safari 4-5, Chrome 1-9*/
    background: -webkit-linear-gradient(top, #fff, #6495ed,#fff);   /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top, #fff, #6495ed);  /*Opera 11.10+*/   

  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  button {
    margin: 20px 0 0 0 ;
  }
  .el-button+.el-button {
    margin-left: 0;
  }
</style>

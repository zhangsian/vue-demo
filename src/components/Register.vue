<template>
  <div id="layout">
    <span>myblog账号注册</span>
    <form method="post" v-if="!submmited">
      <ul>
        <p id="err_msg"></p>
        <li>
          <i class="un">
            <img src="../assets/images/user_name.png">
          </i>
          <input v-model="user.username" class="username" type="text" placeholder="请输入用户名">
        </li>
        <li>
          <i class="pw">
            <img src="../assets/images/pwd.png">
          </i>
          <input class="pwd" type="password" v-model="user.password" placeholder="请输入密码">
        </li>
        <li>
          <i class="pw2">
            <img src="../assets/images/pwd.png">
          </i>
          <input class="pwd2" type="password" v-model="password2" placeholder="请输入确认密码">
        </li>
        <li>
          <i class="yz">
            <img src="../assets/images/msg.png">
          </i>
          <input v-model="user.phonenumber" class="yzm" type="text" placeholder="请输入手机号">
        </li>
        <div class="queren">
          <input class="fx" type="checkbox" checked="checked">
          <p>我已阅读并同意《用户协议》</p>
        </div>
      </ul>
      <div class="reg_btn">
        <button class="submit"  type="submit"  v-on:click.prevent="post">注册</button>
        <a href="javascript:;">
          <div class="reg-login">
            <p>已有帐号，立即登陆</p>
          </div>
        </a>
      </div>
    </form>
    <div v-if="submmited">
      <h3>注册成功</h3>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {

  name: "Register",
  data() {
    return {
      submmited: false,
      user:{
        username: "",
        phonenumber:"",
        password: ""
      },
      password2:"",
    };
  },

  methods: {

    post() {
      if(this.user.username == "" || this.user.phonenumber == ""){
        alert("请输入用户名和密码")
      }else if(this.user.password != this.password2){
        alert("请输入相同的密码")
      }else{
        this.$http.post(
            "https://wd3536571756gaprur.wilddogio.com/userdata.json",
            this.user
          )
          .then((data) => {
            var that = this;
            this.submmited = true;
            store.state.user.auth = true;
            setTimeout(()=>{
              this.$router.push("/user")
            },3000)
          });  
         
            // let that = this;
               
      }  
    }
  }
};
</script>


<style scoped>
#layout {
  padding-top: 0px;
  max-width: 90%;
  margin: auto;
  min-width: 320px;
  background: url(../assets/images/reg_bg.png) no-repeat;
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
  min-height: 100%;
  height: 1800px;
}
#layout span {
  display: block;
  position: relative;
  text-align: center;
  height: 80px;
  line-height: 80px;
  font-family: "Microsoft YaHei";
  color: #fff;
  font-size: 1.5em;
}
#layout ul li {
  list-style: none;
  /* margin-left:-6%; */
  display: block;
  /* position: relative; */
}
#err_msg {
  height: 15px;
  text-align: center;
  color: red;
}
.username,
.yzm,
.pwd,
.pwd2 {
  width: 70%;
  height: 30px;
  border-radius: 4px;
  background: #fff;
  /* filter:alpha(opacity:70); */
  opacity: 0.7;
  list-style: none;
  margin: 5px 84px;
  padding-left: 50px;
  border: 1px solid #ccc;
}
.un,
.yz,
.pw,
.pw2 {
  position: absolute;
  margin-top: 7px;
  left: 215px;
}
.queren {
  list-style: none;
  margin: 5px 0;
  width: 25%;
  margin-left: 10%;
  height: 20px;
  position: relative;
}
.fx {
  width: 13px;
  height: 13px;
  border: 1px solid #4f7b9c;
  float: left;
}
.queren p {
  text-align: left;
  margin-top: 2px;
  font-family: "Microsoft YaHei";
  font-size: 12px;
  color: #0c0c0c;
  width: 180px;
}
.reg-btn {
  width: 100%;
  height: 30%;
  margin-top: 80px;
}
.submit {
  width: 70%;
  height: 35px;
  background: #f34541;
  border: 1px solid #f34541;
  text-align: center;
  margin: 30px 0 0 11%;
  color: #fff;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
}
.reg-login p {
  width: 70%;
  height: 35px;
  line-height: 35px;
  background: #989898;
  border: 1px solid #989898;
  text-align: center;
  margin: 15px 0 0 11%;
  color: #fff;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  border-radius: 3px;
  display: block;
}
#send {
  position: absolute;
  margin: 5px 0 0 -87px;
  width: 87px;
  height: 34px;
  border-radius: 3px;
  border: 1px solid #79b235;
  background: #79b235;
  font-family: "Microsoft YaHei";
  font-size: 12px;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>

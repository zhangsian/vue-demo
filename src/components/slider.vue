<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"><a href="javascript:;"></a></swipe-item>
        <swipe-item class="slide2"><a href="javascript:;"></a></swipe-item>
        <swipe-item class="slide3"><a href="javascript:;"></a></swipe-item>
    </swipe>
</template>
<script>

import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
     name:'slider',
    components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },

}
</script>
<style scoped>
.my-swipe {
  height: 400px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  width: 100%;
  /* max-width:800px; */
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}
.slide1 a{background:url(../assets/images/slider1.jpg) no-repeat ;display: block;width: 100%;height: 100%;background-size:100% 100%;}
.slide2 a{background:url(../assets/images/slider2.jpg) no-repeat ;display: block;width: 100%;height: 100%;background-size:100% 100%;}
.slide3 a{background:url(../assets/images/slider3.jpg) no-repeat ;display: block;width: 100%;height: 100%;background-size:100% 100%;}
.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>




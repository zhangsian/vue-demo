<template>
<div>
    <slider></slider>
    <div class="center">博客分类</div>
    <sort></sort>
</div>
</template>


<script>
 import slider from './slider';
 import sort from './sort';

export default {
   
     components:{slider,sort}
}
</script>

<style scoped>
    .center{
        font:40px/80px "";
        width:100%;
        padding-left:50px;
        box-sizing: border-box;
    }
</style>

